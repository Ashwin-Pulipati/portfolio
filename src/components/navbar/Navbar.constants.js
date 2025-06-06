// import {
//   AiFillAliwangwang,
//   AiFillMessage,
//   AiOutlineAliwangwang,
//   AiOutlineCode,
//   AiOutlineMessage,
// } from "react-icons/ai";
// import { BiCategory, BiHomeSmile, BiSolidHomeSmile } from "react-icons/bi";
// import { BsFillLaptopFill, BsLaptop } from "react-icons/bs";
// import {
//   FaAngular,
//   FaGithub,
//   FaJava,
//   FaLinkedinIn,
//   FaPython,
//   FaReact,
// } from "react-icons/fa";
// import {
//   HiOutlineSquares2X2,
//   HiSquares2X2,
// } from "react-icons/hi2";
// import { IoDocuments, IoDocumentsOutline } from "react-icons/io5";
// import { MdCodeOff, MdDesignServices, MdOutlineDesignServices } from "react-icons/md";
// import { RiComputerLine, RiMoonLine, RiRobot2Fill, RiRobot2Line, RiStackFill, RiStackLine, RiSunLine } from "react-icons/ri";
// import { SiOpenai, SiPostgresql } from "react-icons/si";
// import { TbGridDots } from "react-icons/tb";
// import { TiThSmall } from "react-icons/ti";

// export const navItems = [
//   {
//     id: 1001,
//     title: "HOME",
//     bottomNavTitle: "Home",
//     link: "home",
//     activeIcon: <BiSolidHomeSmile className="w-5 h-5 mb-0.5" />,
//     inactiveIcon: <BiHomeSmile className="w-5 h-5 mb-0.5" />,
//     color: "text-pink-600 dark:text-pink-400",
//     backgroundActive:
//       "bg-pink-100 text-pink-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-pink-800 dark:text-pink-100",
//     iconActive: "text-pink-800 dark:text-pink-100",
//     hoverBg: "hover:bg-pink-100 hover:dark:bg-pink-800",
//   },
//   {
//     id: 1002,
//     title: "FEATURES",
//     bottomNavTitle: "Features",
//     link: "features",
//     activeIcon: <HiSquares2X2 className="w-5 h-5 mb-0.5" />,
//     inactiveIcon: <HiOutlineSquares2X2 className="w-5 h-5 mb-0.5" />,
//     color: "text-purple-600 dark:text-purple-400",
//     backgroundActive:
//       "bg-purple-100 text-purple-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-purple-800 dark:text-purple-100",
//     iconActive: "text-purple-800 dark:text-purple-100",
//     hoverBg: "hover:bg-purple-100 hover:dark:bg-purple-800",
//   },
//   {
//     id: 1003,
//     title: "RESUME",
//     bottomNavTitle: "Resume",
//     link: "resume",
//     activeIcon: <IoDocuments className="w-5 h-5 mb-0.5" />,
//     inactiveIcon: <IoDocumentsOutline className="w-5 h-5 mb-0.5" />,
//     color: "text-yellow-600 dark:text-yellow-400",
//     backgroundActive:
//       "bg-yellow-100 text-yellow-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-yellow-800 dark:text-yellow-100",
//     iconActive: "text-yellow-800 dark:text-yellow-100",
//     hoverBg: "hover:bg-yellow-100 hover:dark:bg-yellow-800",
//   },
//   {
//     id: 1004,
//     title: "HIRE ME",
//     bottomNavTitle: "Hire Me",
//     link: "contact",
//     activeIcon: (
//       <AiFillMessage className="w-[1.30rem] h-[1.30rem] md:w-6 md:h-6 mb-0.5" />
//     ),
//     inactiveIcon: (
//       <AiOutlineMessage className="w-[1.30rem] h-[1.30rem] md:w-6 md:h-6 " />
//     ),
//     color: "text-green-600 dark:text-green-400",
//     backgroundActive:
//       "bg-green-100 text-green-800 rounded-full px-7 pt-3.5 pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-green-800 dark:text-green-100",
//     iconActive: "text-green-800 dark:text-green-100",
//     hoverBg: "hover:bg-green-100 hover:dark:bg-green-800",
//   },
// ];

