import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Octanet Services Pvt. Ltd.",
    duration: "May 2024 – July 2024",
    points: [
      "Completed a 2-month web development internship, working on real-world frontend tasks using HTML, CSS, and JavaScript.",
      "Built and styled responsive web pages with cross-browser compatibility and mobile-first design principles.",
      "Integrated RESTful APIs and managed version control using Git and GitHub throughout the development lifecycle.",
      "Followed Agile workflow practices — participated in sprints, code reviews, and collaborative development.",
    ],
  },
  {
    role: "Full-Stack Developer (Self-Initiated Projects)",
    company: "Independent / Open Source",
    duration: "Aug 2024 – Present",
    points: [
      "Designed and deployed full-stack MERN applications including a real-time chat app (Socket.io), a multi-role job portal (JWT + RBAC), and an e-commerce platform (Stripe & Razorpay).",
      "Implemented secure authentication flows with JWT, cookie-based sessions, and role-based access control across multiple projects.",
      "Deployed production-ready apps on Vercel (frontend) and Render (backend) with MongoDB Atlas and Cloudinary integration.",
      "Applied Redux Toolkit for global state management and used React Query patterns for optimized API handling.",
    ],
  },
];

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center mb-12"
      >
        <h2 className="text-6xl text-cyan mb-4">Experience</h2>
        <p className="text-lg text-center text-lightGrey">
          Hands-on experience through internship and independent full-stack development.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8 border-l-2 border-orange pl-8 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", 0.2 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[42px] top-2 h-4 w-4 rounded-full bg-orange border-2 border-white"></div>

            <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-orange">{exp.role}</h3>
              <p className="text-cyan text-sm mb-1">{exp.company}</p>
              <p className="text-lightGrey text-xs mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-white text-sm flex flex-col gap-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceMain;