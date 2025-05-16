import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { createRipple } from "../../layouts/RippleEffect";
import CrossIcon from "./CrossIcon";
import ThemeToggle from "./ThemeToggle";
import { ReactComponent as LogoSVG } from "../../../assets/images/app-logo/app-logo.svg";
import {socialLinks} from "../Navbar.constants";

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
        <motion.div
          key="medium-navbar"
          className="sm:w-full md:w-2/5 xs:hidden md:block lg:hidden h-screen overflow-auto absolute top-0 left-0 
                   bg-bodyColorWhite dark:bg-bodyColor p-4 backdrop-blur-xl rounded-tr-xl rounded-br-xl scrollbar-hide elevatedShadow"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <div className="flex flex-col gap-8 relative md:px-6">
            <ScrollLink
              to="home"
              smooth
              offset={-70}
              duration={500}
              onClick={handleClose}
            >
              <LogoSVG
                className="w-16 h-16"
                aria-label="App logo"
                loading="eager"
                decoding="async"
                fetchPriority="high"
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

            <button
              className="w-fit h-fit flex items-center rounded-full mb-5 ripple-container cardView"
              onMouseDown={createRipple}
            >
              <div className="gradientBorderFull lg:hidden block">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
            </button>

            <button
              onClick={handleClose}
              className="absolute top-2 right-3 w-12 h-12 rounded-full flex items-center justify-center 
                         transition-all duration-300 group elevatedShadow"
              aria-label="Close menu"
            >
              <CrossIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(MediumScreenNavbar);
