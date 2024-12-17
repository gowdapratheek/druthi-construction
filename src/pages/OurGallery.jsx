import ContentWrapper from "../components/ContentWrapper";
import Residential from "./Residential";
import Government from "./Government";

function OurGallery() {
  return (
    <div className="mt-[15vh] p-4">
      {/* Residential Projects */}
      <div>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-8 font-roboto-slab">
          Residential Projects
          <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F] -mb-[10vh]" />
        </h2>
        <ContentWrapper linkTo="/residential">
          <Residential />
        </ContentWrapper>
      </div>

      {/* Government Projects */}
      <div>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-8 font-roboto-slab">
          Government Projects
          <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F] -mb-[10vh]" />
        </h2>
        <ContentWrapper linkTo="/government">
          <Government />
        </ContentWrapper>
      </div>
    </div>
  );
}

export default OurGallery;
