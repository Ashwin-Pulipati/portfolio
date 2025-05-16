import React, { useState } from "react";
import {items, displayName} from "./Global.constants";
import { GiFox } from "react-icons/gi";
import { createRipple } from "../components/layouts/RippleEffect";

function SocialIconsRadial() {
  const [open, setOpen] = useState(false);

  const angles = [-60, 0, 60];
  const radius = 4.5;

  return (
    <div className="hidden lg:block fixed top-1/2 lg:left-0 transform -translate-y-1/2 mr-0 md:mr-2 ml-0 lg:ml-2 z-20">
      <div
        className={`${
          open ? "opacity-100" : "opacity-30 hover:opacity-100"
        } gradientBorderFull transition-transform duration-300`}
      >
        <button
          className={`relative p-3.5 rounded-full cardGradient flex items-center justify-center overflow-hidden transition-transform duration-300 ${
            open ? "opacity-100" : ""
          }`}
          onClick={(e) => {
            createRipple(e);
            setOpen(!open);
          }}
          aria-label="Social actions"
        >
          <GiFox
            className={`w-6 h-6 ${
              open
                ? "text-fuchsia-600 dark:text-fuchsia-300"
                : "text-orange-600 dark:text-orange-300"
            } `}
          />
        </button>
      </div>

      {open &&
        items.map((item, idx) => {
          const angle = (angles[idx] * Math.PI) / 180;
          const x = radius * Math.cos(angle);
          const y = -radius * Math.sin(angle);

          return (
            <div
              key={item.type}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${x}rem), calc(-50% + ${y}rem))`,
                transition: "transform 0.3s ease",
              }}
            >
              <div className="group transition-transform duration-200 hover:scale-75">
                <div className="relative gradientBorderFull">
                  <div className="relative w-[3.5rem] h-[3.5rem] rounded-full">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={displayName[item.type]}
                        onMouseDown={createRipple}
                        className="ripple-container relative w-full h-full flex items-center justify-center rounded-full 
                        cardGradient transform transition-transform duration-300"
                      >
                        {React.cloneElement(item.icon)}
                      </a>
                    ) : (
                      <button
                        onClick={() => item.action()}
                        aria-label={displayName[item.type]}
                        onMouseDown={createRipple}
                        className="ripple-container relative w-full h-full flex items-center justify-center rounded-full 
                        cardGradient transform transition-transform duration-300"
                      >
                        {React.cloneElement(item.icon)}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(SocialIconsRadial);
