import React from "react";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { GlobeAmericasIcon as GlobeAmericasSolidIcon } from "@heroicons/react/24/solid";
import { FiExternalLink } from "react-icons/fi";
import { createRipple } from "../../layouts/RippleEffect";
import { greenStyles } from "../constants/LinksAndInterests.constants";

function Website({ website, temporary = false }) {
  if (temporary) {
    return (
      <div
        className={`relative p-0.5 rounded-full flex justify-center items-center ${greenStyles.baseBg} ${greenStyles.baseShadow} ${greenStyles.gradientHover}`}
      >
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className={`z-10 w-12 h-12 rounded-full flex justify-center items-center focus:outline-none group/link ripple-container ${greenStyles.baseBg}`}
          aria-label="Website"
          onMouseDown={createRipple}
        >
          <GlobeAmericasSolidIcon
            className={`${greenStyles.icon} ${greenStyles.baseText} hidden group-hover/link:inline`}
          />
          <GlobeAmericasIcon
            className={`${greenStyles.icon} ${greenStyles.baseText} group-hover/link:hidden`}
          />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-full overflow-visible ${greenStyles.baseBg} ${greenStyles.baseShadow}`}
    >
      <button
        type="button"
        className={`group relative p-0.5 rounded-full flex items-center cursor-pointer ${greenStyles.gradientHover} focus:outline-none`}
        onClick={() => window.open(website, "_blank", "noopener,noreferrer")}
        aria-label="Open Website"
      >
        <div
          className={`relative w-22 h-11 p-0.5 rounded-full flex justify-start items-center hover:shadow-none ${greenStyles.baseBg}`}
        >
          <div className="relative z-10 w-12 h-12 rounded-full flex justify-center items-center pointer-events-none transition duration-200">
            <GlobeAmericasIcon
              className={`${greenStyles.icon} ${greenStyles.baseText} opacity-80 transition duration-200 group-hover:hidden`}
            />
            <GlobeAmericasSolidIcon
              className={`${greenStyles.icon} ${greenStyles.baseText} transition duration-200 hidden group-hover:inline`}
            />
          </div>

          <div className="relative flex items-center text-sm w-fit pr-4">
            <span className={`font-bodyFont mt-0.5 ${greenStyles.baseText}`}>
              Website
            </span>
            <FiExternalLink className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 transition-[width,margin] duration-200 text-yellow-800 dark:text-yellow-200" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default React.memo(Website);