// const gradientBase = {
//   "all-categories": {
//     light: "linear-gradient(to bottom right, #a0f0f4, #b78fff)",
//     dark: "linear-gradient(to bottom right, #0d7998, #4f2a7a)",
//   },
//   "frontend-development": {
//     light: "linear-gradient(to bottom right, #ff9aad 0%, #f9f586 100%)",
//     dark: "linear-gradient(to bottom right, #6e0c19 0%, #453a94 100%)",
//   },
//   "machine-learning": {
//     light: "linear-gradient(to bottom right, #ffbfa7 0%, #f9f586 100%)",
//     dark: "linear-gradient(to bottom right, #7e6c10 0%, #6a0d4b 100%)",
//   },
//   "full-stack-development": {
//     light: "linear-gradient(to bottom right, #96fbc4 0%, #f9f586 100%)",
//     dark: "linear-gradient(to bottom right, #226346 0%, #6b5b1d 100%)",
//   },
//   "ui-ux": {
//     light: "linear-gradient(to bottom right, #b78fff 0%, #f9f586 100%)",
//     dark: "linear-gradient(to bottom right, #66009a 0%, #0d7998 100%)",
//   },
//   ai: {
//     light: "linear-gradient(to bottom right, #a0f0f4 0%, #f9f586 100%)",
//     dark: "linear-gradient(to bottom right, #0d7998 0%, #66009a 100%)",
//   },
// };

// export const lightModeDropdownItemGradientMap = Object.fromEntries(
//   Object.entries(gradientBase).map(([key, value]) => [key, value.light])
// );

// export const darkModeDropdownItemGradientMap = Object.fromEntries(
//   Object.entries(gradientBase).map(([key, value]) => [key, value.dark])
// );

// export const socialLinks = [
//   {
//     href: "https://www.linkedin.com/in/ashwinpulipati/",
//     label: "LinkedIn",
//     icon: <FaLinkedinIn className="zoomIcon" />,
//     color: "#0A66C2",
//   },
//   {
//     href: "https://github.com/Ashwin-Pulipati",
//     label: "GitHub",
//     icon: <FaGithub className="zoomIcon text-black dark:text-white" />,
//   },
// ];

// export const themeConfig = {
//   light: {
//     icon: <RiSunLine size={25} className="text-orange-600" />,
//     label: "Light Mode",
//     styles: "text-orange-800 bg-orange-100 border-orange-800",
//   },
//   dark: {
//     icon: <RiMoonLine size={25} />,
//     label: "Dark Mode",
//     styles: "text-white bg-gray-800 border-white",
//   },
//   system: {
//     icon: (
//       <RiComputerLine
//         size={25}
//         className="text-stone-600 dark:text-stone-100"
//       />
//     ),
//     label: "System Mode",
//     styles: "text-stone-800 bg-stone-100 border-stone-800",
//   },
// };

// export const CATEGORY_LIST = [
//   "All Categories",
//   "Frontend Development",
//   "Machine Learning",
//   "Full Stack Development",
//   "UI/UX",
//   "AI",
// ];

// export const categoryIconMap = {
//   "All Categories": {
//     iconOutlined: BiCategory,
//     iconFilled: TbGridDots,
//     color: "text-stone-600 dark:text-stone-400",
//   },
//   "Frontend Development": {
//     iconOutlined: BsLaptop,
//     iconFilled: BsFillLaptopFill,
//     color: "text-pink-600 dark:text-pink-400",
//   },
//   "Machine Learning": {
//     iconOutlined: RiRobot2Line,
//     iconFilled: RiRobot2Fill,
//     color: "text-orange-600 dark:text-orange-400",
//   },
//   "Full Stack Development": {
//     iconOutlined: RiStackLine,
//     iconFilled: RiStackFill,
//     color: "text-green-600 dark:text-green-400",
//   },
//   "UI/UX": {
//     iconOutlined: MdOutlineDesignServices,
//     iconFilled: MdDesignServices,
//     color: "text-purple-600 dark:text-purple-400",
//   },
//   AI: {
//     iconOutlined: AiOutlineAliwangwang,
//     iconFilled: AiFillAliwangwang,
//     color: "text-blue-600 dark:text-blue-400",
//   },
// };

// export const subCategoryMap = {
//   "All Stacks": {
//     icon: TiThSmall,
//     color: "text-gray-500 dark:text-gray-400",
//   },
//   "MERN Stack": {
//     icon: FaReact,
//     color: "text-cyan-500 dark:text-cyan-400",
//   },
//   "MEAN Stack": {
//     icon: FaAngular,
//     color: "text-red-500 dark:text-red-400",
//   },
//   "PERN Stack": {
//     icon: SiPostgresql,
//     color: "text-blue-600 dark:text-blue-400",
//   },
//   Python: {
//     icon: FaPython,
//     color: "text-yellow-500 dark:text-yellow-400",
//   },
//   Java: {
//     icon: FaJava,
//     color: "text-orange-600 dark:text-orange-400",
//   },
//   "All AI": {
//     icon: SiOpenai,
//     color: "text-purple-700 dark:text-purple-400",
//   },
//   "No-Code": {
//     icon: MdCodeOff,
//     color: "text-indigo-700 dark:text-indigo-400",
//   },
//   "Code-Based": {
//     icon: AiOutlineCode,
//     color: "text-teal-700 dark:text-teal-400",
//   },
// };


