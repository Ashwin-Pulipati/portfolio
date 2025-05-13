import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { GiFox } from "react-icons/gi";
import { createRipple } from "../layouts/RippleEffect";

const displayName = { email: "Email", linkedin: "LinkedIn", github: "GitHub" };

function SocialIconsRadial() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      type: "email",
      icon: <FaEnvelope className="w-6 h-6 text-red-600 dark:text-red-300" />,
      action: () => navigator.clipboard.writeText("ashwinpulipati@gmail.com"),
    },
    {
      type: "linkedin",
      icon: (
        <FaLinkedinIn className="w-6 h-6 text-blue-700 dark:text-blue-300" />
      ),
      href: "https://www.linkedin.com/in/ashwinpulipati",
    },
    {
      type: "github",
      icon: <FaGithub className="w-6 h-6 text-black dark:text-white" />,
      href: "https://github.com/Ashwin-Pulipati",
    },
  ];

  const angles = [-60, 0, 60]; // deg
  const radius = 4.5; // rem units

  return (
    <div className="hidden lg:block fixed top-1/2 lg:left-0 transform -translate-y-1/2 md:mr-2 lg:ml-2 z-20">
      {/* Trigger Button */}
      <div
        className={`${
          open ? "opacity-100" : "opacity-30 hover:opacity-100"
        } hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] 
        rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne transition-transform duration-300`}
      >
        <button
          className={`relative w-12 h-12 rounded-full bg-gradient-to-br from-[#dee3e7] to-white dark:from-[#262a2e] 
      dark:to-[#1f2022] flex items-center justify-center overflow-hidden transition-transform duration-300 ${
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

      {/* Radial Items */}
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
              {/* Outer wrapper triggers group hover */}
              <div className="group transition-transform duration-200 hover:scale-75">
                {/* Gradient border */}
                <div
                  className="relative hover:bg-gradient-to-r focus-within:bg-gradient-to-r 
      from-[#58eba6] via-[#1fc8de] to-[#0584d9] rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne"
                >
                  {/* Icon wrapper */}
                  <div
                    className="relative w-14 h-14 rounded-full"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={displayName[item.type]}
                        onMouseDown={createRipple}
                        className="ripple-container relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-transform duration-200"
                      >
                        {React.cloneElement(item.icon)}
                      </a>
                    ) : (
                      <button
                        onClick={() => item.action()}
                        aria-label={displayName[item.type]}
                        onMouseDown={createRipple}
                        className="ripple-container relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-transform duration-200"
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
