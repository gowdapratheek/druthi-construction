import  { useEffect, useState } from "react";
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
    { src: "/1.jpg", blurHash: blurhashes["1.jpg"] },
    { src: "/2.jpg", blurHash: blurhashes["2.jpg"] },
    { src: "/3.jpg", blurHash: blurhashes["3.jpg"] },
    { src: "/5.jpg", blurHash: blurhashes["5.jpg"] },
    { src: "/6.jpg", blurHash: blurhashes["6.jpg"] },
    { src: "/7.jpeg", blurHash: blurhashes["7.jpeg"] },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[15vh]">
      {images.map((image, index) => (
        <Gallery key={index} src={image.src} blurHash={image.blurHash} />
      ))}
    </div>
  );
};

export default OurGallery;
