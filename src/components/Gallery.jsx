import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import PropTypes from "prop-types";

const Gallery = ({ src, blurHash }) => {
  const [loaded, setLoaded] = useState(false);
  const [resolution, setResolution] = useState({ x: 32, y: 32 });

  // Adjust resolution based on window width for better performance
  useEffect(() => {
    const updateResolution = () => {
      const width = window.innerWidth;
      setResolution({
        x: width < 640 ? 16 : width < 1024 ? 24 : 32,
        y: width < 640 ? 16 : width < 1024 ? 24 : 32,
      });
    };

    updateResolution();
    window.addEventListener("resize", updateResolution);
    return () => window.removeEventListener("resize", updateResolution);
  }, []);

  return (
    <div className="relative w-full h-full mb-4 overflow-hidden">
      {!loaded && (
        <Blurhash
          hash={blurHash}
          width="100%"
          height="100%"
          resolutionX={resolution.x}
          resolutionY={resolution.y}
          punch={1}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
      <img
        src={src}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        alt="Construction Site"
      />
    </div>
  );
};

Gallery.propTypes = {
  src: PropTypes.string.isRequired,
  blurHash: PropTypes.string,
};

export default Gallery;
