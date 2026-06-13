import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Job Portal",
    year: "may 2026",
    used: "MERN Stack · JWT Auth · Role-Based Access · Cloudinary · Vercel",
    align: "right",
    image: "/images/job-portal.png",
    link: "https://github.com/niteshkumar9631/job-portal",
    live: "https://job-portal-kappa-coral.vercel.app/",
  },
  {
    name: "QuickChat",
    year: "jan 2026",
    used: "MERN Stack · Socket.io · JWT Auth · Real-Time Messaging · Vercel",
    align: "left",
    image: "/images/QuickChat.png",
    link: "https://github.com/niteshkumar9631/quickchat",
    live: "https://quickchat-five-iota.vercel.app/login",
  },

  {
  name: "Career Mentor Pro",
  year: "Step 2025",
  used: "MERN Stack · OpenRouter AI · Google OAuth · Cloudinary · Vercel · Render",
  align: "right",
  image: "/images/aicareer.png",
  link: "https://github.com/niteshkumar9631/career-mentor-pro.git",
  live: "https://career-mentor-pro.vercel.app/",
},

  {
    name: "E-Commerce Platform",
    year: "may 2025",
    used: "MERN Stack · Stripe · Razorpay · Cart & Orders · Vercel",
    align: "left",
    image: "/images/E-commerce.png",
    link: "https://github.com/niteshkumar9631/E-commerce.git",
    live: "https://e-commerce-frontend-ten-rust.vercel.app/",
  },
  {
    name: "StudyNation",
    year: "feb 2025",
    used: "MERN Stack · JWT Auth · Course Management · REST API · Vercel",
    align: "right",
    image: "/images/StudyNation.png",
    link: "https://github.com/niteshkumar9631/EdtechPlatform",
    live: "https://study-notion-full-stack.vercel.app/",
  },
  
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
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;