import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import KittyLightMode from "../../assets/images/Webp/kitty3.webp";
import KittyDarkMode from "../../assets/images/Webp/kitty2.webp";
import { createRipple } from "../layouts/RippleEffect";
import {
  getClassName,
  getTriangleClassName,
  displayName,
} from "./Footer.constants";  

const FooterBottom = () => {
  const [copied, setCopied] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 500);
  };

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    checkDark();
    return () => observer.disconnect();
  }, []);

  const Tooltip = ({ type }) => (
    <div className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-5 -mb-3 text-xs font-medium 
    pointer-events-none transition-opacity shadow-md dark:shadow-gray-600">
      <span
        className={`relative px-2 py-1 border rounded-md block text-center
          ${getClassName(type)}
        `}
      >
        {copied === type ? "Copied!!" : displayName[type]}

        <div
          className={`absolute left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 mt-1
            ${getTriangleClassName(type)}
          `}
          style={{ bottom: "-5px" }}
        />
      </span>
    </div>
  );
  
  
  const renderIcon = (icon, type, text, href) => (
    <div
      className="relative"
      onMouseEnter={() => setHovered(type)}
      onMouseLeave={() => setHovered(null)}
    >
      <div
        className={`ripple-container w-fit p-2 rounded-xl hover:scale-110 hover:border
          ${type === "email" ? "hover:border-red-800 dark:hover:border-red-100 hover:bg-red-100 dark:hover:bg-red-800" : ""}
          ${type === "linkedin" ? "hover:border-blue-800 dark:hover:border-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800" : ""}
          ${type === "github" ? "hover:border-black dark:hover:border-white hover:bg-white dark:hover:bg-black" : ""}
        `}
        onMouseDown={createRipple}
      >
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={displayName[type]} className="block">
            {icon}
          </a>
        ) : (
          <button onClick={() => copyText(text, type)} aria-label={displayName[type]} className="block outline-none">
            {icon}
          </button>
        )}
      </div>
      {(copied === type || hovered === type) && <Tooltip type={type} />}
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 pb-24 md:pb-10 xl:px-20 lg:px-16 md:px-14 sm:px-10">
      <div className="xs:flex lg:hidden rounded-full w-fit h-fit flex items-center justify-center gap-3">
        {renderIcon(<FaEnvelope className="w-6 h-6 text-red-600 dark:text-red-300" />, "email", "ashwinpulipati@gmail.com")}
        {renderIcon(<FaLinkedinIn className="w-6 h-6 text-blue-700 dark:text-blue-300" />, "linkedin", null, "https://www.linkedin.com/in/ashwinpulipati")}
        {renderIcon(<FaGithub className="w-6 h-6 text-black dark:text-white" />, "github", null, "https://github.com/Ashwin-Pulipati")}
      </div>

      <div className="flex flex-wrap justify-center gap-3 xs:pt-0 lg:pt-6 text-center text-gray-800 dark:text-gray-400 xs:text-sm md:text-base items-center">
        <span>© {new Date().getFullYear()}. All rights reserved by Ashwin Pulipati.</span>
        <img
          src={isDark ? KittyDarkMode : KittyLightMode}
          alt="kitty"
          width={40}
          height={40}
          className="inline-block"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default React.memo(FooterBottom);