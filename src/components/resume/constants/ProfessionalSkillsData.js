import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAngular,
  SiBootstrap,
  SiGraphql,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiJquery,
  SiRedux,
} from "react-icons/si";


// Images
import MaterialUI from "../../../assets/images/SVG/materialui.svg";
import Tensorflow from "../../../assets/images/SVG/tensorflow.svg";
import TeachableMachine from "../../../assets/images/Webp/teachable-image.webp";
import RestAPI from "../../../assets/images/Webp/rest-api.webp";
import VitePress from "../../../assets/images/Webp/vitepress-logo-large.webp";
import Figma from "../../../assets/images/SVG/figma.svg";
import Slack from "../../../assets/images/SVG/slack.svg";
import OpenCV from "../../../assets/images/SVG/opencv.svg";
import Python from "../../../assets/images/SVG/python.svg";
import SQL from "../../../assets/images/SVG/sql.svg";
// Single source of truth for skills
export const skillsData = [
  {
    category: "Programming & Scripting",
    subCategories: [
      {
        title: "Languages",
        items: [
          { type: "icon", component: FaHtml5, color: "#E34F26" },
          { type: "icon", component: FaCss3Alt, color: "#1572B6" },
          { type: "icon", component: FaJs, color: "#F0DB4F" },
          {
            type: "icon",
            component: SiTypescript,
            color: "#007ACC",
            className: "w-10 h-10",
          },
          { type: "image", src: Python, alt: "Python", className: "w-11 h-11" },
          { type: "image", src: SQL, alt: "SQL", className: "w-11 h-11" },
        ],
      },
    ],
  },
  {
    category: "Development",
    subCategories: [
      {
        title: "Frontend",
        items: [
          { type: "icon", component: SiJquery, color: "#0769AD" },
          { type: "icon", component: FaReact, color: "#61DAFB" },
          { type: "icon", component: SiRedux, color: "#764ABC" },
          { type: "icon", component: SiNextdotjs, color: "#ffffff" },
          { type: "icon", component: SiAngular, color: "#DD0031" },
          { type: "icon", component: SiBootstrap, color: "#7952B3" },
          { type: "icon", component: SiTailwindcss, color: "#38B2AC" },
          {
            type: "image",
            src: MaterialUI,
            alt: "Material UI",
            color: "#0081CB",
            className: "w-12 h-12",
          },
          {
            type: "icon",
            component: SiWebgl,
            color: "#FFFFFF",
            className: "w-14 h-14",
          },
          { type: "image", src: OpenCV, alt: "OpenCV", className: "w-11 h-11" },
        ],
      },
      {
        title: "Backend & Databases",
        items: [
          { type: "icon", component: SiNestjs, color: "#E0234E" },
          { type: "icon", component: SiMysql, color: "#4479A1" },
          { type: "icon", component: SiPostgresql, color: "#336791" },
          { type: "icon", component: FaNodeJs, color: "#539E43" },
          { type: "icon", component: SiMongodb, color: "#47A248" },
          {
            type: "image",
            src: RestAPI,
            alt: "REST API",
            className: "w-14 h-12",
          },
          { type: "icon", component: SiGraphql, color: "#E10098" },
          { type: "icon", component: FaGitAlt, color: "#F05032" },
        ],
      },
    ],
  },
  {
    category: "AI",
    subCategories: [
      {
        title: "Machine Learning",
        items: [
          {
            type: "image",
            src: Tensorflow,
            alt: "Tensorflow",
            className: "w-12 h-12",
          },
          {
            type: "image",
            src: TeachableMachine,
            alt: "Teachable Machine",
            className: "w-12 h-12",
          },
        ],
      },
    ],
  },
  {
    category: "Design",
    subCategories: [
      {
        title: "UI/UX",
        items: [
          { type: "image", src: Figma, alt: "Figma", className: "w-11 h-11" },
          { type: "icon", component: SiAdobephotoshop, color: "#31A8FF" },
          { type: "icon", component: SiAdobeillustrator, color: "#FF9A00" },
          { type: "icon", component: SiAdobeindesign, color: "#FF3366" },
        ],
      },
    ],
  },
  {
    category: "Productivity",
    subCategories: [
      {
        title: "Tools",
        items: [
          {
            type: "image",
            src: VitePress,
            alt: "VitePress",
            className: "w-12 h-12",
          },
          {
            type: "icon",
            component: SiMarkdown,
            color: "#ffffff",
          },
          { type: "image", src: Slack, alt: "Slack", className: "w-11 h-11" },
          {
            type: "icon",
            component: SiNotion,
            color: "#ffffff",
          },
        ],
      },
    ],
  },
];