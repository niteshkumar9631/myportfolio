import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "E-commerce",
    year: "Mar2025",
    used: "MERN Stack, Stripe API & Razorpay Payment Gateway",
    align: "right",
    image: "/images/E-commerce.png",
    link: "https://github.com/niteshkumar9631/E-commerce.git",
  },

   {
    name: "BlogApp",
    year: "May2025",
    used: "MERN Stack, JWT Authentication",
    align: "left",
    image: "/images/BlogApp.png",
    link: "https://github.com/niteshkumar9631/BlogApp",
  },

  {
    name: "WeatherApp",
    year: "Mar2025",
    used: "React, Tailwind CSS, OpenWeatherMap API",
    align: "right",
    image: "/images/weatherapp.PNG",
    link: "https://github.com/niteshkumar9631/WeatherApp/tree/my-new-branch",
  },
  
   {
    name: "ToDoApp",
    year: "Apr2025",
    used: "React, Tailwind CSS, Local Storage",
    align: "left",
    image: "/images/todoapp.png",
    link: "https://github.com/niteshkumar9631/ToDoApp/tree/my-new-branch",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            used={project.used}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