// Navbar.constants.js

import {
  AiFillAliwangwang,
  AiFillMessage,
  AiOutlineAliwangwang,
  AiOutlineCode,
  AiOutlineMessage,
} from "react-icons/ai";
import { BiCategory, BiHomeSmile, BiSolidHomeSmile } from "react-icons/bi";
import { BsFillLaptopFill, BsLaptop } from "react-icons/bs";
import {
  FaAngular,
  FaGithub,
  FaJava,
  FaLinkedinIn,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  HiOutlineSquares2X2,
  HiSquares2X2,
} from "react-icons/hi2";
import { IoDocuments, IoDocumentsOutline } from "react-icons/io5";
import {
  MdCodeOff,
  MdDesignServices,
  MdOutlineDesignServices,
} from "react-icons/md";
import {
  RiComputerLine,
  RiMoonLine,
  RiRobot2Fill,
  RiRobot2Line,
  RiStackFill,
  RiStackLine,
  RiSunLine,
} from "react-icons/ri";
import { SiOpenai, SiPostgresql } from "react-icons/si";
import { TbGridDots } from "react-icons/tb";
import { TiThSmall } from "react-icons/ti";

export const navItems = [
  {
    id: 1001,
    title: "HOME",
    bottomNavTitle: "Home",
    link: "home",
    activeIcon: <BiSolidHomeSmile className="w-5 h-5 mb-0.5" />,
    inactiveIcon: <BiHomeSmile className="w-5 h-5 mb-0.5" />,
    color: "text-pink-600 dark:text-pink-400",
    backgroundActive:
      "bg-pink-100 text-pink-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-pink-800 dark:text-pink-100",
    iconActive: "text-pink-800 dark:text-pink-100",
    hoverBg: "hover:bg-pink-100 hover:dark:bg-pink-800",
  },
  {
    id: 1002,
    title: "FEATURES",
    bottomNavTitle: "Features",
    link: "features",
    activeIcon: <HiSquares2X2 className="w-5 h-5 mb-0.5" />,
    inactiveIcon: <HiOutlineSquares2X2 className="w-5 h-5 mb-0.5" />,
    color: "text-purple-600 dark:text-purple-400",
    backgroundActive:
      "bg-purple-100 text-purple-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-purple-800 dark:text-purple-100",
    iconActive: "text-purple-800 dark:text-purple-100",
    hoverBg: "hover:bg-purple-100 hover:dark:bg-purple-800",
  },
  {
    id: 1003,
    title: "RESUME",
    bottomNavTitle: "Resume",
    link: "resume",
    activeIcon: <IoDocuments className="w-5 h-5 mb-0.5" />,
    inactiveIcon: <IoDocumentsOutline className="w-5 h-5 mb-0.5" />,
    color: "text-yellow-600 dark:text-yellow-400",
    backgroundActive:
      "bg-yellow-100 text-yellow-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-yellow-800 dark:text-yellow-100",
    iconActive: "text-yellow-800 dark:text-yellow-100",
    hoverBg: "hover:bg-yellow-100 hover:dark:bg-yellow-800",
  },
  {
    id: 1004,
    title: "HIRE ME",
    bottomNavTitle: "Hire Me",
    link: "contact",
    activeIcon: (
      <AiFillMessage className="w-[1.30rem] h-[1.30rem] md:w-6 md:h-6 mb-0.5" />
    ),
    inactiveIcon: (
      <AiOutlineMessage className="w-[1.30rem] h-[1.30rem] md:w-6 md:h-6" />
    ),
    color: "text-green-600 dark:text-green-400",
    backgroundActive:
      "bg-green-100 text-green-800 rounded-full px-7 pt-3.5 pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-green-800 dark:text-green-100",
    iconActive: "text-green-800 dark:text-green-100",
    hoverBg: "hover:bg-green-100 hover:dark:bg-green-800",
  },
];

