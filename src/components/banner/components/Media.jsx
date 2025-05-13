import React from "react";
import { motion } from "framer-motion";

import { socialIcons, skills } from "../constants/media";
import { createRipple } from "../../layouts/RippleEffect";

const fadeUpProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

const Media = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:gap-48 md:gap-12 sm:gap-12 justify-between pt-8 lg:gap-14">
      {/* Social Icons Section */}
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

      {/* Skills Icons Section */}
      <div className="flex flex-col mt-10 lg:mt-0">
        <h2 className="tracking-[1px] text-sm sm:text-base uppercase font-titleFont mb-4">
          BEST SKILL IN
        </h2>
        <motion.div
          className="flex w-fit h-fit flex-wrap gap-6 justify-start"
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
