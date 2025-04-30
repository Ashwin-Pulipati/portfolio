import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";
import { createRipple } from "../layouts/RippleEffect";

const displayName = {
  email: "Email",
  phone: "Phone",
  linkedin: "LinkedIn",
  github: "GitHub",
};

function SocialIconsSidebar() {
  const [copied, setCopied] = useState(null);
  const [hovered, setHovered] = useState(null);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    // clear “Copied!!” after 2s, but keep your hover tooltip handling separate
    setTimeout(() => setCopied(null), 500);
  };

  // Helper to render a tooltip arrow + box
  const Tooltip = ({ type }) => (
    <>
      <div
        className={`
          z-10 absolute ml-2 top-1/2 left-full transform -translate-y-1/2 rotate-45
          w-2 h-2
          ${
            type === "email"
              ? " bg-red-100 border-red-800 dark:bg-red-800 dark:border-red-100"
              : type === "linkedin"
              ? "bg-blue-100 border-blue-800 dark:bg-blue-800 dark:border-blue-100"
              : type === "github"
              ? "bg-white border-black dark:bg-black dark:border-white"
              : ""
          }
          border border-t-0 border-r-0 shadow-md
        `}
      />
      <span
        className={`
          absolute left-full ml-3 top-1/2 transform -translate-y-1/2
          px-2 py-1 text-xs whitespace-nowrap font-medium
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
    <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-0 z-20 ml-1.5 opacity-25 hover:opacity-100 transition-all duration-300">
      <div
        className="rounded-full px-3 py-5 flex flex-col items-center gap-3
          bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br from-[#dee3e7] to-white
          dark:from-[#262a2e] dark:to-[#1f2022]
          shadow-shadowTwo dark:shadow-shadowOne transition-colors duration-300"
      >
        {/* Email */}
        <button
          onClick={() => copyText("ashwinpulipati@gmail.com", "email")}
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
          className={`
            relative w-fit p-2 rounded-xl
            hover:scale-110
            hover:border
            hover:border-red-800 dark:hover:border-red-100
            hover:bg-red-100 dark:hover:bg-red-800 
          `}
          
          aria-label="Email"
        >
          <FaEnvelope className="w-6 h-6 text-red-600 dark:text-red-300" />
          {(copied === "email" || hovered === "email") && (
            <Tooltip type="email" />
          )}
        </button>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ashwinpulipati"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
          className={`
            relative w-fit p-2 rounded-xl
            hover:scale-110
            hover:border
            hover:border-blue-800 dark:hover:border-blue-100
            hover:bg-blue-100 dark:hover:bg-blue-800 
          `}
          
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-6 h-6 text-blue-700 dark:text-blue-300" />
          {hovered === "linkedin" && <Tooltip type="linkedin" />}
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Ashwin-Pulipati"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
          className={`
            relative w-fit p-2 rounded-xl
            hover:scale-110
            hover:border
            hover:border-black dark:hover:border-white
            hover:bg-white dark:hover:bg-black 
          `}
          
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 text-black dark:text-white" />
          {hovered === "github" && <Tooltip type="github" />}
        </a>
      </div>
    </div>
  );
}

export default React.memo(SocialIconsSidebar);