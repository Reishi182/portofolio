import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import SkillBar from "./SkillBar";

export default function Skills() {
  const skills = [
    {
      title: "HTML",
      value: 100,
      icon: <FaHtml5 size={30} />,
    },
    {
      title: "CSS",
      value: 85,
      icon: <SiCss3 size={30} />,
    },
    {
      title: "Javascript",
      value: 90,
      icon: <IoLogoJavascript size={30} />,
    },
    {
      title: "React",
      value: 87,
      icon: <FaReact size={30} />,
    },
    {
      title: "Node.js",
      value: 85,
      icon: <FaNodeJs size={30} />,
    },
  ];

  return (
    <section
      id="skills"
      className=" h-auto bg-gradient-to-b from-[#00215E] to-[#003daf]"
    >
      <div
        className="  container mx-auto mb-10 mt-10 flex w-full flex-col items-center
   justify-around space-y-4  px-4  "
      >
        <div className="mt-4">
          <h1 className="text-stone-100 ">
            <span className="text-3xl font-bold"> My Skills</span>
          </h1>
        </div>
        <div className="card bg-base-200 -z-1 mt-2 w-[70%] px-6 py-6">
          {skills.map((skill) => (
            <SkillBar
              key={skill.title}
              icon={skill.icon}
              label={skill.title}
              value={skill.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
