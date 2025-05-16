import { useState } from "react";
import { BsMenuUp } from "react-icons/bs";
import { createRipple } from "../../layouts/RippleEffect";
import { typeStyles, sections } from "../Projects.constants";

const Tooltip = ({ type, displayName }) => {
  const style = typeStyles[type] || {};
  const baseClasses =
    "absolute top-1/2 right-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300";
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
      className={`fixed xs:right-2 sm:right-3 lg:right-3.5 xs:bottom-[26%] sm:bottom-[29%] md:bottom-[14%] lg:bottom-[12%] w-12 flex 
      flex-col-reverse items-center gap-1 cardView rounded-full z-30 ${
        navOpen ? "opacity-100" : "opacity-25 hover:opacity-100"
      }
        cursor-pointer`}
    >
      <button
        onClick={toggleNav}
        className="relative w-12 h-12 rounded-full ripple-container gradientBorderFull"
        onMouseDown={createRipple}
        aria-label={navOpen ? "Close navigation" : "Open navigation"}
      >
        <div className="absolute -inset-0.5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="relative w-full h-full flex items-center justify-center cardGradient transition-colors duration-300 rounded-full">
          {navOpen ? (
            <span className="relative block w-5 h-5 text-red-700 dark:text-red-300">
              <span className="absolute inset-0 top-2 right-1 bg-current rotate-45 w-full h-[4px] rounded-full" />
              <span className="absolute inset-0 top-2 right-1 bg-current -rotate-45 w-full h-[4px] rounded-full" />
            </span>
          ) : (
            <BsMenuUp className="w-6 h-6 text-teal-600 dark:text-teal-200" />
          )}
        </div>
      </button>

      {navOpen && (
        <div className="flex flex-col items-center gap-1 py-3">
          {sections.map(({ id, displayName, icon, type }) => {
            const style = typeStyles[type] || {};
            const isHovered = hoveredSection === type;
            return (
              <div
                key={id}
                className="relative group"
                {...handleMouseEvents(type)}
              >
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
