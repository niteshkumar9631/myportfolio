import SingleService from "./SingleService";

const services = [
  {
    title: "Web Development",
    description:
      "Building modern and responsive websites using React, Tailwind CSS and Framer Motion.",
  },
  {
    title: "AI Integration",
    description:
      "Integrating OpenAI APIs and building intelligent tools into web applications.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing clean, user-friendly, and interactive interfaces for both web and app platforms.",
  },
];

const ServicesList = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10"> {/* Gap increased */}
      {services.map((service, index) => (
        <SingleService
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesList;
