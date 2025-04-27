import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

// Single source of truth for social icons
export const socialIcons = [
  {
    id: "linkedin",
    Icon: FaLinkedinIn,
    containerClass: "bannerIcon zoomIcon",
    style: { color: "#0A66C2" },
  },
  {
    id: "github",
    Icon: FaGithub,
    containerClass: "bannerIcon zoomIcon dark:text-white text-black",
    style: { },
  },
];

// Single source of truth for skill icons
export const skills = [
  {
    id: "tailwindcss",
    Icon: SiTailwindcss,
    containerClass: "skillIcon",
    iconClass: "w-5 sm:w-6 h-5 sm:h-6",
    style: { color: "#38BDF8" },
  },
  {
    id: "typescript",
    Icon: SiTypescript,
    containerClass: "skillIcon",
    iconClass: "w-5 sm:w-6 h-5 sm:h-6",
    style: { color: "#3178C6" },
  },
  {
    id: "react",
    Icon: FaReact,
    containerClass: "skillIcon",
    iconClass: "w-6 h-6",
    style: { color: "#61DAFB" },
  },
  {
    id: "nextjs",
    Icon: SiNextdotjs,
    containerClass: "skillIcon",
    iconClass: "w-5 sm:w-6 h-5 sm:h-6 dark:text-white text-black",
    style: {},
  },
  {
    id: "nodejs",
    Icon: FaNodeJs,
    containerClass: "skillIcon",
    iconClass: "w-5 sm:w-6 h-5 sm:h-6",
    style: { color: "#339933" },
  },
  {
    id: "mongodb",
    Icon: SiMongodb,
    containerClass: "skillIcon",
    iconClass: "w-5 sm:w-6 h-5 sm:h-6",
    style: { color: "#47A248" },
  },
  {
    id: "postgresql",
    Icon: SiPostgresql,
    containerClass: "skillIcon",
    iconClass: "w-5 sm:w-6 h-5 sm:h-6",
    style: { color: "#336791" },
  },
];
