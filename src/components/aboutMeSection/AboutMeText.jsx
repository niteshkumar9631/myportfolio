import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Nitesh Kumar, a Computer Science & Engineering graduate (2026) from
        Marwadi University, specializing in full-stack development with the MERN stack.
        <br /><br />
        I build end-to-end web applications — from responsive, interactive UIs with
        React and TailwindCSS to robust backend APIs using Node.js, Express, and
        MongoDB. My recent projects include a real-time chat application with Socket.io
        and a multi-role job portal with JWT authentication and cloud deployment.
        <br /><br />
        I'm passionate about writing clean, maintainable code and delivering seamless
        user experiences. Currently open to full-time roles and internships in
        web development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link spy smooth duration={500} offset={-120} to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500">
          View My Work
        </Link>
      </button>
    </div>
  );
};
export default AboutMeText;
