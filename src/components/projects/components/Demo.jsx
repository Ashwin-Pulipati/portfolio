import React from "react";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function Demo({ demo }) {
  return (
    <div
      className="relative p-0.5 rounded-full flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] shadow-shadowTwo dark:shadow-shadowOne"
      onClick={() => window.open(demo, "_blank", "noopener,noreferrer")}
    >
      <div className="relative hover:text-white cursor-pointer">
        <div className="shadow-md shadow-red-400 dark:shadow-red-500 hover:shadow-none group relative w-22 h-12 p-0.5 rounded-full bg-red-100 dark:bg-red-800 flex justify-start items-center ">
          {/* Website button */}
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-12 h-12 rounded-full bg-red-100 dark:bg-red-800 flex justify-center items-center focus:outline-none transition duration-200 group"
            aria-label="Website"
          >
            {/* Default state (outline icon) */}
            <BsPlayCircle className="w-5 h-5 text-red-800 dark:text-red-100 opacity-80 transition duration-200 mt-0.5 group-hover:hidden" />

            {/* Hover state (filled icon) */}
            <BsPlayCircleFill className="w-5 h-5 text-red-800 dark:text-red-100 transition duration-200 mt-0.5 hidden group-hover:inline" />
          </a>

          {/* Visit text with dynamically appearing external link icon */}
          <div className="relative flex items-center text-sm w-fit h-fit pr-4">
            <span className="font-bodyFont mt-0.5 text-red-800 dark:text-red-100">
              Demo
            </span>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 transition-[width,margin] duration-200"
            >
              <FiExternalLink className="w-4 h-4 text-yellow-800 dark:text-yellow-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Demo);
