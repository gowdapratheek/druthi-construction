import Accordion from "../components/Accordian";

const Faqs = () => {
  const faqData = [
    {
      title: "What types of construction projects do you specialize in?",
      answer:
        "We specialize in residential homes, commercial buildings, and renovation projects. Our focus is on delivering high-quality and cost-effective solutions tailored to your needs.",
    },
    {
      title: "How long does a typical construction project take?",
      answer:
        "The duration depends on the project's scope and complexity. Residential projects typically take between 3-12 months, while renovations may vary. We'll provide a detailed timeline during the planning phase.",
    },
    {
      title: "How much will my project cost?",
      answer:
        "Project costs depend on various factors like size, materials, and customizations. After an initial consultation, we provide a detailed estimate and work to stay within your budget.",
    },
    {
      title:
        "Do you offer design services, or do I need to provide my own plans?",
      answer:
        "We offer design and build services, and can work with you from concept to completion. If you already have plans, we are happy to collaborate with your architect.",
    },
    {
      title: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed, bonded, and insured. This ensures your project is protected, and you receive professional-grade service.",
    },
    {
      title: "Can you handle permit applications and approvals?",
      answer:
        "Yes, we manage all necessary permits and approvals for your project, ensuring compliance with local regulations and building codes.",
    },
    {
      title: "What materials do you typically use?",
      answer:
        "We source high-quality, durable materials that ensure longevity and sustainability. We work with you to select the best materials for your project based on design preferences and budget.",
    },
    {
      title: "How involved will I be during the construction process?",
      answer:
        "We encourage client involvement throughout the project. You'll be kept updated on progress, and we’ll work closely with you to ensure your vision is met.",
    },
    {
      title: "What should I do to prepare for my construction project?",
      answer:
        "We guide you through the preparation process, including obtaining necessary documents and permits, clearing the worksite, and establishing communication channels for smooth progress.",
    },
    {
      title:
        "What happens if there are changes to the project during construction?",
      answer:
        "Changes can be accommodated through a clear change order process. We'll discuss any additional costs or timeline adjustments before proceeding.",
    },
    {
      title: "How do you ensure safety on the construction site?",
      answer:
        "Safety is a top priority. We follow strict safety protocols, ensure all workers are trained, and comply with industry safety standards to prevent accidents.",
    },
    {
      title:
        "How do you handle delays due to weather or other unforeseen circumstances?",
      answer:
        "We plan for potential delays in our initial timeline. If unforeseen circumstances arise, we’ll promptly communicate the impact on the schedule and take necessary steps to minimize delays.",
    },
  ];

  return (
    <>
      <div className="mt-[17vh] ">
        <h1 className="font-bold text-3xl mb-[5vw] lg:my-[2vw] mx-[4vw] text-center ">
          FAQ&apos;S
          <hr className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mx-auto mt-2 sm:mt-4 border-[#C47E4F]" />
        </h1>
        <div className=" flex flex-col items-center">
          <div className="p-4 rounded-lg h-auto">
            {faqData.map((faq, index) => (
              <Accordion key={index} title={faq.title} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );

};

export default Faqs;
