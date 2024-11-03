import { useState } from "react";

const Services = () => {
  const [selected, setSelected] = useState("ARCHITECTS");

  const content = [
    {
      title: "ARCHITECTS",
      description:
        "Our licensed architects consider all relevant factors that influence your home's specific challenges and then create a carefully considered design that expresses your individual aesthetics and lifestyle.",
      color: "bg-[#E3AF8C]",
      icon: (
        <img src="/architecture.png" className="w-16 h-16" alt="Architects" />
      ),
    },
    {
      title: "CONTRACTORS",
      description:
        "We pride ourselves on our technical expertise and ability to deliver reliable services. Our skilled contractors ensure that every project is completed to the highest standards, on time, and within budget.",
      color: "bg-[#E3AF8C]",
      icon: <img src="/building.png" className="w-16 h-16" alt="Contractors" />,
    },
    {
      title: "INTERIORS",
      description:
        "Whether you're into classic elegance or bold modernism, we've got the expertise to bring your vision to life. Our team is ready to craft personalized interiors, from minimalist marvels to extravagance. Let's turn your dream space into a reality.",
      color: "bg-[#E3AF8C]",
      icon: (
        <img src="/interior-design.png" className="w-16 h-16" alt="Interiors" />
      ),
    },
    {
      title: "RENOVATORS",
      description:
        "We have worked on hundreds of houses in Bangalore, transforming them into dream homes for owners. Built on a foundation of honest pricing, high-quality work, and uncompromised deadlines.",
      color: "bg-[#E3AF8C]",
      icon: <img src="/engineer.png" className="w-16 h-16" alt="Renovators" />,
    },
  ];

  return (
    <div className="w-full py-8 px-4 lg:px-12 mt-[15vh]">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-roboto-slab">
          Services we Provide
          <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F]" />
        </h2>
        <p className="mt-4 max-w-3xl mx-auto font-pop text-lg">
          Mysuru&apos;s Top Construction. We are a team of licensed & reputed
          architects, contractors, interior designers & renovators.
        </p>
      </div>

      {/* Icon and Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {content.map((item) => (
          <div
            key={item.title}
            onClick={() => setSelected(item.title)}
            className={` p-8 lg:p-16 rounded-lg transition-all cursor-pointer hover:shadow-lg text-[#212427] 
              ${selected === item.title ? item.color : "bg-[#F4EEEA]"} 
              flex flex-col items-center justify-center`}
          >
            {item.icon}
            <h3 className="text-xl font-bold mt-4 font-roboto-slab">
              {item.title}
            </h3>
            <p
              className={`text-center mt-2 text-lg transition-all lg:px-1 font-pop ${
                selected === item.title
                  ? "block"
                  : "hidden lg:block group-hover:block"
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
