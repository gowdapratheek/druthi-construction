import { LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

const AboutUs = () => {
  return (
    <div className="p-6 sm:p-8 mt-[15vh]">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 font-roboto-slab">
        About Us
        <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F]" />
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 items-center">
        {/* Description Section */}
        <div className="flex flex-col w-full md:w-[80%] md:p-4">
        
          <p
            className="text-gray-600 text-sm sm:text-md mb-2 sm:mb-4 text-center"
            style={{ fontFamily: "Poppins, serif" }}
          >
            Dhruthi Construction, where luxury meets affordability in the realm
            of exceptional infrastructure. With decades of unwavering expertise,
            we take pride in crafting spaces that blend opulence with cost
            effectiveness. Driven by a commitment to quality, our seasoned team
            ensures each project reflects excellence, making luxury living
            accessible. Discover a harmonious fusion of experience & innovation
            as we redefine construction standards. Dhruthi Constructions
            building dreams with a legacy of 20 years.
          </p>
        </div>

        {/* Founder Section */}
        <div id="team" className="bg-gray-100 shadow-md rounded-lg p-4 sm:p-6 flex flex-col md:flex-row items-center w-full md:w-[70%] text-center md:text-left gap-4 sm:gap-6 justify-evenly">
          {/* Founder Image */}
          <img
            src="/mahesh.png" // Replace with actual founder's image URL
            alt="B K Mahesh"
            className="rounded-lg w-[80%] md:w-[40%] h-auto object-contain mb-4 md:mb-0"
          />
          {/* Founder Info */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-evenly">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              B K Mahesh
            </h3>
            <p
              className="text-gray-500 text-sm sm:text-lg"
              style={{ fontFamily: "Poppins, serif" }}
            >
              B.E Civil Engineer
            </p>
            <p
              className="text-gray-500 text-xs sm:text-sm"
              style={{ fontFamily: "Poppins, serif" }}
            >
              Founder of Dhruthi Construction
            </p>

            {/* Contact Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-2 sm:mt-4">
              <a
                href="tel:+919448380947"
                className="text-gray-600 hover:text-black text-xl sm:text-2xl"
                aria-label="Phone"
              >
                <FiPhone />
              </a>
              <a
                href="mailto:example@example.com"
                className="text-gray-600 hover:text-black text-xl sm:text-2xl"
                aria-label="Email"
              >
                <LuMail />
              </a>
              <a
                href="https://wa.me/9448380947"
                className="text-gray-600 hover:text-black text-xl sm:text-2xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
