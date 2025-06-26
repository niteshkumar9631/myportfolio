import { Link } from "react-scroll";
import { motion } from "framer-motion";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Service", section: "services" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <motion.div
      className="px-4 bg-[#0a0a0a]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Line */}
      <div className="w-full h-[1px] bg-lightGrey mt-24" />

      {/* Footer top */}
      <div className="md:flex justify-between items-center mt-6 max-w-[1200px] mx-auto hidden">
        <motion.p
          className="text-2xl font-semibold text-lightGrey hover:text-white transition-colors duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Nitesh Kumar
        </motion.p>

        <ul className="flex gap-6 text-lightGrey text-lg">
          {footerLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Message */}
      <p className="text-center text-lightGrey text-sm mt-6">
        Let’s build something amazing together 
      </p>

      {/* Tech stack */}
      <p className="text-center text-lightBrown text-sm mt-2">
        Built with <span className="text-white">MERN Stack</span> &{" "}
        <span className="text-white">Framer Motion</span>
      </p>

      {/* Copyright */}
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-6 mb-10 text-sm text-lightBrown">
        © 2025 Nitesh Kumar | All Rights Reserved.
      </p>
    </motion.div>
  );
};

export default FooterMain;
