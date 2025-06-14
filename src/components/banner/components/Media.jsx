// Media.jsx

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { socialIcons, skills } from "../Banner.constants";
import { createRipple } from "../../layouts/RippleEffect";
import { fadeUpProps } from "../Banner.utils";

const Media = () => {
  // Memoize rendered social links and skill icons
  const renderedSocialIcons = useMemo(
    () =>
      socialIcons.map(({ id, Icon, containerClass, style, link, label }) => (
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
      )),
    []
  );

  const renderedSkills = useMemo(
    () =>
      skills.map(({ id, Icon, containerClass, iconClass, style }) => (
        <span key={id} className={containerClass}>
          <Icon className={iconClass} style={style} />
        </span>
      )),
    []
  );

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-14 xl:gap-48 pt-8">
      <div>
        <h2 className="tracking-[2px] text-sm sm:text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <motion.div className="flex gap-6" {...fadeUpProps}>
          {renderedSocialIcons}
        </motion.div>
      </div>
      <div className="flex flex-col mt-10 lg:mt-0">
        <h2 className="tracking-[2px] text-sm sm:text-base uppercase font-titleFont mb-4">
          BEST SKILL IN
        </h2>
        <motion.div
          className="w-fit h-fit flex justify-start flex-wrap gap-6 "
          {...fadeUpProps}
        >
          {renderedSkills}
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(Media);
