import {FaNodeJs, FaReact} from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
const projectDetailData = {
  timeline: "May 2023 - Present",
  stack: [
    <FaReact className="w-8 h-8" style={{ color: "#61DAFB" }} />,
    <SiTailwindcss className="w-8 h-8" style={{ color: "#38BDF8" }} />,
    <SiTypescript className="w-8 h-8" style={{ color: "#3178C6" }} />,
    <SiNextdotjs className="w-8 h-8" />,
    <FaNodeJs className="w-8 h-8" style={{ color: "#339933" }} />,
    <BiLogoMongodb
      className="w-8 h-8 mx-0 px-0"
      style={{ color: "#47A248" }}
    />,
    <SiPostgresql className="w-8 h-8 mx-0 px-0" style={{ color: "#336791" }} />,
    "E",
    "F",
  ],
  challengesAndSolutions: [
    {
      challenge:
        "The process of generating worksheets was highly manual, which was time-consuming and error-prone.",
      solution:
        "Developed an automated system that generates worksheets based on user input, significantly reducing time and eliminating errors.",
    },
    {
      challenge:
        "The user interface was initially clunky, making it hard for educators to navigate the app.",
      solution:
        "Redesigned the UI, simplifying navigation and adding visual aids for easy understanding.",
    },
  ],
  methodologyAndProcess: [
    "Agile approach with iterative sprints for continuous development and feedback.",
    "React for dynamic UI, providing a smooth and interactive user experience.",
    "Tailwind CSS to ensure responsive and customizable design.",
    "Node.js to handle backend logic.",
    "Dynamic forms to capture user input and create customized worksheets.",
  ],
  resultsAndImpact: [
    "Reduced worksheet generation time by 50%, streamlining the process for educators.",
    "User feedback showed a 30% reduction in onboarding time due to the intuitive UI.",
    "Eliminated errors in manual worksheet creation, improving accuracy.",
  ],
  learningsAndReflections: [
    "Gained insights into the value of user-centered design.",
    "Recognized the importance of automating repetitive tasks for operational efficiency.",
    "Plan to enhance error handling and explore new features like report generation.",
  ],
};

export default projectDetailData;