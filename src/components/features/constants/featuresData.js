import React from "react";
import { RiRobot2Line, RiRobot2Fill, RiStackLine, RiStackFill } from "react-icons/ri";
import { BsLaptop, BsFillLaptopFill } from "react-icons/bs";
import { FaMobileAlt, FaMobile } from "react-icons/fa";
import { TbTags } from "react-icons/tb";

export const tagColorMap = {
  "frontend-development": { tagColor: "#fa8fa4", textColor: "#ffffff" },
  "machine-learning": { tagColor: "#f9b65c", textColor: "#ffffff" },
  "full-stack-development": { tagColor: "#a6d36e", textColor: "#ffffff" },
  "ui-ux": { tagColor: "#c785f9", textColor: "#ffffff" },
  ai: { tagColor: "#85f9f9", textColor: "#ffffff" },
};

export const backgroundClassMap = {
  "frontend-development": "bg-pink-100 dark:bg-pink-900 ",
  "machine-learning": "bg-yellow-100 dark:bg-yellow-900",
  "full-stack-development": "bg-green-100 dark:bg-green-900",
  "ui-ux": "bg-purple-100 dark:bg-purple-900",
  "ai": "bg-sky-100 dark:bg-sky-900",
};

export const lightModeColorMap = {
  "frontend-development": {
    text: "#db2777",
    border: "#db2777",
    bg: "#fff5f7",
  },
  "machine-learning": {
    text: "#ca8a04",
    border: "#ca8a04",
    bg: "#fefcbf",
  },
  "full-stack-development": {
    text: "#16a34a",
    border: "#16a34a",
    bg: "#d1fae5",
  },
  "ui-ux": {
    text: "#9333ea",
    border: "#9333ea",
    bg: "#faf5ff",
  },
  ai: {
    text: "#2563eb",
    border: "#2563eb",
    bg: "#dbeafe",
  },
};

export const cardGradientMap = {
  "frontend-development": `linear-gradient(to bottom right, #ff9aad 0%, #f9f586 100%)`,
  "machine-learning":
    "linear-gradient(to bottom right, #ffbfa7 0%, #f9f586 100%)",
  "full-stack-development":
    "linear-gradient(to bottom right, #96fbc4 0%, #f9f586 100%)",
  "ui-ux": "linear-gradient(to bottom right, #b78fff 0%, #f9f586 100%)",
  ai: "linear-gradient(to bottom right, #a0f0f4 0%, #f9f586 100%)",
};

export const darkModeCardGradientMap = {
  "frontend-development":
    "linear-gradient(to bottom right, #6e0c19 0%, #453a94 100%)",
  "machine-learning":
    "linear-gradient(to bottom right, #7e6c10  0%, #6a0d4b 100%)",
  "full-stack-development":
    "linear-gradient(to bottom right, #226346 0%, #6b5b1d 100%)",
  "ui-ux": "linear-gradient(to bottom right, #66009a 0%, #0d7998 100%)",
  ai: "linear-gradient(to bottom right, #0d7998 0%, #66009a 100%)",
};

