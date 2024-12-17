import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ContentWrapper({ children, linkTo }) {
  return (
    <div className="relative">
      {/* Content Wrapper with Clipped Height */}
      <div
        className="
          overflow-hidden relative 
          max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh] xl:max-h-[100vh]"
      >
        {children}

        {/* Fade-Out Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[4rem] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>

      {/* See All Projects Link */}
      <div className="text-right mt-4">
        <Link
          to={linkTo}
          className="inline-flex items-center text-[#C47E4F] font-medium hover:underline"
        >
          See all Projects{" "}
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default ContentWrapper;
