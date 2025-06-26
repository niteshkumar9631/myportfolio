import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// 🧠 Skills with custom colors for clarity
const skills = [
  { skill: "HTML", icon: FaHtml5, color: "text-orange-600" },
  { skill: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
  { skill: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
  { skill: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { skill: "ReactJS", icon: FaReact, color: "text-cyan-400" },
  { skill: "Redux", icon: SiRedux, color: "text-purple-500" },
  { skill: "NextJS", icon: SiNextdotjs, color: "text-black" },
  { skill: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
  { skill: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { skill: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { skill: "Express.js", icon: SiExpress, color: "text-gray-800" },
  { skill: "Node.js", icon: FaNodeJs, color: "text-green-700" },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 my-12 px-4">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center bg-orange-400 p-6 rounded-t-full shadow-md"
        >
          <item.icon className={`text-5xl ${item.color}`} />
          <p className="text-white font-semibold mt-4">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
