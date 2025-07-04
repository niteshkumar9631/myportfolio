import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, used, live }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        {/* Project Name */}
        <h2
          className={`md:text-3xl sm:text-2xl text-orange font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {name}
        </h2>

        {/* Project Year */}
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        {/* Technologies Used */}
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {used}
        </h2>

        {/* Links Section */}
        <div
          className={`flex gap-6 mt-3 ${
            align === "left" ? "justify-end" : "justify-start"
          }`}
        >
          {/* GitHub Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
          >
            GitHub <BsFillArrowUpRightCircleFill />
          </a>

          {/* Live Link (only if provided) */}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex gap-2 items-center text-green-400 hover:text-orange transition-all duration-500 cursor-pointer"
            >
              Live <BsFillArrowUpRightCircleFill />
            </a>
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden pointer-events-none"></div>

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default SingleProject;
