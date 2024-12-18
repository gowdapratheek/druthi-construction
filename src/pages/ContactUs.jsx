import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LuMail } from "react-icons/lu";
import { FiClock, FiPhone } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  window.scrollTo(0, 0);
  const form = useRef();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMP,
        form.current,
        {
          publicKey: import.meta.env.VITE_ID,
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const [status, setStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-8 mt-[17vh] font-roboto-slab">
        Contact Us
        <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F]" />
      </h2>
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 lg:p-6 gap-8">
        {/* Left Form Section */}
        <div className="flex-1 p-6 sm:p-8 font-pop">
          <h2 className="text-3xl font-bold mb-6 text-center underline font-roboto-slab">
            Connect With Us
          </h2>
          <p className="text-gray-500 mb-8 text-center font-pop">
            Complete the form, and we will get back to you
          </p>
          <form className="space-y-6 text-lg" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none px-2 py-2"
              placeholder="Your Name*"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none px-2 py-2"
              placeholder="Your Email"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none px-2 py-2"
              placeholder="Your Phone Number*"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none px-2 py-2"
              placeholder="Describe your requirements*"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white rounded py-3 transition duration-300 hover:bg-orange-600"
            >
              Submit
            </button>
            {status && (
              <p className="text-center mt-4 text-gray-600 font-medium">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right Contact Info Section */}
        <div className="flex-1 bg-gray-100 p-6 sm:p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
          <h2 className="text-3xl font-bold mb-6 text-center underline font-roboto-slab">
            Get In Touch
          </h2>
          <div className="space-y-6 pl-6 sm:pl-8 font-pop text-lg">
            <div>
              <p className="font-semibold">
                Dhruthi Construction Mysore Office
              </p>
              <p className="text-gray-600">
                #148, 1st Main Road, 2nd Stage, RMV Extension, Mysore - 570026
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FiClock className="text-gray-600 h-8 w-8" />
              <p className="text-gray-600">
                Monday - Saturday: 9:30 AM - 7:00 PM
              </p>
            </div>
            <div className="flex items-center space-x-3 overflow-hidden">
              <LuMail className="text-gray-600 h-6 w-6 sm:h-8 sm:w-8" />{" "}
              {/* Adjust icon size */}
              <a
                href="mailto:contact@dhruthiconstructions.com"
                className="text-gray-600 hover:text-black text-sm sm:text-base break-all"
                aria-label="Email"
              >
                contact@dhruthiconstructions.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FiPhone className="text-gray-600 h-6 w-6" />
              <a
                href="tel:+91xxxxxxxxxx"
                className="text-gray-600 hover:text-black"
                aria-label="Phone"
              >
                +91 xxxxxxxxxx
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-gray-600 h-6 w-6" />
              <a
                href="https://wa.me/9448380947"
                className="text-gray-600 hover:text-black"
                aria-label="WhatsApp"
              >
                +91 xxxxxxxxxx
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaInstagram className="text-gray-600 h-6 w-6" />
              <a
                href="https://instagram.com/dhruthi_construction"
                className="text-gray-600 hover:text-black"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                @dhruthi_construction
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-[95vw] flex flex-col items-center justify-center mb-16">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-8 mt-[17vh] font-roboto-slab">
          Locate Us
          <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F]" />
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d169.33916306743478!2d76.58733275994263!3d12.288356377619055!2m2!1f0!2f45!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x3baf7b0064de4f6f%3A0xa5a697c57f0d91bb!2sdruthi%20construction!5e1!3m2!1sen!2sin!4v1730747990337!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="rounded-lg border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ContactUs;
