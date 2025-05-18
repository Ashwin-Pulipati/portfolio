import projectOne from "../../assets/images/Webp/projectOne.webp";
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

import MaterialUI from "../../assets/images/SVG/materialui.svg";
import Tensorflow from "../../assets/images/SVG/tensorflow.svg";
import TeachableMachine from "../../assets/images/Webp/teachable-image.webp";
import RestAPI from "../../assets/images/Webp/rest-api.webp";
import VitePress from "../../assets/images/Webp/vitepress-logo-large.webp";
import Figma from "../../assets/images/SVG/figma.svg";
import Slack from "../../assets/images/SVG/slack.svg";
import OpenCV from "../../assets/images/SVG/opencv.svg";
import Python from "../../assets/images/SVG/python.svg";
import SQL from "../../assets/images/SVG/sql.svg";

export const tabData = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Professional Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
];

export const LOCAL_STORAGE_KEY = "activeResumeTab";

export const achievementData = [
  {
    title: "Product Manager",
    subTitle: "Phygtl. (Feb 2025 - Present)",
    result: "Coming Soon...",
    des: "Recently selected as an Intern with responsibilities that will evolve further. More details coming soon.",
  },
  {
    title: "Software Engineer",
    subTitle: "Flowscript.AI (Oct 2024 - Present)",
    result: "Success",
    des: "",
    tags: [
      "App Development",
      "UI/UX Consistency",
      "Cross-Device Compatibility",
      "Security Enhancement",
      "REST API Integration",
      "Navigation Improvement",
      "Visual Hierarchy Optimization",
      "Responsive Design",
      "UI Component Optimization",
      "User Experience Enhancement",
      "Agile Collaboration",
      "Code Reviews",
      "Backend Integration",
      "Technical Documentation",
      "Onboarding Support",
    ],
    points: [
      "Fixed critical UI breakages across modules used by 2000+ users",
      "Implemented theme-aware gradient tagging system",
      "Reduced component bugs by ~40% through refactoring",
      "Mentored two junior devs and set up internal Storybook docs",
      "Fixed critical UI breakages across modules used by 2000+ users",
      "Implemented theme-aware gradient tagging system",
      "Reduced component bugs by ~40% through refactoring",
      "Mentored two junior devs and set up internal Storybook docs",
      "Fixed critical UI breakages across modules used by 2000+ users",
      "Implemented theme-aware gradient tagging system",
      "Reduced component bugs by ~40% through refactoring",
      "Mentored two junior devs and set up internal Storybook docs",
    ],
  },
  {
    title: "Full Stack Web Developer",
    subTitle: "JS Associates (May 2020 - May 2022)",
    result: "Success",
    des: "",
    tags: [
      "Performance Optimization",
      "Page Load Speed Improvement",
      "Boost User Engagement",
      "Refactor Legacy Code",
      "UI/UX Collaboration",
      "Responsive Web Design",
      "Reduce Bounce Rates",
      "Cross-Browser Compatibility",
      "Build Reusable Components",
      "Build Design Systems",
      "API Integration & State Management",
      "Backend Collaboration",
      "Production Issue Troubleshoots",
      "Downtime Reduction",
      "Automated Testing",
      "Version Control",
      "Code Reviews",
      "Mentorship",
      "Agile Methodologies",
      "Project Management",
      "Documentation",
      "Onboarding Optimization",
    ],
    points: [
      "Fixed critical UI breakages across modules used by 2000+ users",
      "Implemented theme-aware gradient tagging system",
      "Reduced component bugs by ~40% through refactoring",
      "Mentored two junior devs and set up internal Storybook docs",
      "Fixed critical UI breakages across modules used by 2000+ users",
      "Implemented theme-aware gradient tagging system",
      "Reduced component bugs by ~40% through refactoring",
      "Mentored two junior devs and set up internal Storybook docs",
      "Fixed critical UI breakages across modules used by 2000+ users",
      "Implemented theme-aware gradient tagging system",
      "Reduced component bugs by ~40% through refactoring",
      "Mentored two junior devs and set up internal Storybook docs",
    ],
  },
];

