import SingleService from "./SingleService";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with React, Node.js, Express, and MongoDB — covering everything from UI to REST APIs and database design.",
  },
  {
    title: "REST API & Backend Development",
    description:
      "Scalable backend services with JWT authentication, role-based access control, file uploads via Cloudinary, and third-party API integration.",
  },
  {
    title: "Real-Time Application Development",
    description:
      "Live, event-driven features using Socket.io — including real-time messaging, typing indicators, online status, and instant notifications.",
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
