import { useState } from "react";

const Services = () => {
  const [selected, setSelected] = useState("care");

  const content = [
    {
      title: "ARCHITECTS",
      description:
        "Our licensed architects consider all relevant factors that influence your home's specific challenges and then create a carefully considered design that expresses your individual aesthetics and lifestyle.",
      color: "bg-gray-200 text-black",
      hoverColor: "hover:",
      icon: <img src="/architecture.png" className="w-16 h-16" />, 
    },
    {
      title: "CONTRACTORS",
      description:
        "We pride ourselves on our technical expertise and ability to deliver reliable services. Our skilled contractors ensure that every project is completed to the highest standards, on time, and within budget.",
      color: "bg-gray-200 text-black",
      hoverColor: "hover:",
      icon: <img src="/building.png" className="w-16 h-16" />, 
    },
    {
      title: "INTERIORS",
      description:
        "You're into classic elegance, or bold modernism, we've got the expertise to bring your vision to life. Our team is ready to craft personalized interiors. From minimalist marvels to extravagance. Let's turn your dream space into a reality.",
      color: "bg-gray-200 text-black",
      hoverColor: "hover:",
      icon: <img src="/interior-design.png" className="w-16 h-16" />, 
    },
    {
      title: "RENOVATORS",
      description:
        "We have worked on hundreds of houses in Bangalore, transforming them into dream homes for owners. Built on a foundation of honest pricing, high-quality work, and uncompromised deadlines.",
      color: "bg-gray-200 text-black",
      hoverColor: "hover:",
      icon: <img src="/engineer.png" className="w-16 h-16" />, 
    },
  ];

  return (
    <div className="w-full  py-8 px-4 lg:px-12 mt-[15vh]">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-roboto-slab">
          Services we Provide
          <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F]" />
        </h2>
        <p className=" mt-4 max-w-3xl mx-auto font-pop">
          Mysuru&apos;s Top Construction.We are a team of licensed & reputed
          architects, contractors, interior designers & renovators.
        </p>
      </div>

      {/* Icon and Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.keys(content).map((key) => (
          <div
            key={key}
            onClick={() => setSelected(key)}
            className={`p-6 rounded-lg transition-all cursor-pointer hover:shadow-lg 
              ${selected === key ? content[key].color : "bg-[#F4EEEA]"}
              ${content[key].hoverColor} 
              flex flex-col items-center justify-center`}
          >
            {content[key].icon}
            <h3 className="text-lg font-bold mt-4">{content[key].title}</h3>

            <p
              className={`text-center mt-2 text-sm transition-all  ${
                selected === key ? "block" : "hidden lg:block group-hover:block"
              }`}
            >
              {content[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
