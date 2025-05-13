import React, { useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { FaBrain, FaChartLine } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { BsMenuUp } from "react-icons/bs";
import { createRipple } from "../../layouts/RippleEffect";

const typeStyles = {
  Overview: {
    bg: "bg-emerald-100 dark:bg-emerald-800",
    border: "border-emerald-700 dark:border-emerald-200",
    text: "text-emerald-700 dark:text-emerald-200",
    hover:
      "hover:bg-emerald-100 hover:border-emerald-800 dark:hover:bg-emerald-800 dark:hover:border-emerald-100",
  },
  Challenges: {
    bg: "bg-indigo-100 dark:bg-indigo-800",
    border: "border-indigo-700 dark:border-indigo-200",
    text: "text-indigo-700 dark:text-indigo-200",
    hover:
      "hover:bg-indigo-100 hover:border-indigo-800 dark:hover:bg-indigo-800 dark:hover:border-indigo-100",
  },
  Methodology: {
    bg: "bg-fuchsia-100 dark:bg-fuchsia-800",
    border: "border-fuchsia-700 dark:border-fuchsia-200",
    text: "text-fuchsia-700 dark:text-fuchsia-200",
    hover:
      "hover:bg-fuchsia-100 hover:border-fuchsia-800 dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-100",
  },
  Results: {
    bg: "bg-rose-100 dark:bg-rose-800",
    border: "border-rose-700 dark:border-rose-200",
    text: "text-rose-700 dark:text-rose-200",
    hover:
      "hover:bg-rose-100 hover:border-rose-800 dark:hover:bg-rose-800 dark:hover:border-rose-100",
  },
  Reflections: {
    bg: "bg-amber-100 dark:bg-amber-800",
    border: "border-amber-700 dark:border-amber-200",
    text: "text-amber-700 dark:text-amber-200",
    hover:
      "hover:bg-amber-100 hover:border-amber-800 dark:hover:bg-amber-800 dark:hover:border-amber-100",
  },
};

const Tooltip = ({ type, displayName }) => {
  const style = typeStyles[type] || {};
  const baseClasses = "absolute top-1/2 right-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300";
  const commonShadow = "shadow-md dark:shadow-gray-600";

  return (
    <>
      <div
        className={`
          ${baseClasses} rotate-45 w-2 h-2 mr-2 z-10 ${style.bg} ${style.border} border border-b-0 border-l-0 ${commonShadow}
        `}
      />
      <span
        className={`
          ${baseClasses} mr-3 px-2 py-1 text-xs whitespace-nowrap font-medium rounded-md pointer-events-none border
          ${style.bg} ${style.border} ${style.text} ${commonShadow}
        `}
      >
        {displayName}
      </span>
    </>
  );
};

export const sections = [
  {
    id: "overview-section",
    displayName: "Overview",
    icon: (
      <VscPreview className="w-6 lg:w-8 h-8 text-emerald-700 dark:text-emerald-300" />
    ),
    type: "Overview",
  },
  {
    id: "challenges-section",
    displayName: "Challenges",
    icon: (
      <BiTargetLock className="w-7 lg:w-8 h-8 text-indigo-700 dark:text-indigo-300" />
    ),
    type: "Challenges",
  },
  {
    id: "methodology-section",
    displayName: "Methodology",
    icon: (
      <FaDiagramProject className="w-6 lg:w-7 h-7 text-fuchsia-700 dark:text-fuchsia-300" />
    ),
    type: "Methodology",
  },
  {
    id: "results-section",
    displayName: "Results",
    icon: (
      <FaChartLine className="w-6 lg:w-7 h-7 text-rose-700 dark:text-rose-300" />
    ),
    type: "Results",
  },
  {
    id: "learnings-section",
    displayName: "Reflections",
    icon: (
      <FaBrain className="w-6 lg:w-7 h-7 text-amber-700 dark:text-amber-300" />
    ),
    type: "Reflections",
  },
];

function ProjectSidebarNavigation({ onSectionClick }) {
  const [navOpen, setNavOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  const toggleNav = () => setNavOpen((prev) => !prev);

  const handleMouseEvents = (type) => ({
    onMouseEnter: () => setHoveredSection(type),
    onMouseLeave: () => setHoveredSection(null),
  });

  return (
    <div
      className={`fixed xs:right-2 sm:right-3 lg:right-3.5 xs:bottom-[26%] sm:bottom-[29%] md:bottom-[14%] lg:bottom-[12%] w-12 flex flex-col-reverse items-center gap-1
        bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl
        from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022]
        shadow-shadowTwo dark:shadow-shadowOne transition-colors duration-300 rounded-full z-30
        ${navOpen ? "opacity-100" : "opacity-25 hover:opacity-100"}
        cursor-pointer`}
    >
      <div
        onClick={toggleNav}
        className="relative w-12 h-12 rounded-full ripple-container"
        onMouseDown={createRipple}
        aria-label={navOpen ? "Close navigation" : "Open navigation"}
      >
        <div className="absolute -inset-0.5 p-0.5 rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="relative w-full h-full flex items-center justify-center bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-300 rounded-full">
          {navOpen ? (
            <span className="relative block w-5 h-5 text-red-700 dark:text-red-300">
              <span className="absolute inset-0 top-2 right-1 bg-current rotate-45 w-full h-[4px] rounded-full" />
              <span className="absolute inset-0 top-2 right-1 bg-current -rotate-45 w-full h-[4px] rounded-full" />
            </span>
          ) : (
            <BsMenuUp className="w-6 h-6 text-teal-600 dark:text-teal-200" />
          )}
        </div>
      </div>

      {navOpen && (
        <div className="flex flex-col items-center gap-1 py-3">
          {sections.map(({ id, displayName, icon, type }) => {
            const style = typeStyles[type] || {};
            const isHovered = hoveredSection === type;
            return (
              <div key={id} className="relative group" {...handleMouseEvents(type)}>
                {isHovered && <Tooltip type={type} displayName={displayName} />}
                <div
                  onClick={() => onSectionClick(id)}
                  className={`flex items-center justify-center p-1.5 rounded-xl ripple-container border border-transparent ${style.hover} cursor-pointer transition-transform duration-200 hover:scale-110`}
                  onMouseDown={createRipple}
                >
                  {icon}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProjectSidebarNavigation;


