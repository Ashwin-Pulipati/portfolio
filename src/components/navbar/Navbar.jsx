import React, { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import debounce from "lodash.debounce";
import Searchbar from "./components/Searchbar";
import { navItems } from "./constants/NavItems";
import HamburgerMenu from "./components/HamburgerMenu";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "./components/ThemeToggle";
import { HiArrowLeft } from "react-icons/hi";
import MediumScreenNavbar from "./components/MediumScreenNavbar";
import { createRipple } from "../layouts/RippleEffect";
import useSystemTheme from "react-use-system-theme"; 
// import logoSVG from "../../assets/images/app-logo/app-logo.svg";
import { ReactComponent as LogoSVG } from "../../assets/images/app-logo/app-logo.svg";

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
  
  useEffect(() => {
    const checkSections = debounce(() => {
      const sections = navItems.map((nav) => document.getElementById(nav.link));
      let newActive = 0;
      sections.forEach((sec, idx) => {
        if (sec) {
          const { top, bottom } = sec.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) newActive = idx;
        }
      });
      setActiveIndex((prev) => {
        if (prev !== newActive) {
          localStorage.setItem("activeIndex", newActive);
          return newActive;
        }
        return prev;
      });
    }, 100);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      checkSections();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      checkSections.cancel();
    };
  }, []);
  
  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActiveIndex(parseInt(storedIndex, 10));
    }
  }, []);
  
  const handleLinkClick = useCallback((index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
    setShowMenu(false);
  }, []);

  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );
  const isDarkMode =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  useEffect(() => {
    if (theme === "system") {
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    }
  }, [systemTheme, theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "system") {
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    }
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = (isActive, iconActive, color, activeIcon, inactiveIcon) => (
    <span className={`text-md ${isActive ? iconActive : color}`}>
      {isActive ? activeIcon : inactiveIcon}
    </span>
  );

  const getLinkText = (title, isActive, color, iconActive) => (
    <span
      className={`link_text text-gray-500 dark:text-gray-200 ${
        isActive ? color : iconActive
      }`}
    >
      {title}
    </span>
  );

  const getMobileClasses = (title, isActive, theme, backgroundActive) => {
    const desktopClasses = getNavLinkClasses(title, isActive);
    const sidebarClasses = `link ${isActive ? "active" : ""}`;
    const backgroundClass =
      isActive && theme !== "dark" ? backgroundActive : "bg-transparent";
    return `${backgroundClass} p-2 bg-none rounded-none ${desktopClasses} ${sidebarClasses} ripple-container`;
  };

  const getDesktopListItemClasses = (
    isActive,
    title,
    hoverBg,
    backgroundActive,
    isDarkMode
  ) => {
    if (isActive) {
      const shadow = isDarkMode ? "shadow-shadowOne" : "shadow-shadowTwo";
      return `relative group flex items-center gap-2 text-[15px] transition-all duration-300 ease-out ${shadow} ${backgroundActive} ripple-container`;
    }
    const base = `text-gray-500 ${hoverBg} hover:px-3 hover:py-2 hover:rounded-full`;
    return `relative group flex items-center gap-2 text-[15px] transition-all duration-300 ease-out ${
      title === "CONTACT" ? "" : base
    } hover:text-black dark:text-gray-300 dark:hover:text-white`;
  };

  const getContactBgStyle = (isDarkMode, title, isActive) => {
    if (!isDarkMode || title !== "CONTACT" || isActive) return {};

    return {
      background: "linear-gradient(145deg, #1e2024, #23272b)",
      backgroundImage: "linear-gradient(to top left, #262a2e, #1f2022)",
    };
  };

  const renderNavItems = (mobile = false) => {
    return navItems.map(
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
          hoverBg,
        },
        index
      ) => {
        const isActive = activeIndex === index;

        const commonProps = {
          to: link,
          href: `#${link}`,
          smooth: true,
          offset: -70,
          duration: 500,
          onClick: () => handleLinkClick(index),
          ...(isActive && { onMouseDown: createRipple }),
        };

        const icon = getIcon(
          isActive,
          iconActive,
          color,
          activeIcon,
          inactiveIcon
        );
        const linkText = getLinkText(title, isActive, color, iconActive);

        if (mobile) {
          return (
            <li key={id}>
              <ScrollLink
                className={getMobileClasses(
                  title,
                  isActive,
                  theme,
                  backgroundActive
                )}
                {...commonProps}
              >
                <div
                  className={`icon text-md ${isActive ? iconActive : color}`}
                >
                  {icon}
                </div>
                {linkText}
              </ScrollLink>
            </li>
          );
        }

        const contactGradient = title === "CONTACT" && !isActive;

        return (
          <li
            key={id}
            className={getDesktopListItemClasses(
              isActive,
              title,
              hoverBg,
              backgroundActive,
              isDarkMode
            )}
            {...(isActive && { onMouseDown: createRipple })}
          >
            {contactGradient && (
              <div className="absolute -inset-0.5 dark:-inset-1 rounded-lg bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            )}
            <ScrollLink
              {...commonProps}
              className={`relative inline-flex items-center gap-2 ${
                contactGradient
                  ? "z-10 bg-gradient-to-br from-gray-200 to-white px-4 py-[11px] rounded-lg"
                  : ""
              }`}
              style={getContactBgStyle(isDarkMode, title, isActive)}
            >
              {icon}
              <span
                className={`link_text ${
                  isActive
                    ? iconActive
                    : "group-hover:text-black dark:group-hover:text-white text-gray-600 dark:text-gray-300"
                }`}
              >
                {title}
              </span>
            </ScrollLink>
          </li>
        );
      }
    );
  };
  
  const navigate = useNavigate();

  const handleBack = () => {
    const path = location.pathname;
    let targetPath = "/";

    if (path.includes("/projects/")) {
      const category = path.split("/")[2];
      targetPath = `/features/${category}`;
    }

    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    transition-all duration-300 ease-out
  `}
    >
      <div className="flex items-center gap-3">
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

        <RouterLink to="/" smooth="true" offset={-70} duration={500}>
          {/* <img
            src={logoSVG}
            alt="Logo"
            width={64}
            height={64}
            className="w-16 h-16 hidden lg:block"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          /> */}

          <LogoSVG
            className="w-16 h-16"
            aria-label="App logo"
          />
        </RouterLink>

        <div className="hidden lg:block">
          <div className="hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>

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

        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu((prev) => !prev)}
          className="relative text-xl xs:hidden md:block lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group shadow-shadowTwo dark:shadow-shadowOne"
        >
          <HamburgerMenu showMenu={showMenu} />
        </button>

        <MediumScreenNavbar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          renderNavItems={renderNavItems}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <div className="block md:hidden">
          <div className="hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] rounded-full p-0.5 shadow-shadowTwo dark:shadow-shadowOne">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar)