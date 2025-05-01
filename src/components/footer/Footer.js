import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import KittyLightMode from "../../assets/images/Webp/kitty3.webp";
import KittyDarkMode from "../../assets/images/Webp/kitty2.webp";
import { createRipple } from "../layouts/RippleEffect";

const FooterBottom = () => {
  const [copied, setCopied] = useState(null);
  const [hovered, setHovered] = useState(null);

  const displayName = {
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
  };

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 500);
  };

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const Tooltip = ({ type }) => (
    <>
      <div
        className={`
          z-10 absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-1 rotate-45 w-2 h-2
          ${
            type === "email"
              ? " bg-red-100 border-red-800 dark:bg-red-800 dark:border-red-100"
              : type === "linkedin"
              ? "bg-blue-100 border-blue-800 dark:bg-blue-800 dark:border-blue-100"
              : type === "github"
              ? "bg-white border-black dark:bg-black dark:border-white"
              : ""
          }
          border border-t-0 border-l-0 shadow-md dark:shadow-gray-600
        `}
      />
      <span
        className={`
          absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-2 px-2 py-1 text-xs whitespace-nowrap font-medium
          ${
            type === "email"
              ? "text-red-600 dark:text-red-100 bg-red-100 border-red-800 dark:bg-red-800 dark:border-red-100"
              : type === "linkedin"
              ? "text-blue-700 dark:text-blue-100 bg-blue-100 border-blue-800 dark:bg-blue-800 dark:border-blue-100"
              : type === "github"
              ? "bg-white border-black dark:bg-black dark:border-white"
              : ""
          } 
          border rounded-md pointer-events-none transition-opacity shadow-md dark:shadow-gray-600
        `}
      >
        {copied === type ? "Copied!!" : displayName[type]}
      </span>
    </>
  );

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 pb-24 md:pb-10 xl:px-20 lg:px-16 md:px-14 sm:px-10">
      <div className="xs:flex lg:hidden rounded-full w-fit h-fit flex items-center justify-center gap-3">
        {/*** EMAIL ***/}
        <div
          className="relative"
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className="w-fit p-2 rounded-xl hover:scale-110 hover:border hover:border-red-800 dark:hover:border-red-100 
            hover:bg-red-100 dark:hover:bg-red-800 ripple-container "
            onMouseDown={createRipple}
          >
            <button
              onClick={() => copyText("ashwinpulipati@gmail.com", "email")}
              aria-label="Email"
              className="block outline-none"
            >
              <FaEnvelope className="w-6 h-6 text-red-600 dark:text-red-300" />
            </button>
          </div>
          {(copied === "email" || hovered === "email") && (
            <Tooltip type="email" />
          )}
        </div>

        {/*** LINKEDIN ***/}
        <div
          className="relative"
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className="ripple-container w-fit p-2 rounded-xl hover:scale-110 hover:border hover:border-blue-800 dark:hover:border-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800"
            onMouseDown={createRipple}
          >
            <a
              href="https://www.linkedin.com/in/ashwinpulipati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="block"
            >
              <FaLinkedinIn className="w-6 h-6 text-blue-700 dark:text-blue-300" />
            </a>
          </div>
          {hovered === "linkedin" && <Tooltip type="linkedin" />}
        </div>

        {/*** GITHUB ***/}
        <div
          className="relative"
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className="ripple-container w-fit p-2 rounded-xl hover:scale-110 hover:border hover:border-black dark:hover:border-white hover:bg-white dark:hover:bg-black"
            onMouseDown={createRipple}
          >
            <a
              href="https://github.com/Ashwin-Pulipati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="block"
            >
              <FaGithub className="w-6 h-6 text-black dark:text-white" />
            </a>
          </div>
          {hovered === "github" && <Tooltip type="github" />}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 xs:pt-0 lg:pt-6 text-center text-gray-800 dark:text-gray-400 xs:text-sm md:text-base items-center">
        <span>
          © {new Date().getFullYear()}. All rights reserved by Ashwin Pulipati.
        </span>
        {isDark ? (
          <img
            src={KittyDarkMode}
            alt="kitty"
            width={40}
            height={40}
            className="inline-block"
            loading="lazy"
          />
        ) : (
          <img
            src={KittyLightMode}
            alt="kitty"
            width={40}
            height={40}
            className="inline-block"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(FooterBottom);