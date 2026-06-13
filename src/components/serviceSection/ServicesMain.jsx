import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ServicesList from "./ServicesList";

const ServicesMain = () => {
  return (
    <section id="services" className="py-20 bg-black text-white"> {/* Extra padding */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-14"  /* Margin bottom increased */
      >
        <h2 className="text-5xl md:text-6xl font-bold text-cyan">Services</h2> {/* Font size upgraded */}
      </motion.div>
      <div className="max-w-[1200px] mx-auto px-6">
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesMain;
