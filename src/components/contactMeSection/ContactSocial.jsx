import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <SingleContactSocial link="https://www.linkedin.com/in/nitesh-kumar-gond-8b67a0269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvIMmJauURnyySBq8ehZQLQ%3D%3D" Icon={FaLinkedinIn} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <SingleContactSocial link="https://github.com/niteshkumar9631" Icon={FiGithub} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <SingleContactSocial link="https://www.instagram.com/____nitesh_009/" Icon={FaInstagram} />
      </motion.div>
    </div>
  );
};

export default ContactSocial;
