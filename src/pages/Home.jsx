import Gallery from "@/components/Gallery";
import EstimateSection from "./EstimateSection";
import Services from "./Services";
import Faqs from "/src/pages/Faqs.jsx";
const Home = () => {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center  ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover sm:bg-left">
          <Gallery
            src="/1.jpg"
            blurHash="UHJaWI%%01RPV@%2WBRj_18_IARkIVD*ITj?"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative top-[2%] lg:top-10 z-10 text-center text-white px-4 lg:px-6">
          <h1 className="text-2xl md:text-3xl font-light text-left font-pop">
            Welcome to
          </h1>
          <h2 className="text-[2.2rem] md:text-6xl lg:text-8xl font-bold font-roboto-slab">
            Druthi Construction
          </h2>
          <p className="text-xs md:text-sm mb-8 text-right font-normal font-pop">
            From concepts to creation, we’re with you every step
          </p>
          <p className="max-w-3xl mx-auto text-sm md:text-xl mb-8 font-pop">
            &quot;We specialize in high-quality residential construction,
            delivering beautiful and durable homes that meet your needs. With a
            focus on craftsmanship, affordability, and customer satisfaction, we
            bring your vision to life, ensuring every detail is handled with
            care and precision.&quot;
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#hire-us"
              className="bg-white text-black w-1/2 md:w-1/4 px-5 py-3 rounded-md shadow hover:bg-gray-200 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center font-roboto-slab"
            >
              Hire Us
            </a>
            <a
              href="#our-projects"
              className="bg-orange-500 text-white w-1/2 md:w-1/4 px-5 py-3 rounded-md shadow hover:bg-orange-600 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center font-roboto-slab"
            >
              Our Projects
            </a>
          </div>
        </div>
      </div>
      <Services />
      <EstimateSection />
      <Faqs />
    </>
  );
};

export default Home;
