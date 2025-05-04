import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { GiFox } from "react-icons/gi";
import { createRipple } from "../layouts/RippleEffect";

const displayName = { email: "Email", linkedin: "LinkedIn", github: "GitHub" };

function SocialIconsRadial() {
  const [copied, setCopied] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 500);
  };

  const Tooltip = ({ type }) => (
    <>
      <div
        className={`z-20 absolute ml-2 top-1/2 left-full transform -translate-y-1/2 rotate-45 w-2 h-2 border border-t-0 border-r-0 shadow-md
          ${type === "email"
            ? "bg-red-100 border-red-800 dark:bg-red-800 dark:border-red-100"
            : type === "linkedin"
            ? "bg-blue-100 border-blue-800 dark:bg-blue-800 dark:border-blue-100"
            : "bg-white border-black dark:bg-black dark:border-white"}`
        }
      />
      <span
        className={`z-10 absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs whitespace-nowrap font-medium border rounded-md shadow-md dark:shadow-gray-600 pointer-events-none
          ${type === "email"
            ? "text-red-600 dark:text-red-100 bg-red-100 border-red-800 dark:bg-red-800 dark:border-red-100"
            : type === "linkedin"
            ? "text-blue-700 dark:text-blue-100 bg-blue-100 border-blue-800 dark:bg-blue-800 dark:border-blue-100"
            : "text-black dark:text-white bg-white border-black dark:bg-black dark:border-white"}`
        }
      >
        {copied === type ? "Copied!!" : displayName[type]}
      </span>
    </>
  );

  const items = [
    {
      type: "email",
      icon: <FaEnvelope className="w-6 h-6 text-red-600 dark:text-red-300" />,
      action: () => copyText("ashwinpulipati@gmail.com", "email"),
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
    <div className="hidden lg:block fixed top-1/2 lg:left-0 transform -translate-y-1/2 md:mr-2 lg:ml-2 z-10">
      {/* Trigger Button */}
      <div
        className={`hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] 
    rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne transition-transform duration-300`}
      >
        <button
          className={`relative w-12 h-12 rounded-full bg-gradient-to-br from-[#dee3e7] to-white dark:from-[#262a2e] 
      dark:to-[#1f2022] flex items-center justify-center overflow-hidden transition-transform duration-300`}
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
                    onMouseEnter={() => setHovered(item.type)}
                    onMouseLeave={() => setHovered(null)}
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

                    {(hovered === item.type || copied === item.type) && (
                      <Tooltip type={item.type} />
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
