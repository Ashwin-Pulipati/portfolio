import { AnimatePresence, motion } from "framer-motion"; // Fixed import
import React, { useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { createRipple } from "./../layouts/RippleEffect";
import CrossIcon from "./components/CrossIcon";
import ThemeToggle from "./components/ThemeToggle";
// import { ReactComponent as LogoSVG } from "../../../assets/images/app-logo/app-logo.svg";
import { socialLinks } from "./Navbar.constants";

const NavbarDrawer = ({
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
          key="navbar-drawer"
          className="sm:w-full md:w-2/5 xs:hidden md:block lg:hidden h-screen overflow-auto absolute top-0 left-0
                     bg-bodyColorWhite dark:bg-bodyColor p-4 backdrop-blur-xl rounded-tr-xl rounded-br-xl scrollbar-hide elevatedShadow" // Fixed classes
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
              className="cursor-pointer" // Added for clarity
            >
              {/* Using Picture element consistently */}
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL}/app-logo.webp`}
                  type="image/webp"
                />
                <source
                  srcSet={`${process.env.PUBLIC_URL}/app-logo.png`}
                  type="image/png"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/app-logo.png`}
                  alt="App logo"
                  className="w-16 h-16"
                  width="64"
                  height="64"
                  loading="lazy" // Lazy load in drawer
                  decoding="async"
                />
              </picture>
            </ScrollLink>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              soluta perspiciatis molestias enim cum repellat, magnam
              exercitationem distinctio aliquid nam.
            </p>
            <hr className="border-gray-300 dark:border-gray-700" />{" "}
            {/* Fixed class */}
            <ul className="flex flex-col gap-0">{renderNavItems(true)}</ul>
            <hr className="border-gray-300 dark:border-gray-700" />{" "}
            {/* Fixed class */}
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont dark:text-white tracking-[2px]">
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
                    style={color ? { color } : {}} // Ensure style is an object
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <hr className="border-gray-300 dark:border-gray-700" />{" "}
            {/* Fixed class */}
            <button
              className="w-fit h-fit flex items-center rounded-full mb-5 ripple-container cardView"
              onMouseDown={createRipple}
              aria-label="Toggle theme"
              onClick={toggleTheme} // Added onClick
            >
              <div className="gradientBorderFull block">
                {" "}
                {/* Always block inside drawer */}
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

export default React.memo(NavbarDrawer);
