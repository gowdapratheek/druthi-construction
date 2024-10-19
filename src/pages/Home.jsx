const Home = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(1.jpg)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative top-14 lg:top-10 z-10 text-center text-white px-4 lg:px-6">
        <h1
          className="text-2xl md:text-3xl font-light text-left"
          style={{ fontFamily: "Poppins, serif" }}
        >
          Welcome to
        </h1>
        <h2
          className="text-[2.2rem] md:text-8xl font-bold"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          Druthi Constructions
        </h2>
        <p
          className="text-xs md:text-sm mb-8 text-right font-normal"
          style={{ fontFamily: "Poppins, serif" }}
        >
          From concepts to creation, we’re with you every step
        </p>
        <p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
          style={{ fontFamily: "Poppins, serif" }}
        >
          &quot;We specialize in high-quality residential construction,
          delivering beautiful and durable homes that meet your needs. With a
          focus on craftsmanship, affordability, and customer satisfaction, we
          bring your vision to life, ensuring every detail is handled with care
          and precision.&quot;
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#hire-us"
            className="bg-white text-black w-[50%] md:w-[25%] px-5 py-3 rounded-md shadow hover:bg-gray-200 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center"
          >
            Hire Us
          </a>
          <a
            href="#our-projects"
            className="bg-orange-500 text-white w-[50%] md:w-[25%] px-5 py-3 rounded-md shadow hover:bg-orange-600 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center"
          >
            Our Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
