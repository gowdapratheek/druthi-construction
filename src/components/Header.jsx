import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { GiThorHammer } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  // Create a ref for the dropdown
  const projectsDropdownRef = useRef(null);
  const menuRef = useRef(null);

const toggleMenu = (e) => {
  e.stopPropagation(); // Prevents handleClickOutside from firing
  setIsOpen((prev) => !prev); // Toggle the menu open/close
  setIsProjectsOpen(false); // Close the projects dropdown when toggling the menu
};

  const toggleProjectsDropdown = () => {
    setIsProjectsOpen((prev) => !prev);
  };

    const handleNavLinkClick = () => {
      setIsOpen(false); // Close the mobile menu
      setIsProjectsOpen(false); // Close the projects dropdown
    };

  // Close the projects dropdown if clicked outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      projectsDropdownRef.current &&
      !projectsDropdownRef.current.contains(event.target)
    ) {
      setIsProjectsOpen(false); // Close projects dropdown if clicked outside
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Close mobile menu if clicked outside
    }
  };

  // Using 'click' event
  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);


  return (
    <>
      <header className="fixed top-[3%] right-[5%] w-[90%] mx-auto z-50 bg-[#faf7f5]/0 backdrop-blur-lg rounded-xl border border-[#D5C5A2]">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/favicon.png" alt="Logo" className="h-10 rounded-md" />
            <img src="/name-img.png" alt="Logo" className="h-16 rounded-md" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <GiThorHammer
            onClick={toggleMenu}
            className={`cursor-pointer transition-transform duration-300 transform scale-x-[-1] lg:hidden ${
              isOpen
                ? "-rotate-[20deg] translate-y-4 text-[#e28d55]"
                : " text-white"
            }`}
            size={50}
          />

          {/* Navigation Links for Desktop */}
          <nav className="hidden lg:flex space-x-6 text-lg font-normal text-[#faf7f5] uppercase tracking-wider">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#e28d55]" : ""} hover:text-[#e28d55]`
              }
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-[#e28d55]" : ""} hover:text-[#e28d55]`
              }
              onClick={handleNavLinkClick}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-[#e28d55]" : ""} hover:text-[#e28d55]`
              }
              onClick={handleNavLinkClick}
            >
              Contact Us
            </NavLink>
            <div className="relative uppercase" ref={projectsDropdownRef}>
              <button
                onClick={toggleProjectsDropdown}
                className="text-[#faf7f5] hover:text-[#e28d55] flex items-center uppercase"
              >
                Projects
                <IoIosArrowDown
                  className={`ml-1  transition-transform duration-300 ${
                    isProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProjectsOpen && (
                <div className="absolute bg-[#faf7f5] text-[#e28d55] shadow-lg mt-2 rounded-lg">
                  <NavLink
                    to="/projects/project1"
                    className="block py-3 px-6 rounded-lg "
                  >
                    Residential 
                  </NavLink>
                  <NavLink
                    to="/projects/project2"
                    className="block py-3 px-6 rounded-lg "
                  >
                    Government 
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${isActive ? "text-[#e28d55]" : ""} hover:text-[#e28d55]`
              }
              onClick={handleNavLinkClick}
            >
              Services
            </NavLink>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.instagram.com/druthi_constructions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#faf7f5] hover:text-[#e28d55] transition-transform duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <FaInstagram size={26} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#faf7f5] hover:text-[#e28d55] transition-transform duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <FaFacebookF size={26} />
            </a>
            <a
              href="https://wa.me/8217730399?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#faf7f5] hover:text-[#e28d55] transition-transform duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <FaWhatsapp size={26} />
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <nav
            ref={menuRef}
            className="lg:hidden mt-2 rounded-lg shadow-lg transition-transform duration-1000 text-center space-y-6 font-normal text-xl uppercase tracking-wider"
            style={{ fontFamily: "Poppins, serif" }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2  ${
                  isActive ? "text-[#e28d55]" : "text-[#faf7f5]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-4 py-2  ${
                  isActive ? "text-[#e28d55]" : "text-[#faf7f5]"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-4 py-2  ${
                  isActive ? "text-[#e28d55]" : "text-[#faf7f5]"
                }`
              }
            >
              Contact Us
            </NavLink>
            <div className="relative w-full m-auto" ref={projectsDropdownRef}>
              <div className="w-full flex justify-center items-center">
                <button
                  onClick={toggleProjectsDropdown}
                  className="text-[#faf7f5] hover:text-[#e28d55] flex items-center uppercase tracking-wider"
                >
                  Projects
                  <IoIosArrowDown
                    className={`ml-1 transition-transform duration-300 ${
                      isProjectsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {isProjectsOpen && (
                <div className="relative left-1/2 transform -translate-x-1/2  shadow-lg mt-2 rounded-lg">
                  <NavLink
                    to="/projects/project1"
                    className="block py-4 px-6 rounded-lg text-[#faf7f5]  hover:text-[#e28d55]"
                  >
                    Residential Projects
                  </NavLink>
                  <NavLink
                    to="/projects/project2"
                    className="block py-4 px-6 rounded-lg text-[#faf7f5] hover:text-[#e28d55]"
                  >
                    Government Projects
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block px-4 py-2  ${
                  isActive ? "text-[#e28d55]" : "text-[#faf7f5]"
                }`
              }
            >
              Services
            </NavLink>
            <div className="flex md:hidden justify-evenly w-full text-center p-6">
              <a
                href="https://www.instagram.com/druthi_constructions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#faf7f5] hover:text-[#e28d55]"
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#faf7f5] hover:text-[#e28d55]"
              >
                <FaFacebookF size={26} />
              </a>
              <a
                href="https://wa.me/8217730399?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#faf7f5] hover:text-[#e28d55]"
              >
                <FaWhatsapp size={26} />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
