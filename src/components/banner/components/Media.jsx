import React, { useEffect } from "react"

import {
  socialIcons,
  skills,
} from "../constants/media";
import AOS from "aos";
import "aos/dist/aos.css";
import { createRipple } from "../../layouts/RippleEffect";

const Media = () => {
      useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: false,
        });
        AOS.refresh();
        return () => {
          AOS.refresh();
        };
      }, []);
  return (
    <div className="flex flex-col lg:flex-row xl:gap-48 md:gap-12 sm:gap-12 justify-between pt-8 lg:gap-14">
      {/* Social Icons Section */}
      <div>
        <h2 className="tracking-[1px] text-sm sm:text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-6" data-aos="fade-up">
          {socialIcons.map(({ id, Icon, containerClass, style, link, label }) => (
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
          ))}
        </div>
      </div>

      {/* Skills Icons Section */}
      <div className="flex flex-col mt-10 lg:mt-0">
        <h2 className="tracking-[1px] text-sm sm:text-base uppercase font-titleFont mb-4">
          BEST SKILL IN
        </h2>
        <div
          className="flex w-fit h-fit flex-wrap gap-6 justify-start"
          data-aos="fade-up"
        >
          {skills.map(({ id, Icon, containerClass, iconClass, style }) => (
            <span key={id} className={containerClass}>
              <Icon className={iconClass} style={style} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Media);
