import React from "react";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { createRipple } from "../../layouts/RippleEffect";

function Demo({ demo }) {
  return (
    <div
      // OUTER WRAPPER with the full red shadow
      className="relative rounded-full bg-red-100 dark:bg-red-800  shadow-md shadow-red-400 dark:shadow-red-500 overflow-visible hover:shadow-none ripple-container"
    onMouseDown={createRipple}
    >
      <div
        // INNER gradient container
        className="relative p-0.5 rounded-full flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] cursor-pointer"
        onClick={() => window.open(demo, "_blank", "noopener,noreferrer")}
      >
        <div className="group relative w-22 h-11 p-0.5 rounded-full bg-red-100 dark:bg-red-800 flex justify-start items-center hover:shadow-none">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-12 h-11 rounded-full flex justify-center items-center focus:outline-none transition duration-200"
            aria-label="Demo"
          >
            <BsPlayCircle className="w-5 h-5 text-red-800 dark:text-red-100 opacity-80 transition duration-200 mt-0.5 group-hover:hidden" />
            <BsPlayCircleFill className="w-5 h-5 text-red-800 dark:text-red-100 transition duration-200 mt-0.5 hidden group-hover:inline" />
          </a>
          <div className="relative flex items-center text-sm w-fit pr-4">
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
