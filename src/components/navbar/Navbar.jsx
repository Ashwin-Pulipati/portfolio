// Navbar.jsx

import debounce from "lodash.debounce";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useSystemTheme from "react-use-system-theme";
import LogoPNG from "../../assets/images/app-logo/app-logo.png";
import { createRipple } from "../layouts/RippleEffect";
import HamburgerMenu from "./components/HamburgerMenu";
import LargeScreenNavItems from "./LargeScreenNavItems";
import ThemeToggle from "./components/ThemeToggle";
import { navItems } from "./Navbar.constants";
import "./Navbar.css";
import {
  getContactBgStyle,
  getDesktopListItemClasses,
  getIcon,
  getLinkText,
  getMobileClasses,
} from "./Navbar.Utils";

// Lazy load components
const NavbarDrawer = React.lazy(() => import("./NavbarDrawer"));
const Searchbar = React.lazy(() => import("./components/Searchbar"));

// --- Logo Component ---
// Wrap in React.memo so it never re-renders unless handleLinkClick changes
const Logo = React.memo(({ onLogoClick }) => (
  <RouterLink
    to="/"
    smooth="true"
    offset={-70}
    duration={500}
    className="flex justify-between items-center m-2 md:m-0"
    onClick={() => onLogoClick(0)}
  >
    <img
      src={LogoPNG}
      className="w-16 h-16 hidden lg:block"
      aria-label="App logo"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    />
    <picture className="block lg:hidden">
      <source
        srcSet={`${process.env.PUBLIC_URL}/app-logo.webp`}
        type="image/webp"
      />
      <source
        srcSet={`${process.env.PUBLIC_URL}/app-logo.png`}
        type="image/png"
      />
      <img
        src={`${process.env.PUBLIC_URL}/app-logo-2.webp`}
        alt="App logo"
        className="w-16 h-16"
        width="64"
        height="64"
        loading="eager"
        fetchpriority="high"
      />
    </picture>
  </RouterLink>
));

const Navbar = ({ onSearch }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isFeaturesPage = useMemo(
    () => location.pathname.startsWith("/features/"),
    [location.pathname]
  );

  // --- Load Active Index from Storage ---
  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActiveIndex(parseInt(storedIndex, 10));
    }
  }, []);

  // --- Theme Logic ---
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");
  const isDarkMode = useMemo(
    () =>
      theme === "dark" || (theme === "system" && systemTheme === "dark"),
    [theme, systemTheme]
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("dark", "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    }
  }, [theme, systemTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "system";
      return "light";
    });
  }, []);

  // --- Link Click Handler ---
  const handleLinkClick = useCallback((index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
    setShowMenu(false);
  }, []);

  // --- Scroll & Active Section Logic ---
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
    const initialCheckTimer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      checkSections.cancel();
      clearTimeout(initialCheckTimer);
    };
  }, []);

  // --- Memoized navItems so the array reference never changes ---
  const memoNavItems = useMemo(() => navItems, []);

  // --- Render Nav Items Function (memoized) ---
  const renderNavItems = useCallback(
    (mobile = false) =>
      memoNavItems.map(
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

          const icon = getIcon(isActive, iconActive, color, activeIcon, inactiveIcon);
          const linkText = getLinkText(title, isActive, color, iconActive);

          if (mobile) {
            return (
              <li key={id}>
                <ScrollLink
                  className={getMobileClasses(title, isActive, theme, backgroundActive)}
                  {...commonProps}
                >
                  <div
                    className={`icon text-md tracking-[2px] ${
                      isActive ? iconActive : color
                    }`}
                  >
                    {icon}
                  </div>
                  {linkText}
                </ScrollLink>
              </li>
            );
          }

          const contactGradient = title === "HIRE ME" && !isActive;

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
                <div className="absolute -inset-0.5 dark:-inset-1 rounded-lg bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-600 dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
              )}
              <ScrollLink
                {...commonProps}
                className={`relative inline-flex items-center gap-2 tracking-[2px] ${
                  contactGradient
                    ? "z-10 bg-gradient-to-br from-gray-200 to-white px-4 py-[11px] rounded-lg dark:from-gray-800 dark:to-bodyColor"
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
      ),
    [
      activeIndex,
      handleLinkClick,
      memoNavItems,
      theme,
      isDarkMode,
    ]
  );

  // --- Back Button Logic (memoized) ---
  const handleBack = useCallback(() => {
    const path = location.pathname;
    let targetPath = "/";

    if (path.includes("/projects/")) {
      const category = path.split("/")[2];
      targetPath = `/features/${category}`;
    }

    navigate(targetPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, navigate]);

  // --- Navbar Classes (memoized) ---
  const baseClasses = useMemo(
    () =>
      `
    w-full sticky top-0 z-50 flex justify-between items-center font-titleFont
    px-8 py-3 md:px-12 md:py-3
    transition-all duration-300 ease-out
  `,
    []
  );

  const scrolledClasses = useMemo(() => {
    if (isScrolled) {
      return `
      xs:shadow-lg
      p-2.5 pl-4 py-0 md:p-0
      ${isFeaturesPage ? "xs:px-3.5 xs:py-0" : "xs:px-2.5 xs:py-0"}
      md:px-12
      xs:rounded-full md:rounded-none md:shadow-none
      bg-bodyColorWhite/75 dark:bg-bodyColor/50 backdrop-blur-lg
    `;
    }
    return "bg-bodyColorWhite dark:bg-bodyColor";
  }, [isScrolled, isFeaturesPage]);

  return (
    <nav className={`${baseClasses} ${scrolledClasses}`}>
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {location.pathname !== "/" && (
          <div className="gradientBorderLg">
            <button
              className="rounded-lg flex justify-center items-center w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] cardGradient transition-colors duration-300 ripple-container"
              onClick={handleBack}
              onMouseDown={createRipple}
              aria-label="Back"
            >
              <HiArrowLeft className="w-5 h-5 arrowIcon" />
            </button>
          </div>
        )}
        <Logo onLogoClick={handleLinkClick} />
        <button className="hidden lg:block" aria-label="Toggle Theme">
          <div className="gradientBorderFull">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* LG View */}
        <div className="hidden lg:flex">
          <Suspense
            fallback={
              <div className="w-48 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            }
          >
            {isFeaturesPage ? (
              <Searchbar onSearch={onSearch} />
            ) : (
              <LargeScreenNavItems renderNavItems={renderNavItems} />
            )}
          </Suspense>
        </div>

        {/* MD View - Hamburger */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu((prev) => !prev)}
          className="relative text-xl xs:hidden md:block lg:hidden w-12 h-12 rounded-full flex items-center justify-center
           transition-all duration-300 group elevatedShadow"
        >
          <HamburgerMenu showMenu={showMenu} />
        </button>

        {/* XS/SM View - Theme Toggle */}
        <button className="block md:hidden" aria-label="Toggle Theme">
          <div className="gradientBorderFull">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </button>
      </div>

      {/* MD Drawer Menu */}
      <Suspense fallback={null}>
        <NavbarDrawer
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          renderNavItems={renderNavItems}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </Suspense>
    </nav>
  );
};

export default React.memo(Navbar);
