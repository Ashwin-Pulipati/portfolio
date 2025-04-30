import React from "react";
import { PiGithubLogo, PiGithubLogoFill } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { createRipple } from "../../layouts/RippleEffect";

function Github({ github, temporary = false}) {
  if (temporary) {
    return (
      <div
        className="shadow-md shadow-purple-400 dark:shadow-purple-500 hover:shadow-none relative p-0.5 
        rounded-full flex justify-center items-center bg-purple-100 dark:bg-purple-800 group hover:bg-gradient-to-r 
        focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9]"
      >
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-800 flex justify-center items-center 
          focus:outline-none group/link ripple-container"
          aria-label="GitHub"
          onMouseDown={createRipple}
        >
          <PiGithubLogo className="w-5 h-5 text-purple-800 dark:text-purple-100 group-hover/link:hidden mt-0.5" />
          <PiGithubLogoFill className="w-5 h-5 text-purple-800 dark:text-purple-100 hidden group-hover/link:inline mt-0.5" />
        </a>
      </div>
    );
  }

  return (
    // In your component render:
    <div
      // ① OUTER WRAPPER holds the shadow and lets it spill out
      className="relative bg-purple-100 dark:bg-purple-800 rounded-full shadow-md shadow-purple-400 dark:shadow-purple-500 overflow-visible hover:shadow-none"
    >
      <div
        // ② INNER container is your ripple‐container
        className="ripple-container relative p-0.5 rounded-full flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] cursor-pointer overflow-hidden"
        onClick={() => window.open(github, "_blank", "noopener,noreferrer")}
        onMouseDown={createRipple}
      >
        <div className="relative hover:text-white cursor-pointer">
          <div className="group relative w-22 h-11 p-0.5 rounded-full bg-purple-100 dark:bg-purple-800 flex justify-start items-center hover:shadow-none">
            {/* Website button */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none transition duration-200"
              aria-label="Website"
            >
              <PiGithubLogo className="w-5 h-5 text-purple-800 dark:text-purple-100 opacity-80 transition duration-200 mt-0.5 group-hover:hidden" />
              <PiGithubLogoFill className="w-5 h-5 text-purple-800 dark:text-purple-100 transition duration-200 mt-0.5 hidden group-hover:inline" />
            </a>

            {/* Visit text + external‐link icon */}
            <div className="relative flex items-center gap-1 text-sm w-fit pr-4">
              <span className="font-bodyFont mt-0.5 text-purple-800 dark:text-purple-100">
                Github
              </span>
              <a
                href={github}
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
    </div>
  );
}

export default React.memo(Github);