export const hexToRGBA = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const featuresData = [
  {
    id: 1,
    iconOutlined: <BsLaptop />,
    iconFilled: <BsFillLaptopFill />,
    color: "text-[#fa8fa4]",
    hoverColor: "group-hover:text-[#f78c9a]",
    title: "Frontend Development",
    tags: ["React", "TypeScript", "HTML", "CSS"],
    bgClass: backgroundClassMap["frontend-development"],
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-pink-600 dark:text-[#fa8fa4]" />
    ),
    tagIconFilled: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="w-4 h-4 text-pink-600 dark:text-[#fa8fa4]"
      >
        <g fill="currentColor">
          <path d="M9.172 5a3 3 0 0 1 2.121.879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3.41 3.41 0 0 1-4.822 0l-5.71-5.71A3 3 0 0 1 2 12.172V8a3 3 0 0 1 3-3zM7 9h-.01A1 1 0 1 0 7 11a1 1 0 0 0 0-2" />
          <path d="M14.293 5.293a1 1 0 0 1 1.414 0L20.3 9.885a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1-1.414-1.414l1.592-1.592a3.82 3.82 0 0 0 0-5.402l-4.592-4.592a1 1 0 0 1 0-1.414" />
        </g>
      </svg>
    ),
    des: "Proficient in React, TypeScript, and HTML/CSS for creating responsive web apps.",
  },
  {
    id: 2,
    iconOutlined: <RiRobot2Line />,
    iconFilled: <RiRobot2Fill />,
    color: "text-[#f9b65c]",
    hoverColor: "group-hover:text-[#f5a442]",
    title: "Machine Learning",
    tags: ["Python", "TensorFlow", "scikit-learn", "NumPy"],
    bgClass: backgroundClassMap["machine-learning"],
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-yellow-600 dark:text-[#f5a442]" />
    ),
    tagIconFilled: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="w-4 h-4 text-yellow-600 dark:text-[#f5a442]"
      >
        <g fill="currentColor">
          <path d="M9.172 5a3 3 0 0 1 2.121.879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3.41 3.41 0 0 1-4.822 0l-5.71-5.71A3 3 0 0 1 2 12.172V8a3 3 0 0 1 3-3zM7 9h-.01A1 1 0 1 0 7 11a1 1 0 0 0 0-2" />
          <path d="M14.293 5.293a1 1 0 0 1 1.414 0L20.3 9.885a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1-1.414-1.414l1.592-1.592a3.82 3.82 0 0 0 0-5.402l-4.592-4.592a1 1 0 0 1 0-1.414" />
        </g>
      </svg>
    ),
    des: "Implementing machine learning models and AI-driven solutions in real-world applications.",
  },
  {
    id: 3,
    iconOutlined: <RiStackLine />,
    iconFilled: <RiStackFill />,
    color: "text-[#a6d36e]",
    hoverColor: "group-hover:text-[#8dc653]",
    title: "Full Stack Development",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    bgClass: backgroundClassMap["full-stack-development"],
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-green-600 dark:text-[#8dc653]" />
    ),
    tagIconFilled: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="w-4 h-4 text-green-600 dark:text-[#8dc653]"
      >
        <g fill="currentColor">
          <path d="M9.172 5a3 3 0 0 1 2.121.879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3 3 0 0 1-4.822 0l-5.71-5.71A3 3 0 0 1 2 12.172V8a3 3 0 0 1 3-3zM7 9h-.01A1 1 0 1 0 7 11a1 1 0 0 0 0-2" />
          <path d="M14.293 5.293a1 1 0 0 1 1.414 0L20.3 9.885a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1-1.414-1.414l1.592-1.592a3.82 3.82 0 0 0 0-5.402l-4.592-4.592a1 1 0 0 1 0-1.414" />
        </g>
      </svg>
    ),
    des: "Experience with full-stack development using MongoDB, Express, React, and Node.js.",
  },
  {
    id: 4,
    iconOutlined: <FaMobileAlt />,
    iconFilled: <FaMobile />,
    color: "text-[#c785f9]",
    hoverColor: "group-hover:text-[#b06ce5]",
    title: "UI/UX",
    tags: ["Figma", "Photoshop"],
    bgClass: backgroundClassMap["ui-ux"],
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-purple-600 dark:text-[#b06ce5]" />
    ),
    tagIconFilled: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="w-4 h-4 text-purple-600 dark:text-[#b06ce5]"
      >
        <g fill="currentColor">
          <path d="M9.172 5a3 3 0 0 1 2.121.879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3 3 0 0 1-4.822 0l-5.71-5.71A3 3 0 0 1 2 12.172V8a3 3 0 0 1 3-3zM7 9h-.01A1 1 0 1 0 7 11a1 1 0 0 0 0-2" />
          <path d="M14.293 5.293a1 1 0 0 1 1.414 0L20.3 9.885a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1-1.414-1.414l1.592-1.592a3.82 3.82 0 0 0 0-5.402l-4.592-4.592a1 1 0 0 1 0-1.414" />
        </g>
      </svg>
    ),
    des: "Designing user interfaces and complex UI flows using tools like Figma and Photoshop.",
  },
  {
    id: 5,
    iconOutlined: <FaMobileAlt />,
    iconFilled: <FaMobile />,
    color: "text-[#85f9f9]",
    hoverColor: "group-hover:text-[#85f9f9]",
    title: "AI",
    tags: ["Figma", "Photoshop"],
    bgClass: backgroundClassMap["ai"],
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-blue-600 dark:text-text-[#85f9f9]" />
    ),
    tagIconFilled: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        className="w-4 h-4 text-blue-600 dark:text-text-[#85f9f9]"
      >
        <g fill="currentColor">
          <path d="M9.172 5a3 3 0 0 1 2.121.879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3 3 0 0 1-4.822 0l-5.71-5.71A3 3 0 0 1 2 12.172V8a3 3 0 0 1 3-3zM7 9h-.01A1 1 0 1 0 7 11a1 1 0 0 0 0-2" />
          <path d="M14.293 5.293a1 1 0 0 1 1.414 0L20.3 9.885a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1-1.414-1.414l1.592-1.592a3.82 3.82 0 0 0 0-5.402l-4.592-4.592a1 1 0 0 1 0-1.414" />
        </g>
      </svg>
    ),
    des: "Designing user interfaces and complex UI flows using tools like Figma and Photoshop.",
  },
];
