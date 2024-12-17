import { Link } from "react-router-dom";

const EstimateSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#f8f1eb] p-10 sm:p-20 rounded-[5%] lg:p-28 lg:rounded-[20%] mt-[15vh]">
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full">
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center  font-pop">
            <img
              src="/Druthi Construction design/1.png"
              alt="Location Icon"
              className="h-16 sm:h-20 mb-4"
            />
            <span className="text-xl sm:text-2xl font-bold">100</span>
            <span className="text-center mt-1 text-sm sm:text-base ">
              Total Sqft Area Constructed
            </span>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center font-pop">
            <img
              src="/Druthi Construction design/2.png"
              alt="Home Icon"
              className="h-16 sm:h-20 mb-4"
            />
            <span className="text-xl sm:text-2xl font-bold">110</span>
            <span className="text-center mt-1 text-sm sm:text-base ">
              Total Of Homes
            </span>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center font-pop">
            <img
              src="/Druthi Construction design/3.png"
              alt="Workers Icon"
              className="h-16 sm:h-20 mb-4"
            />
            <span className="text-xl sm:text-2xl font-bold">70</span>
            <span className="text-center mt-1 text-sm sm:text-base ">
              Number of Workers
            </span>
          </div>

          {/* Stat Item 4 */}
          <div className="flex flex-col items-center font-pop">
            <img
              src="/Druthi Construction design/4.png"
              alt="Experience Icon"
              className="h-16 sm:h-20 mb-4"
            />
            <span className="text-xl sm:text-2xl font-bold">30</span>
            <span className="text-center mt-1 text-sm sm:text-base ">
              Years of Experience
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF7F5] text-center p-10 relative mt-[15vh]">
        <h2 className="text-2xl font-semibold text-black mb-8 font-roboto-slab">
          How Much It Costs To Hire Us.
        </h2>
        <Link to="/contactus" className="bg-[#E28D55] text-white font-semibold px-4 md:px-6 py-3 rounded-lg absolute left-1/2 transform -translate-x-1/2 mt-4 font-roboto-slab">
          Get an Estimate Now
        </Link>
      </div>
    </>
  );
};

export default EstimateSection;
