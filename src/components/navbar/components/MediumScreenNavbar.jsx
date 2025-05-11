import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CrossIcon } from "./CrossIcon";
import logoPNG from "../app-logo/app-logo.png";
import { createRipple } from "../../layouts/RippleEffect";
import ThemeToggle from "./ThemeToggle";

function MediumScreenNavbar({
  showMenu,
  setShowMenu,
  renderNavItems,
  toggleTheme,
  theme,
}) {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          className="sm:w-full md:w-2/5 xs:hidden md:block lg:hidden h-screen overflow-auto absolute top-0 left-0 
              bg-gray-100 dark:bg-[#191B1E] p-4 backdrop-blur-xl rounded-tr-xl rounded-br-xl scrollbar-hide"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          <div className="flex flex-col gap-8 relative md:px-6 sm:px-4 xs:px-2">
            <div>
              <ScrollLink
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                <div
                  className="w-16 h-16 bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url(${logoPNG})` }}
                  aria-label="Portfolio Logo"
                />
              </ScrollLink>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-loose">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                soluta perspiciatis molestias enim cum repellat, magnam
                exercitationem distinctio aliquid nam.
              </p>
            </div>
            <hr className="border border-gray-300 dark:border-gray-700" />
            <ul className="flex flex-col gap-0">{renderNavItems(true)}</ul>
            <hr className="border border-gray-300 dark:border-gray-700" />
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4 dark:text-white">
                Find me on
              </h2>
              <div className="flex gap-4">
                <a
                  className="bannerIcon ripple-container"
                  href="https://www.linkedin.com/in/ashwinpulipati/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseDown={createRipple}
                >
                  <FaLinkedinIn
                    className="zoomIcon"
                    style={{ color: "#0A66C2" }}
                  />
                </a>
                <a
                  className="bannerIcon ripple-container"
                  href="https://github.com/Ashwin-Pulipati"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseDown={createRipple}
                >
                  <FaGithub className="zoomIcon text-black dark:text-white" />
                </a>
              </div>
            </div>
            <hr className="border border-gray-300 dark:border-gray-700" />
            <div
              className="w-fit h-fit flex items-center justify-start rounded-full bg-boxBgWhite dark:bg-boxBg
             bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] 
             dark:to-[#1f2022] mb-5 shadow-shadowTwo dark:shadow-shadowOne ripple-container"
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
              onClick={() => setShowMenu(false)}
              className="absolute top-2 right-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group shadow-shadowTwo dark:shadow-shadowOne"
            >
              <CrossIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MediumScreenNavbar;
