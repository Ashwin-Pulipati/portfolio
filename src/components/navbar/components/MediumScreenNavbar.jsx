import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import CrossIcon from "./CrossIcon";
import { createRipple } from "../../layouts/RippleEffect";
import ThemeToggle from "./ThemeToggle";
// import logoSVG from "../../assets/images/app-logo/app-logo.svg";
import { ReactComponent as LogoSVG } from "../../../assets/images/app-logo/app-logo.svg";

const MotionSidebar = motion.div;

const sidebarVariants = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
};

const transitionSettings = {
  type: "spring",
  stiffness: 100,
  damping: 25,
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ashwinpulipati/",
    label: "LinkedIn",
    icon: <FaLinkedinIn className="zoomIcon" />,
    color: "#0A66C2",
  },
  {
    href: "https://github.com/Ashwin-Pulipati",
    label: "GitHub",
    icon: <FaGithub className="zoomIcon text-black dark:text-white" />,
  },
];

const MediumScreenNavbar = ({
  showMenu,
  setShowMenu,
  renderNavItems,
  toggleTheme,
  theme,
}) => {
  const handleClose = useCallback(() => setShowMenu(false), [setShowMenu]);

  return (
    <AnimatePresence>
      {showMenu && (
        <MotionSidebar
          key="medium-navbar"
          className="sm:w-full md:w-2/5 xs:hidden md:block lg:hidden h-screen overflow-auto absolute top-0 left-0 
                   bg-gray-100 dark:bg-[#191B1E] p-4 backdrop-blur-xl rounded-tr-xl rounded-br-xl scrollbar-hide"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={sidebarVariants}
          transition={transitionSettings}
        >
          <div className="flex flex-col gap-8 relative md:px-6">
            <ScrollLink
              to="home"
              smooth
              offset={-70}
              duration={500}
              onClick={handleClose}
            >
              {/* <img
                src={logoSVG}
                alt="Logo"
                width={64}
                height={64}
                className="w-16 h-16"
                loading="eager"
                decoding="async"
              /> */}

              <LogoSVG
                          className="w-16 h-16"
                          aria-label="App logo"
                        />
            </ScrollLink>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              soluta perspiciatis molestias enim cum repellat, magnam
              exercitationem distinctio aliquid nam.
            </p>

            <hr className="border-gray-300 dark:border-gray-700" />
            <ul className="flex flex-col gap-0">{renderNavItems(true)}</ul>
            <hr className="border-gray-300 dark:border-gray-700" />

            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont dark:text-white">
                Find me on
              </h2>
              <div className="flex gap-4">
                {socialLinks.map(({ href, label, icon, color }) => (
                  <a
                    key={label}
                    className="bannerIcon ripple-container"
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseDown={createRipple}
                    style={color ? { color } : undefined}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            <div
              className="w-fit h-fit flex items-center rounded-full mb-5 ripple-container shadow-shadowTwo dark:shadow-shadowOne
                         bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white 
                         dark:from-[#262a2e] dark:to-[#1f2022]"
              onMouseDown={createRipple}
            >
              <div
                className="hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] 
                              rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne lg:hidden block"
              >
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-2 right-3 w-12 h-12 rounded-full flex items-center justify-center 
                         transition-all duration-300 group shadow-shadowTwo dark:shadow-shadowOne"
              aria-label="Close menu"
            >
              <CrossIcon />
            </button>
          </div>
        </MotionSidebar>
      )}
    </AnimatePresence>
  );
};

export default React.memo(MediumScreenNavbar);
