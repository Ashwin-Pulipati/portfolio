// import React from "react";
// import { RiRobot2Line, RiRobot2Fill, RiStackLine, RiStackFill } from "react-icons/ri";
// import { BsLaptop, BsFillLaptopFill } from "react-icons/bs";
// import { TbTags } from "react-icons/tb";
// import { AiFillAliwangwang, AiOutlineAliwangwang } from "react-icons/ai";
// import { MdDesignServices, MdOutlineDesignServices } from "react-icons/md";

// export const tagStyleMap = {
//   "frontend-development": {
//     tagColor: "#fa8fa4",
//     textColor: "#ffffff",
//     backgroundClass: "bg-pink-100 dark:bg-pink-900",
//     lightMode: {
//       text: "#db2777",
//       border: "#db2777",
//       bg: "#fff5f7",
//     },
//     gradient: {
//       light: "linear-gradient(to bottom right, #ff9aad 0%, #f9f586 100%)",
//       dark: "linear-gradient(to bottom right, #6e0c19 0%, #453a94 100%)",
//     },
//   },
//   "machine-learning": {
//     tagColor: "#f9b65c",
//     textColor: "#ffffff",
//     backgroundClass: "bg-yellow-100 dark:bg-yellow-900",
//     lightMode: {
//       text: "#ca8a04",
//       border: "#ca8a04",
//       bg: "#fefcbf",
//     },
//     gradient: {
//       light: "linear-gradient(to bottom right, #ffbfa7 0%, #f9f586 100%)",
//       dark: "linear-gradient(to bottom right, #7e6c10  0%, #6a0d4b 100%)",
//     },
//   },
//   "full-stack-development": {
//     tagColor: "#a6d36e",
//     textColor: "#ffffff",
//     backgroundClass: "bg-green-100 dark:bg-green-900",
//     lightMode: {
//       text: "#16a34a",
//       border: "#16a34a",
//       bg: "#d1fae5",
//     },
//     gradient: {
//       light: "linear-gradient(to bottom right, #96fbc4 0%, #f9f586 100%)",
//       dark: "linear-gradient(to bottom right, #226346 0%, #6b5b1d 100%)",
//     },
//   },
//   "ui-ux": {
//     tagColor: "#c785f9",
//     textColor: "#ffffff",
//     backgroundClass: "bg-purple-100 dark:bg-purple-900",
//     lightMode: {
//       text: "#9333ea",
//       border: "#9333ea",
//       bg: "#faf5ff",
//     },
//     gradient: {
//       light: "linear-gradient(to bottom right, #b78fff 0%, #f9f586 100%)",
//       dark: "linear-gradient(to bottom right, #66009a 0%, #0d7998 100%)",
//     },
//   },
//   ai: {
//     tagColor: "#85f9f9",
//     textColor: "#ffffff",
//     backgroundClass: "bg-sky-100 dark:bg-sky-900",
//     lightMode: {
//       text: "#2563eb",
//       border: "#2563eb",
//       bg: "#dbeafe",
//     },
//     gradient: {
//       light: "linear-gradient(to bottom right, #a0f0f4 0%, #f9f586 100%)",
//       dark: "linear-gradient(to bottom right, #0d7998 0%, #66009a 100%)",
//     },
//   },
// };

