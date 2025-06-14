import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo, PiGithubLogoFill } from "react-icons/pi";
import { createRipple } from "../../layouts/RippleEffect";
import { purpleStyles } from "../constants/LinksAndInterests.constants";

function Github({ github, temporary = false }) {
  if (temporary) {
    return (
      <div
        className={`relative flex justify-center items-center group ${purpleStyles.baseBg} ${purpleStyles.baseShadow} ${purpleStyles.border}`}
      >
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none group/link ripple-container ${purpleStyles.baseBg}`}
          aria-label="GitHub"
          onMouseDown={createRipple}
        >
          <PiGithubLogo
            className={`${purpleStyles.icon} ${purpleStyles.baseText} group-hover/link:hidden`}
          />
          <PiGithubLogoFill
            className={`${purpleStyles.icon} ${purpleStyles.baseText} hidden group-hover/link:inline`}
          />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-full overflow-visible ${purpleStyles.baseBg} ${purpleStyles.baseShadow}`}
    >
      <button
        type="button"
        className={`ripple-container relative flex items-center cursor-pointer overflow-hidden ${purpleStyles.border}`}
        onClick={() => window.open(github, "_blank", "noopener,noreferrer")}
        onMouseDown={createRipple}
        aria-label="GitHub"
      >
        <div
          className={`group relative w-22 h-11 p-0.5 rounded-full flex justify-start items-center hover:shadow-none ${purpleStyles.baseBg}`}
        >
          <div className="relative z-10 w-12 h-12 rounded-full flex justify-center items-center pointer-events-none transition duration-200">
            <PiGithubLogo
              className={`${purpleStyles.icon} ${purpleStyles.baseText} opacity-80 transition duration-200 group-hover:hidden`}
            />
            <PiGithubLogoFill
              className={`${purpleStyles.icon} ${purpleStyles.baseText} transition duration-200 hidden group-hover:inline`}
            />
          </div>

          <div className="relative flex items-center gap-1 text-sm w-fit pr-4">
            <span className={`font-bodyFont mt-0.5 ${purpleStyles.baseText}`}>
              Github
            </span>
            <FiExternalLink className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 transition-[width,margin] duration-200 text-yellow-800 dark:text-yellow-200" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default React.memo(Github);
