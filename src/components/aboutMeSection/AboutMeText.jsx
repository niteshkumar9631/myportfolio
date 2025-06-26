import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
     I'm Nitesh, a passionate Computer Engineering student exploring the intersection of AI and web development to turn ideas into impactful digital solutions. I enjoy building smart, user-friendly applications that are both visually appealing and functionally robust.

Currently, I'm working with React, TailwindCSS, and Framer Motion to craft modern, responsive, and interactive web experiences.

I value clean design, smooth interactions, and continuous learning — both in tech and in life. When I'm not coding, you'll find me at the gym, focused on building strength and discipline.

Let’s build something awesome together!


      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
