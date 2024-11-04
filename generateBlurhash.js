import fs from "fs";
import path from "path";
import sharp from "sharp";
import { encode } from "blurhash";
import { fileURLToPath } from "url";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getImageData = async (imagePath) => {
  const image = await sharp(imagePath)
    .raw()
    .ensureAlpha()
    .resize(32, 32, { fit: "inside" })
    .toBuffer({ resolveWithObject: true });

  return {
    data: image.data,
    width: image.info.width,
    height: image.info.height,
  };
};

const encodeImageToBlurhash = async (imagePath) => {
  const imageData = await getImageData(imagePath);
  const { data, width, height } = imageData;
  return encode(new Uint8ClampedArray(data), width, height, 4, 4);
};

const generateBlurhashes = async () => {
  const publicDir = path.join(__dirname, "public");
  const images = fs
    .readdirSync(publicDir)
    .filter((file) => /\.(jpe?g|png)$/i.test(file));

  const blurhashes = {};

  for (const image of images) {
    const imagePath = path.join(publicDir, image);
    const blurHash = await encodeImageToBlurhash(imagePath);
    blurhashes[image] = blurHash;
    console.log(`Generated blurhash for ${image}: ${blurHash}`);
  }

  // Save to blurhashes.json
  fs.writeFileSync(
    path.join(__dirname, "/src/blurhashes.json"),
    JSON.stringify(blurhashes, null, 2)
  );

  console.log("Blurhashes saved to blurhashes.json");
};

generateBlurhashes().catch(console.error);
