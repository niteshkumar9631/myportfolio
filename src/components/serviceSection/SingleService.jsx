import { motion } from "framer-motion";

const SingleService = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-8 bg-zinc-900 rounded-2xl shadow-lg min-h-[250px] flex flex-col justify-center" // ✅ Bigger padding + minimum height
    >
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>  {/* Bigger title */}
      <p className="text-lightGrey text-base">{description}</p> {/* Bigger paragraph text */}
    </motion.div>
  );
};

export default SingleService;
