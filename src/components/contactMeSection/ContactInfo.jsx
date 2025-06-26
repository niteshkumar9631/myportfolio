import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo
        text="niteshkumar42655@gmail.com"
        Icon={HiOutlineMail}
        href="mailto:niteshkumar42655@gmail.com"
      />
      <SingleInfo
        text="+91 9631742655"
        Icon={FiPhone}
        href="tel:+919631742655"
      />
      <SingleInfo
        text="Bihar, India"
        Icon={IoLocationOutline}
      />
    </div>
  );
};

export default ContactInfo;
