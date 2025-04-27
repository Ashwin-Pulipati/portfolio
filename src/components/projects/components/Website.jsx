import React from "react";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { GlobeAmericasIcon as GlobeAmericasSolidIcon } from "@heroicons/react/24/solid";
import { FiExternalLink } from "react-icons/fi";

function Website({ website, temporary = false}) {
  if (temporary) {
    return (
      <div
        className="shadow-md shadow-green-400 dark:shadow-green-500 hover:shadow-none relative p-0.5 rounded-full flex justify-center items-center 
        bg-green-100 dark:bg-green-800 
      hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9]"
      >
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex justify-center items-center focus:outline-none group/link"
          aria-label="Website"
        >
          <GlobeAmericasSolidIcon className="w-5 h-5 text-green-800 dark:text-green-100 hidden group-hover/link:inline" />
          <GlobeAmericasIcon className="w-5 h-5 text-green-800 dark:text-green-100 group-hover/link:hidden" />
        </a>
      </div>
    );
  }

  return (
    <div
      className="relative p-0.5 rounded-full flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] shadow-shadowTwo dark:shadow-shadowOne cursor-pointer"
      onClick={() => window.open(website, "_blank", "noopener,noreferrer")}
    >
      <div className="relative hover:text-white cursor-pointer">
        <div className="shadow-md shadow-green-400 dark:shadow-green-500 group hover:shadow-none group relative w-22 h-12 p-0.5 rounded-full bg-green-100 dark:bg-green-800 flex justify-start items-center">
          {/* Website button */}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex justify-center items-center focus:outline-none transition duration-200 group"
            aria-label="Website"
            onClick={(e) => e.stopPropagation()} // Prevents click from bubbling to outer div
          >
            {/* Default state (outline icon) */}
            <GlobeAmericasIcon className="w-5 h-5 text-green-800 dark:text-green-100 opacity-80 transition duration-200 mt-0.5 group-hover:hidden" />

            {/* Hover state (filled icon) */}
            <GlobeAmericasSolidIcon className="w-5 h-5 text-green-800 dark:text-green-100 transition duration-200 mt-0.5 hidden group-hover:inline" />
          </a>

          {/* Visit text with dynamically appearing external link icon */}
          <div className="relative flex items-center text-sm w-fit h-fit pr-4">
            <span className="font-bodyFont mt-0.5 text-green-800 dark:text-green-100">
              Website
            </span>
            <a
              href={website}
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

export default React.memo(Website);
