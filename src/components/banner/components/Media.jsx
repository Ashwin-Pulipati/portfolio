import React from "react";
import { motion } from "framer-motion";
import { socialIcons, skills } from "../Banner.constants";
import { createRipple } from "../../layouts/RippleEffect";
import { fadeUpProps } from "../Banner.utils";

const Media = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-14 xl:gap-48 pt-8">
      <div>
        <h2 className="tracking-[1px] text-sm sm:text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <motion.div className="flex gap-6" {...fadeUpProps}>
          {socialIcons.map(
            ({ id, Icon, containerClass, style, link, label }) => (
              <a
                key={id}
                className={`${containerClass} ripple-container`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onMouseDown={createRipple}
              >
                <Icon style={style} />
              </a>
            )
          )}
        </motion.div>
      </div>
      <div className="flex flex-col mt-10 lg:mt-0">
        <h2 className="tracking-[1px] text-sm sm:text-base uppercase font-titleFont mb-4">
          BEST SKILL IN
        </h2>
        <motion.div
          className="w-fit h-fit flex justify-start flex-wrap gap-6 "
          {...fadeUpProps}
        >
          {skills.map(({ id, Icon, containerClass, iconClass, style }) => (
            <span key={id} className={containerClass}>
              <Icon className={iconClass} style={style} />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(Media);