// export const hexToRGBA = (hex, alpha = 1) => {
//   const r = parseInt(hex.slice(1, 3), 16);
//   const g = parseInt(hex.slice(3, 5), 16);
//   const b = parseInt(hex.slice(5, 7), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// export const featuresData = [
//   {
//     id: 1,
//     iconOutlined: <BsLaptop />,
//     iconFilled: <BsFillLaptopFill />,
//     color: "text-[#fa8fa4]",
//     hoverColor: "group-hover:text-[#f78c9a]",
//     title: "Frontend Development",
//     tags: [
//       "React",
//       "JavaScript",
//       "TypeScript",
//       "Tailwind",
//       "Material-UI",
//       "HTML5",
//       "CSS3",
//     ],
//     bgClass: tagStyleMap["frontend-development"].backgroundClass,
//     tagIconOutlined: (
//       <TbTags className="w-4 h-4 text-pink-600 dark:text-[#fa8fa4]" />
//     ),
//     des: "Proficient in React, TypeScript, and HTML/CSS for creating responsive web apps.",
//   },
//   {
//     id: 2,
//     iconOutlined: <RiRobot2Line />,
//     iconFilled: <RiRobot2Fill />,
//     color: "text-[#f9b65c]",
//     hoverColor: "group-hover:text-[#f5a442]",
//     title: "Machine Learning",
//     tags: [
//       "Teachable Machine",
//       "Face-API",
//       "Python",
//       "TensorFlow",
//       "scikit-learn",
//       "NumPy",
//       "Pandas",
//     ],
//     bgClass: tagStyleMap["machine-learning"].backgroundClass,
//     tagIconOutlined: (
//       <TbTags className="w-4 h-4 text-yellow-600 dark:text-[#f5a442]" />
//     ),
//     des: "Implementing machine learning models and AI-driven solutions in real-world applications.",
//   },
//   {
//     id: 3,
//     iconOutlined: <RiStackLine />,
//     iconFilled: <RiStackFill />,
//     color: "text-[#a6d36e]",
//     hoverColor: "group-hover:text-[#8dc653]",
//     title: "Full Stack Development",
//     tags: ["MongoDB", "Express", "React", "Node.js"],
//     bgClass: tagStyleMap["full-stack-development"].backgroundClass,
//     tagIconOutlined: (
//       <TbTags className="w-4 h-4 text-green-600 dark:text-[#8dc653]" />
//     ),
//     des: "Experience with full-stack development using MongoDB, Express, React, and Node.js.",
//   },
//   {
//     id: 4,
//     iconOutlined: <AiOutlineAliwangwang />,
//     iconFilled: <AiFillAliwangwang />,
//     color: "text-[#85f9f9]",
//     hoverColor: "group-hover:text-[#85f9f9]",
//     title: "AI",
//     tags: ["Figma", "Photoshop"],
//     bgClass: tagStyleMap["ai"].backgroundClass,
//     tagIconOutlined: (
//       <TbTags className="w-4 h-4 text-blue-600 dark:text-[#85f9f9]" />
//     ),
//     des: "Building AI-powered applications using machine learning and generative models.",
//   },
//   {
//     id: 5,
//     iconOutlined: <MdOutlineDesignServices />,
//     iconFilled: <MdDesignServices />,
//     color: "text-[#c785f9]",
//     hoverColor: "group-hover:text-[#b06ce5]",
//     title: "UI/UX",
//     tags: ["Figma", "Photoshop"],
//     bgClass: tagStyleMap["ui-ux"].backgroundClass,
//     tagIconOutlined: (
//       <TbTags className="w-4 h-4 text-purple-600 dark:text-[#b06ce5]" />
//     ),
//     des: "Designing user interfaces and complex UI flows using tools like Figma and Photoshop.",
//   },
// ];


// Features.constants.js

import React from "react";
import { RiRobot2Line, RiRobot2Fill, RiStackLine, RiStackFill } from "react-icons/ri";
import { BsLaptop, BsFillLaptopFill } from "react-icons/bs";
import { TbTags } from "react-icons/tb";
import { AiFillAliwangwang, AiOutlineAliwangwang } from "react-icons/ai";
import { MdDesignServices, MdOutlineDesignServices } from "react-icons/md";

