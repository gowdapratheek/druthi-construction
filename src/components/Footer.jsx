import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 text-center md:text-left">
          {/* Job & Internships Section */}
          <div className="lg:pr-8 border-b pb-6 md:border-r md:border-b-0 border-[#D5C5A2]">
            <h3
              className="text-lg md:text-2xl font-bold"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              For Job & Internships
            </h3>
            <p className="mt-2" style={{ fontFamily: "Poppins, serif" }}>
              Mobile:{" "}
              <a
                href="tel:+919448380947"
                className="text-gray-600 hover:underline"
              >
                +91 9448380947
              </a>
            </p>
            <p style={{ fontFamily: "Poppins, serif" }}>
              Email:{" "}
              <a
                href="mailto:contact@druthiconstructions.com"
                className="text-gray-600 hover:underline"
              >
                contact@druthiconstructions.com
              </a>
            </p>
            <ul
              className="mt-4 space-y-1"
              style={{ fontFamily: "Poppins, serif" }}
            >
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:px-8 border-b pb-6 md:border-r border-[#D5C5A2] md:border-b-0">
            <h3
              className="text-lg lg:text-2xl font-bold"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Quick Links
            </h3>
            <ul
              className="space-y-2 mt-2"
              style={{ fontFamily: "Poppins, serif" }}
            >
              {["Home", "About Us", "Contact Us", "Projects", "Our Team"].map(
                (link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Office & Social Media Section */}
          <div className="lg:pl-8">
            <h3
              className="text-lg lg:text-2xl font-bold"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Druthi Constructions Office
            </h3>
            <p className="mt-2" style={{ fontFamily: "Poppins, serif" }}>
              #148, 1st Main Road, 2nd Stage, RMV Extension, Mysore - 570026
            </p>
            <div className="mt-4">
              <h4
                className="text-lg lg:text-2xl font-bold"
                style={{ fontFamily: "Roboto Slab, serif" }}
              >
                Social Media
              </h4>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <div className="hidden md:flex space-x-4">
                  {[
                    {
                      href: "https://www.instagram.com/druthi_constructions/",
                      icon: FaInstagram,
                    },
                    { href: "https://facebook.com", icon: FaFacebookF },
                    {
                      href: "https://wa.me/8217730399?text=Hello",
                      icon: FaWhatsapp,
                    },
                  ].map(({ href, icon: Icon }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e28d55] transition-transform duration-300 transform hover:scale-110 hover:rotate-3"
                    >
                      <Icon size={26} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-t border-[#D5C5A2] w-full mx-auto" />

        {/* Footer Bottom Text */}
        <div className="text-center p-4">
          <p className="text-gray-500" style={{ fontFamily: "Poppins, serif" }}>
            Copyright © 2024{" "}
            <span className="font-bold">Druthi Construction.</span>{" "}
            <br className="md:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
