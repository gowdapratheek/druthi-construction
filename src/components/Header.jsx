import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { GiThorHammer } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const projectsDropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    setIsProjectsOpen(false);
  };

  const toggleProjectsDropdown = () => setIsProjectsOpen((prev) => !prev);

  const handleNavLinkClick = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        projectsDropdownRef.current &&
        !projectsDropdownRef.current.contains(event.target)
      ) {
        setIsProjectsOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-[3%] right-[5%] w-[90%] mx-auto z-50 bg-[#faf7f5]/0 backdrop-blur-lg rounded-xl border border-[#D5C5A2]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#e28d55]" : ""
              } hover:text-[#e28d55] flex justify-center items-center  `
            }
            onClick={handleNavLinkClick}
          >
            <img src="/favicon.png" alt="Logo" className="h-10 rounded-md" />
            <img
              src="/name-img.png"
              alt="Name Logo"
              className="h-16 rounded-md"
            />
          </NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <GiThorHammer
          onClick={toggleMenu}
          className={`cursor-pointer transition-transform duration-300 transform scale-x-[-1] lg:hidden ${
            isOpen
              ? "-rotate-[20deg] translate-y-4 text-[#e28d55]"
              : " text-white"
          }`}
          size={50}
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-lg font-normal text-[#faf7f5] uppercase tracking-wider">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-[#e28d55]" : ""} hover:text-[#e28d55]`
            }
            onClick={handleNavLinkClick}
          >
            HOME
          </NavLink>
          {["About Us", "Contact Us", "Services"].map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
              className={({ isActive }) =>
                `${isActive ? "text-[#e28d55]" : ""} hover:text-[#e28d55]`
              }
              onClick={handleNavLinkClick}
            >
              {link}
            </NavLink>
          ))}
          <div className="relative " ref={projectsDropdownRef}>
            <button
              onClick={toggleProjectsDropdown}
              className="text-[#faf7f5] hover:text-[#e28d55] flex items-center uppercase"
            >
              Projects
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${
                  isProjectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProjectsOpen && (
              <div className="absolute bg-[#faf7f5] text-[#e28d55] shadow-lg mt-2 rounded-lg">
                <NavLink
                  to="/projects/project1"
                  className="block py-3 px-6 rounded-lg"
                >
                  Residential
                </NavLink>
                <NavLink
                  to="/projects/project2"
                  className="block py-3 px-6 rounded-lg"
                >
                  Government
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          {[
            {
              href: "https://www.instagram.com/druthi_construction/",
              icon: FaInstagram,
            },
            { href: "https://facebook.com", icon: FaFacebookF },
            { href: "https://wa.me/8217730399?text=Hello", icon: FaWhatsapp },
          ].map(({ href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#faf7f5] hover:text-[#e28d55] transition-transform duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          ref={menuRef}
          className="lg:hidden mt-2 rounded-lg shadow-lg transition-transform duration-1000 text-center space-y-6 font-normal text-xl uppercase tracking-wider"
          style={{ fontFamily: "Poppins, serif" }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-[#e28d55]" : ""} hover:text-[#e28d55]`
            }
            onClick={handleNavLinkClick}
          >
            HOME
          </NavLink>
          {["About Us", "Contact Us", "Services"].map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
              className={({ isActive }) =>
                `block px-4 py-2 ${
                  isActive ? "text-[#e28d55]" : "text-[#faf7f5]"
                }`
              }
              onClick={handleNavLinkClick}
            >
              {link}
            </NavLink>
          ))}
          <div className="relative w-full " ref={projectsDropdownRef}>
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
              <div className="relative left-1/2 transform -translate-x-1/2 shadow-lg mt-2 rounded-lg">
                <NavLink
                  to="/projects/project1"
                  className="block py-4 px-6 rounded-lg text-[#faf7f5] hover:text-[#e28d55]"
                  onClick={handleNavLinkClick}
                >
                  Residential
                </NavLink>
                <NavLink
                  to="/projects/project2"
                  className="block py-4 px-6 rounded-lg text-[#faf7f5] hover:text-[#e28d55]"
                  onClick={handleNavLinkClick}
                >
                  Government
                </NavLink>
              </div>
            )}
          </div>
          <div className="flex md:hidden justify-evenly w-full text-center p-6">
            {[
              {
                href: "https://www.instagram.com/druthi_construction/",
                icon: FaInstagram,
              },
              { href: "https://facebook.com", icon: FaFacebookF },
              { href: "https://wa.me/8217730399?text=Hello", icon: FaWhatsapp },
            ].map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#e28d55] hover:text-[#faf7f5]"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