export const tagStyleMap = {
  "frontend-development": {
    tagColor: "#fa8fa4",
    textColor: "#ffffff",
    backgroundClass: "bg-pink-100 dark:bg-pink-900",
    lightMode: {
      text: "#db2777",
      border: "#db2777",
      bg: "#fff5f7",
    },
    gradient: {
      light: "linear-gradient(to bottom right, #ff9aad 0%, #f9f586 100%)",
      dark: "linear-gradient(to bottom right, #6e0c19 0%, #453a94 100%)",
    },
  },
  "machine-learning": {
    tagColor: "#f9b65c",
    textColor: "#ffffff",
    backgroundClass: "bg-yellow-100 dark:bg-yellow-900",
    lightMode: {
      text: "#ca8a04",
      border: "#ca8a04",
      bg: "#fefcbf",
    },
    gradient: {
      light: "linear-gradient(to bottom right, #ffbfa7 0%, #f9f586 100%)",
      dark: "linear-gradient(to bottom right, #7e6c10  0%, #6a0d4b 100%)",
    },
  },
  "full-stack-development": {
    tagColor: "#a6d36e",
    textColor: "#ffffff",
    backgroundClass: "bg-green-100 dark:bg-green-900",
    lightMode: {
      text: "#16a34a",
      border: "#16a34a",
      bg: "#d1fae5",
    },
    gradient: {
      light: "linear-gradient(to bottom right, #96fbc4 0%, #f9f586 100%)",
      dark: "linear-gradient(to bottom right, #226346 0%, #6b5b1d 100%)",
    },
  },
  "ui-ux": {
    tagColor: "#c785f9",
    textColor: "#ffffff",
    backgroundClass: "bg-purple-100 dark:bg-purple-900",
    lightMode: {
      text: "#9333ea",
      border: "#9333ea",
      bg: "#faf5ff",
    },
    gradient: {
      light: "linear-gradient(to bottom right, #b78fff 0%, #f9f586 100%)",
      dark: "linear-gradient(to bottom right, #66009a 0%, #0d7998 100%)",
    },
  },
  ai: {
    tagColor: "#85f9f9",
    textColor: "#ffffff",
    backgroundClass: "bg-sky-100 dark:bg-sky-900",
    lightMode: {
      text: "#2563eb",
      border: "#2563eb",
      bg: "#dbeafe",
    },
    gradient: {
      light: "linear-gradient(to bottom right, #a0f0f4 0%, #f9f586 100%)",
      dark: "linear-gradient(to bottom right, #0d7998 0%, #66009a 100%)",
    },
  },
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
    tags: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "Material-UI",
      "HTML5",
      "CSS3",
    ],
    bgClass: tagStyleMap["frontend-development"].backgroundClass,
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-pink-600 dark:text-[#fa8fa4]" />
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
    tags: [
      "Teachable Machine",
      "Face-API",
      "Python",
      "TensorFlow",
      "scikit-learn",
      "NumPy",
      "Pandas",
    ],
    bgClass: tagStyleMap["machine-learning"].backgroundClass,
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-yellow-600 dark:text-[#f5a442]" />
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
    bgClass: tagStyleMap["full-stack-development"].backgroundClass,
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-green-600 dark:text-[#8dc653]" />
    ),
    des: "Experience with full-stack development using MongoDB, Express, React, and Node.js.",
  },
  {
    id: 4,
    iconOutlined: <AiOutlineAliwangwang />,
    iconFilled: <AiFillAliwangwang />,
    color: "text-[#85f9f9]",
    hoverColor: "group-hover:text-[#85f9f9]",
    title: "AI",
    tags: ["Figma", "Photoshop"],
    bgClass: tagStyleMap["ai"].backgroundClass,
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-blue-600 dark:text-[#85f9f9]" />
    ),
    des: "Building AI-powered applications using machine learning and generative models.",
  },
  {
    id: 5,
    iconOutlined: <MdOutlineDesignServices />,
    iconFilled: <MdDesignServices />,
    color: "text-[#c785f9]",
    hoverColor: "group-hover:text-[#b06ce5]",
    title: "UI/UX",
    tags: ["Figma", "Photoshop"],
    bgClass: tagStyleMap["ui-ux"].backgroundClass,
    tagIconOutlined: (
      <TbTags className="w-4 h-4 text-purple-600 dark:text-[#b06ce5]" />
    ),
    des: "Designing user interfaces and complex UI flows using tools like Figma and Photoshop.",
  },
];
