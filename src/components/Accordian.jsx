import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between items-center w-[90vw] m-auto bg-[#F4EEEA] text-left p-2 lg:p-4 ${
          accordionOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <span className="font-roboto-slab">{title}</span>
        <svg
          className="shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 w-[90vw] m-auto text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className="overflow-hidden py-2 pl-6 pt-0 bg-[#F4EEEA] rounded-b-lg"
          style={{ fontFamily: "Poppins, serif" }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Accordion;
