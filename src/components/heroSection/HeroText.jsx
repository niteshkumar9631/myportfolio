import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Front-End Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Nitesh Kumar <br className="sm:hidden md:block" />
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        <TypeAnimation
          sequence={[
            "A Passionate Web Developer", 2000,
            "A Creative Front-End Engineer", 2000,
            "Loves Crafting UI/UX", 2000,
            "Building Modern Web Apps", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="inline-block text-white border-r-2 border-white pr-1 animate-pulse"
        />
      </motion.div>
    </div>
  );
};

export default HeroText;
