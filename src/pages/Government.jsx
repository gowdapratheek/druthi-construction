import { useEffect, useState } from "react";
import Gallery from "../components/Gallery";

const OurGallery = () => {
  const [blurhashes, setBlurhashes] = useState(null);

  useEffect(() => {
    const loadBlurhashes = async () => {
      const data = await import("../blurhashes.json");
      setBlurhashes(data.default);
    };
    loadBlurhashes();
  }, []);

  // Placeholder if blurhashes haven't loaded yet
  if (!blurhashes) return <p>Loading...</p>;

  const images = [
    { src: "/govt/1.jpg", blurHash: blurhashes["1.jpg"] },
    { src: "/govt/2.jpg", blurHash: blurhashes["2.jpg"] },
    { src: "/govt/3.jpg", blurHash: blurhashes["3.jpg"] },
    { src: "/govt/5.jpg", blurHash: blurhashes["5.jpg"] },
  ];

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 p-4 gap-4 mt-[15vh] ">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <Gallery src={image.src} blurHash={image.blurHash} />
        </div>
      ))}
    </div>
  );
};

export default OurGallery;
