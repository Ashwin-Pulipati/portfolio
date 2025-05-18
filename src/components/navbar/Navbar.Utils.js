import { slugify } from "../layouts/Utils";
import {
  projectsByCategory,
  projectsBySubcategory,
} from "../projects/Projects.Utils";
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
  if (title === "HIRE ME") {
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
    title === "HIRE ME" ? "" : base
  } hover:text-black dark:text-gray-300 dark:hover:text-white`;
};

export const getContactBgStyle = (isDarkMode, title, isActive) => {
  if (!isDarkMode || title !== "HIRE ME" || isActive) return {};

  return {
    background: "linear-gradient(145deg, #1e2024, #23272b)",
    backgroundImage: "linear-gradient(to top left, #262a2e, #1f2022)",
  };
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
