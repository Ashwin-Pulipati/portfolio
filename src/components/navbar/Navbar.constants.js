import { BiHomeSmile, BiSolidHomeSmile, BiCategory } from "react-icons/bi";
import {
  MdOutlineLocalPhone,
  MdLocalPhone,
  MdCodeOff,
  MdOutlineDesignServices,
} from "react-icons/md";
import {
  HiOutlineSquares2X2,
  HiSquares2X2,
  HiInboxStack,
} from "react-icons/hi2";
import { IoDocuments, IoDocumentsOutline } from "react-icons/io5";
import {
  FaGithub,
  FaLinkedinIn,
  FaAngular,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiSunLine, RiMoonLine, RiComputerLine } from "react-icons/ri";
import { AiFillAliwangwang, AiFillCode, AiOutlineCode } from "react-icons/ai";
import { SiAiqfome, SiOpenai, SiPostgresql } from "react-icons/si";
import {
  projectsByCategory,
  projectsBySubcategory,
} from "../projects/Projects.constants";
import { slugify } from "../layouts/Utils";
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
    title: "CONTACT",
    bottomNavTitle: "Contact",
    link: "contact",
    activeIcon: <MdLocalPhone className="w-5 h-5" />,
    inactiveIcon: <MdOutlineLocalPhone className="w-5 h-5" />,
    color: "text-green-600 dark:text-green-400",
    backgroundActive:
      "bg-green-100 text-green-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-green-800 dark:text-green-100",
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


export const getIcon = (
  isActive,
  iconActive,
  color,
  activeIcon,
  inactiveIcon
) => (
  <span className={`text-md ${isActive ? iconActive : color}`}>
    {isActive ? activeIcon : inactiveIcon}
  </span>
);

export const getLinkText = (title, isActive, color, iconActive) => (
  <span
    className={`link_text text-gray-500 dark:text-gray-200 ${
      isActive ? color : iconActive
    }`}
  >
    {title}
  </span>
);

export const getNavLinkClasses = (title, isActive) => {
  if (title === "CONTACT") {
    return isActive
      ? "font-semibold text-white"
      : "w-fit h-fit font-normal text-[#c3cedd] tracking-wide cursor-pointer";
  }
  return isActive
    ? "font-semibold text-white"
    : "font-normal text-[#c3cedd] tracking-wide cursor-pointer group-hover:bg-clip-text group-hover:text-transparent group-hover:from-[#58eba6] group-hover:via-[#1fc8de] group-hover:to-[#0584d9]";
};

export const getMobileClasses = (title, isActive, theme, backgroundActive) => {
  const desktopClasses = getNavLinkClasses(title, isActive);
  const sidebarClasses = `link ${isActive ? "active" : ""}`;
  const backgroundClass =
    isActive && theme !== "dark" ? backgroundActive : "bg-transparent";
  return `${backgroundClass} p-2 bg-none rounded-none ${desktopClasses} ${sidebarClasses} ripple-container`;
};

export const getDesktopListItemClasses = (
  isActive,
  title,
  hoverBg,
  backgroundActive,
  isDarkMode
) => {
  if (isActive) {
    const shadow = isDarkMode ? "shadow-shadowOne" : "shadow-shadowTwo";
    return `relative group flex items-center gap-2 text-[15px] transition-all duration-300 ease-out ${shadow} ${backgroundActive} ripple-container`;
  }
  const base = `text-gray-500 ${hoverBg} hover:px-3 hover:py-2 hover:rounded-full`;
  return `relative group flex items-center gap-2 text-[15px] transition-all duration-300 ease-out ${
    title === "CONTACT" ? "" : base
  } hover:text-black dark:text-gray-300 dark:hover:text-white`;
};

export const getContactBgStyle = (isDarkMode, title, isActive) => {
  if (!isDarkMode || title !== "CONTACT" || isActive) return {};

  return {
    background: "linear-gradient(145deg, #1e2024, #23272b)",
    backgroundImage: "linear-gradient(to top left, #262a2e, #1f2022)",
  };
};


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
    icon: <RiSunLine size={24} className="text-orange-600" />,
    label: "Light Mode",
    styles: "text-orange-800 bg-orange-100 border-orange-800",
  },
  dark: {
    icon: <RiMoonLine size={24} />,
    label: "Dark Mode",
    styles: "text-white bg-gray-800 border-white",
  },
  system: {
    icon: (
      <RiComputerLine
        size={24}
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
    icon: BiCategory,
    color: "text-stone-600 dark:text-stone-400",
  },
  "Frontend Development": {
    icon: AiFillCode,
    color: "text-pink-600 dark:text-pink-400",
  },
  "Machine Learning": {
    icon: AiFillAliwangwang,
    color: "text-orange-600 dark:text-orange-400",
  },
  "Full Stack Development": {
    icon: HiInboxStack,
    color: "text-green-600 dark:text-green-400",
  },
  "UI/UX": {
    icon: MdOutlineDesignServices,
    color: "text-purple-600 dark:text-purple-400",
  },
  AI: { icon: SiAiqfome, color: "text-blue-600 dark:text-blue-400" },
};

export const getCategoryCount = (category) => {
  const key = slugify(category);
  return projectsByCategory[key]?.length || 0;
};

export const getSubCount = (category, sub) => {
  const catSlug = slugify(category);
  if (
    (category === "Full Stack Development" && sub === "All Stacks") ||
    (category === "AI" && sub === "All AI")
  ) {
    return projectsByCategory[catSlug]?.length || 0;
  }
  const key = `${catSlug}||${slugify(sub)}`;
  return projectsBySubcategory[key]?.length || 0;
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
    color: "text-purple-500 dark:text-purple-400",
  },
  "No-Code": {
    icon: MdCodeOff,
    color: "text-indigo-500 dark:text-indigo-400",
  },
  "Code-Based": {
    icon: AiOutlineCode,
    color: "text-teal-500 dark:text-teal-400",
  },
};