export const certificationsData = [
  {
    id: 1,
    image: projectOne,
    title: "Certification 1",
    link: "https://example.com/certification1",
  },
  {
    id: 2,
    image: projectOne,
    title: "Certification 2",
    link: "https://example.com/certification2",
  },
  {
    id: 3,
    image: projectOne,
    title: "Certification 3",
    link: "https://example.com/certification3",
  },
  {
    id: 4,
    image: projectOne,
    title: "Certification 4",
    link: "https://example.com/certification3",
  },
  {
    id: 5,
    image: projectOne,
    title: "Certification 5",
    link: "https://example.com/certification3",
  },
  {
    id: 6,
    image: projectOne,
    title: "Certification 6",
    link: "https://example.com/certification3",
  },
];

export const certificationsGradientMap = {
  "certification-1": {
    light: "linear-gradient(to bottom right, #f062a3, #f9f586)",
    dark: "linear-gradient(to bottom right, #7d2352, #7a732f)",
  },
  "certification-2": {
    light: "linear-gradient(to bottom right, #61d4a3, #b78fff)",
    dark: "linear-gradient(to bottom right, #4db27a, #4f2a7a)",
  },
  "certification-3": {
    light: "linear-gradient(to bottom right, #73d5e2, #96fbc4)",
    dark: "linear-gradient(to bottom right, #1d5ea4, #226346)",
  },
  "certification-4": {
    light: "linear-gradient(to bottom right, #f1e15e, #96fbc4)",
    dark: "linear-gradient(to bottom right, #8e8f4c, #226346)",
  },
};


export const experienceData = [
  {
    title: "Product Manager",
    subTitle: "Phygtl. (Feb 2025 - Present)",
    result: "USA",
    des: "Recently selected as an Intern with responsibilities that have grown rapidly over the past few months. I am actively contributing to key projects and have taken on additional responsibilities that underscore my capability in managing and engineering solutions.",
  },
  {
    title: "Software Engineer",
    subTitle: "Flowscript.AI (Oct 2024 - Present)",
    result: "USA",
    des: "Developed key applications like the Job Application Management Portal and Lead Generation App, optimizing workflows and client data management. Improved UI consistency, responsiveness, and navigation across devices. Led the redesign of key sections, integrated features like password visibility and resizable panels, and collaborated with backend teams on robust logic. Enhanced app performance and usability while supporting project delivery through documentation and Agile collaboration.",
  },
  {
    title: "Full Stack Web Developer",
    subTitle: "JS Associates (May 2020 - May 2022)",
    result: "IN",
    des: "Contributed to the development of a high-traffic e-commerce platform, which significantly improved performance and user engagement. Collaborated closely with UI/UX designers and backend developers, optimized the codebase, and implemented automated testing frameworks. My contributions enhanced maintainability, reduced bugs, and streamlined development processes, resulting in improved project delivery and overall team productivity.",
  },
];

export const experienceGradientMap = {
  "product-manager": {
    light: "linear-gradient(to bottom right, #ff9aad, #b78fff)",
    dark: "linear-gradient(to bottom right, #8a3a48, #4f2a7a)",
  },
  "software-engineer": {
    light: "linear-gradient(to bottom right, #a0f0f4, #b78fff)",
    dark: "linear-gradient(to bottom right, #0d7998, #4f2a7a)",
  },
  "full-stack-web-developer": {
    light: "linear-gradient(to bottom right, #96fbc4, #b78fff)",
    dark: "linear-gradient(to bottom right, #226346, #4f2a7a)",
  },
  "masters-in-computer-science": {
    light: "linear-gradient(to bottom right, #ffbfa7, #b78fff)",
    dark: "linear-gradient(to bottom right, #8a4637, #4f2a7a)",
  },
  "bachelors-in-electronics-and-instrumentation-engineering": {
    light: "linear-gradient(to bottom right, #f9f586, #b78fff)",
    dark: "linear-gradient(to bottom right, #7a732f, #4f2a7a)",
  },
};
  
  

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
          {
            type: "icon",
            component: SiJquery,
            color: "#0769AD",
          },
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