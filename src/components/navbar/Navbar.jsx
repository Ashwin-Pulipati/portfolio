import React, { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import debounce from "lodash.debounce";
import Searchbar from "./components/Searchbar";
import { navItems } from "./constants/NavItems";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// Import Sidebar.css so that its classes are available on mobile
import "./Navbar.css";
import ThemeToggle from "./components/ThemeToggle";
import { HiArrowLeft } from "react-icons/hi";
import MediumScreenNavbar from "./components/MediumScreenNavbar";
import logo from "../../assets/images/Webp/app-logo.webp";
import { createRipple } from "../layouts/RippleEffect";

// Original desktop nav styling for screens > md
const getNavLinkClasses = (title, isActive) => {
  if (title === "CONTACT") {
    return isActive
      ? "font-semibold text-white"
      : "w-fit h-fit font-normal text-[#c3cedd] tracking-wide cursor-pointer";
  }
  return isActive
    ? "font-semibold text-white"
    : "font-normal text-[#c3cedd] tracking-wide cursor-pointer group-hover:bg-clip-text group-hover:text-transparent group-hover:from-[#58eba6] group-hover:via-[#1fc8de] group-hover:to-[#0584d9]";
};

const Navbar = ({ onSearch }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const isFeaturesPage = location.pathname.startsWith("/features/");

  // Attach a debounced scroll listener to update shadow and active index.
  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 0);
      const sections = navItems.map((nav) => document.getElementById(nav.link));
      let newActiveIndex = 0;
      sections.forEach((section, index) => {
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            newActiveIndex = index;
          }
        }
      });
      setActiveIndex((prevIndex) => {
        if (prevIndex !== newActiveIndex) {
          localStorage.setItem("activeIndex", newActiveIndex);
          return newActiveIndex;
        }
        return prevIndex;
      });
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  // Restore active index from storage if available.
  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActiveIndex(parseInt(storedIndex, 10));
    }
  }, []);

  // Callback when a nav item is clicked.
  const handleLinkClick = useCallback((index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
    setShowMenu(false);
  }, []);

  // Initialize from localStorage if available, otherwise default to "light"
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    // Persist theme changes in localStorage and update html class
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  // Toggle function cycles: system -> light -> dark -> system…
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  const renderNavItems = (mobile = false) =>
    navItems.map(
      (
        {
          id,
          title,
          link,
          activeIcon,
          inactiveIcon,
          color,
          backgroundActive,
          iconActive,
          darkModeTextColor,
        },
        index
      ) => {
        const isActive = activeIndex === index;
        if (mobile) {
          // Combine the original desktop classes with Sidebar.css classes.
          const desktopClasses = getNavLinkClasses(title, isActive);
          const sidebarClasses = `link ${isActive ? "active" : ""}`;
          const combinedClasses = `${desktopClasses} ${sidebarClasses}`;
          return (
            <li key={id}>
              <ScrollLink
                to={link}
                href={`#${link}`}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleLinkClick(index)}
                className={`${
                  isActive && theme !== "dark"
                    ? backgroundActive
                    : "bg-transparent"
                } p-2 bg-none rounded-none ${combinedClasses} ripple-container`}
                {...(isActive && { onMouseDown: createRipple })}
              >
                <div
                  className={`icon text-md ${isActive ? iconActive : color}`}
                >
                  {isActive ? activeIcon : inactiveIcon}
                </div>
                <div
                  className={`link_text text-gray-500 dark:text-gray-200 ${
                    isActive ? color : iconActive
                  }`}
                >
                  {title}
                </div>
              </ScrollLink>
            </li>
          );
        } else {
          // For desktop, use the nav item active/inactive properties.
          return (
            <li
              key={id}
              className={`relative group flex items-center gap-2 text-[15px] transition-all duration-300 ease-out ${
                isActive
                  ? ` ${
                      theme === "dark" ? "shadow-shadowOne" : "shadow-shadowTwo"
                    } ${backgroundActive} ripple-container`
                  : "text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
              }`}
              {...(isActive && { onMouseDown: createRipple })}
            >
              {/* Special background effect for CONTACT when inactive */}
              {title === "CONTACT" && !isActive && (
                <div className="absolute -inset-0.5 dark:-inset-1 rounded-lg bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
              )}
              <ScrollLink
                to={link}
                href={`#${link}`}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleLinkClick(index)}
                className={`relative inline-flex items-center gap-2 ${
                  title === "CONTACT" && !isActive
                    ? "z-10 bg-gradient-to-br from-gray-200 to-white px-4 py-[11px] rounded-lg" //bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9]
                    : ""
                }`}
                style={{
                  background:
                    theme === "dark" && title === "CONTACT" && !isActive
                      ? "linear-gradient(145deg, #1e2024, #23272b)"
                      : "",
                  backgroundImage:
                    theme === "dark" && title === "CONTACT" && !isActive
                      ? "linear-gradient(to top left, #262a2e, #1f2022)"
                      : "",
                }}
              >
                <span className={`text-md ${isActive ? iconActive : color}`}>
                  {isActive ? activeIcon : inactiveIcon}
                </span>
                <span className="relative">{title}</span>
              </ScrollLink>
            </li>
          );
        }
      }
    );

  const navigate = useNavigate();

  const handleBack = () => {
    const pathParts = location.pathname.split("/");
    // Example: ['', 'features', 'frontend-development', 'projects', 'some-title']
    if (pathParts.includes("projects")) {
      // We're on /features/:category/projects/:title, so navigate back to /features/:category
      const category = pathParts[2]; // index 2 holds the category
      navigate(`/features/${category}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname.startsWith("/features")) {
      // We're on /features/:category so navigate back to home
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
    w-full sticky top-0 z-60 flex justify-between items-center font-titleFont backdrop-blur-lg
    xs:px-[30px] xs:py-[12px] md:py-[12px] md:px-[45px]
    ${
      isScrolled
        ? `
        xs:shadow-lg xs:pr-[10px] xs:pl-[15px] xs:pt-0 xs:pb-0 md:p-0
        ${isFeaturesPage ? "xs:px-[14px] xs:py-0" : "xs:px-[10px] xs:py-0"}
        md:px-[45px]
        xs:rounded-full md:rounded-none md:shadow-none
        bg-[#ECF0F3]/75 dark:bg-bodyColor/50 backdrop-blur-lg
      `
        : "bg-[#ECF0F3] dark:bg-bodyColor"
    }
    transition-shadow duration-300
  `}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Conditionally render back button */}
        {location.pathname !== "/" && (
          <div
            className="hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] 
               rounded-lg p-0.5 shadow-shadowTwo dark:shadow-shadowOne"
          >
            <div
              className="rounded-lg flex justify-center items-center w-12 h-12 bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br 
            dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors 
            duration-300 ripple-container"
              onClick={handleBack}
              onMouseDown={createRipple}
            >
              <HiArrowLeft className="w-5 h-5 text-blue-700 dark:text-designColor" />
            </div>
          </div>
        )}

        {/* Logo */}
        <RouterLink to="/" smooth="true" offset={-70} duration={500}>
          <div className="w-16 h-16">
            <img
              src={logo}
              alt="PortfolioLogo"
              className="w-16 h-16 aspect-square object-contain"
              width={64}
              height={64}
              decoding="async"
              loading="eager"
            />
          </div>
        </RouterLink>

        {/* Desktop Toggle (visible on lg and up) */}
        <div className="hidden lg:block">
          <div className="hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {isFeaturesPage ? (
          <div className="hidden lg:flex">
            <Searchbar onSearch={onSearch} />
          </div>
        ) : (
          <ul className="hidden lg:inline-flex items-center gap-6">
            {renderNavItems(false)}
          </ul>
        )}

        {/* Mobile Menu Icon */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu((prev) => !prev)}
          className="relative text-xl xs:hidden md:block lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group shadow-shadowTwo dark:shadow-shadowOne"
        >
          <HamburgerMenu showMenu={showMenu} />
        </button>

        {/* MOBILE MENU (only visible on screens < lg) */}
        <MediumScreenNavbar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          renderNavItems={renderNavItems}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        {/* Mobile Toggle (visible on md and below) */}
        <div className="block md:hidden">
          <div className="hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;