const gradientBase = {
  "all-categories": {
    light: "linear-gradient(to bottom right, #a0f0f4, #b78fff)",
    dark: "linear-gradient(to bottom right, #0d7998, #4f2a7a)",
  },
  "frontend-development": {
    light: "linear-gradient(to bottom right, #ff9aad 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #6e0c19 0%, #453a94 100%)",
  },
  "machine-learning": {
    light: "linear-gradient(to bottom right, #ffbfa7 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #7e6c10 0%, #6a0d4b 100%)",
  },
  "full-stack-development": {
    light: "linear-gradient(to bottom right, #96fbc4 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #226346 0%, #6b5b1d 100%)",
  },
  "ui-ux": {
    light: "linear-gradient(to bottom right, #b78fff 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #66009a 0%, #0d7998 100%)",
  },
  ai: {
    light: "linear-gradient(to bottom right, #a0f0f4 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #0d7998 0%, #66009a 100%)",
  },
};

export const lightModeDropdownItemGradientMap = Object.fromEntries(
  Object.entries(gradientBase).map(([key, value]) => [key, value.light])
);

export const darkModeDropdownItemGradientMap = Object.fromEntries(
  Object.entries(gradientBase).map(([key, value]) => [key, value.dark])
);

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ashwinpulipati/",
    label: "LinkedIn",
    icon: <FaLinkedinIn className="zoomIcon" />,
    color: "#0A66C2",
  },
  {
    href: "https://github.com/Ashwin-Pulipati",
    label: "GitHub",
    icon: <FaGithub className="zoomIcon text-black dark:text-white" />,
  },
];

export const themeConfig = {
  light: {
    icon: <RiSunLine size={25} className="text-orange-600" />,
    label: "Light Mode",
    styles: "text-orange-800 bg-orange-100 border-orange-800",
  },
  dark: {
    icon: <RiMoonLine size={25} />,
    label: "Dark Mode",
    styles: "text-white bg-gray-800 border-white",
  },
  system: {
    icon: (
      <RiComputerLine
        size={25}
        className="text-stone-600 dark:text-stone-100"
      />
    ),
    label: "System Mode",
    styles: "text-stone-800 bg-stone-100 border-stone-800",
  },
};

export const CATEGORY_LIST = [
  "All Categories",
  "Frontend Development",
  "Machine Learning",
  "Full Stack Development",
  "UI/UX",
  "AI",
];

export const categoryIconMap = {
  "All Categories": {
    iconOutlined: BiCategory,
    iconFilled: TbGridDots,
    color: "text-stone-600 dark:text-stone-400",
  },
  "Frontend Development": {
    iconOutlined: BsLaptop,
    iconFilled: BsFillLaptopFill,
    color: "text-pink-600 dark:text-pink-400",
  },
  "Machine Learning": {
    iconOutlined: RiRobot2Line,
    iconFilled: RiRobot2Fill,
    color: "text-orange-600 dark:text-orange-400",
  },
  "Full Stack Development": {
    iconOutlined: RiStackLine,
    iconFilled: RiStackFill,
    color: "text-green-600 dark:text-green-400",
  },
  "UI/UX": {
    iconOutlined: MdOutlineDesignServices,
    iconFilled: MdDesignServices,
    color: "text-purple-600 dark:text-purple-400",
  },
  AI: {
    iconOutlined: AiOutlineAliwangwang,
    iconFilled: AiFillAliwangwang,
    color: "text-blue-600 dark:text-blue-400",
  },
};

export const subCategoryMap = {
  "All Stacks": {
    icon: TiThSmall,
    color: "text-gray-500 dark:text-gray-400",
  },
  "MERN Stack": {
    icon: FaReact,
    color: "text-cyan-500 dark:text-cyan-400",
  },
  "MEAN Stack": {
    icon: FaAngular,
    color: "text-red-500 dark:text-red-400",
  },
  "PERN Stack": {
    icon: SiPostgresql,
    color: "text-blue-600 dark:text-blue-400",
  },
  Python: {
    icon: FaPython,
    color: "text-yellow-500 dark:text-yellow-400",
  },
  Java: {
    icon: FaJava,
    color: "text-orange-600 dark:text-orange-400",
  },
  "All AI": {
    icon: SiOpenai,
    color: "text-purple-700 dark:text-purple-400",
  },
  "No-Code": {
    icon: MdCodeOff,
    color: "text-indigo-700 dark:text-indigo-400",
  },
  "Code-Based": {
    icon: AiOutlineCode,
    color: "text-teal-700 dark:text-teal-400",
  },
};
