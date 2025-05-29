// import debounce from "lodash.debounce";
// import React, { useCallback, useEffect, useState } from "react";
// import { HiArrowLeft } from "react-icons/hi";
// import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import useSystemTheme from "react-use-system-theme";
// import { ReactComponent as LogoSVG } from "../../assets/images/app-logo/app-logo.svg";
// import { createRipple } from "../layouts/RippleEffect";
// import HamburgerMenu from "./components/HamburgerMenu";
// import MediumScreenNavbar from "./components/MediumScreenNavbar";
// import Searchbar from "./components/Searchbar";
// import ThemeToggle from "./components/ThemeToggle";
// import { navItems } from "./Navbar.constants";
// import "./Navbar.css";
// import {
//   getContactBgStyle,
//   getDesktopListItemClasses,
//   getIcon,
//   getLinkText,
//   getMobileClasses,
// } from "./Navbar.Utils";

// const Navbar = ({ onSearch }) => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const location = useLocation();
//   const isFeaturesPage = location.pathname.startsWith("/features/");

//   useEffect(() => {
//     const checkSections = debounce(() => {
//       const sections = navItems.map((nav) => document.getElementById(nav.link));
//       let newActive = 0;
//       sections.forEach((sec, idx) => {
//         if (sec) {
//           const { top, bottom } = sec.getBoundingClientRect();
//           if (top <= 100 && bottom >= 100) newActive = idx;
//         }
//       });
//       setActiveIndex((prev) => {
//         if (prev !== newActive) {
//           localStorage.setItem("activeIndex", newActive);
//           return newActive;
//         }
//         return prev;
//       });
//     }, 100);
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//       checkSections();
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       checkSections.cancel();
//     };
//   }, []);

//   useEffect(() => {
//     const storedIndex = localStorage.getItem("activeIndex");
//     if (storedIndex !== null) {
//       setActiveIndex(parseInt(storedIndex, 10));
//     }
//   }, []);

//   const handleLinkClick = useCallback((index) => {
//     setActiveIndex(index);
//     localStorage.setItem("activeIndex", index);
//     setShowMenu(false);
//   }, []);

//   const systemTheme = useSystemTheme();
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("theme") || "system"
//   );
//   const isDarkMode =
//     theme === "dark" || (theme === "system" && systemTheme === "dark");

//   useEffect(() => {
//     if (theme === "system") {
//       document.documentElement.classList.toggle("dark", systemTheme === "dark");
//     }
//   }, [systemTheme, theme]);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     if (theme === "light") {
//       document.documentElement.classList.remove("dark");
//     } else if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else if (theme === "system") {
//       document.documentElement.classList.toggle("dark", systemTheme === "dark");
//     }
//   }, [theme, systemTheme]);

//   const toggleTheme = () => {
//     if (theme === "light") setTheme("dark");
//     else if (theme === "dark") setTheme("system");
//     else setTheme("light");
//   };

//   const renderNavItems = (mobile = false) => {
//     return navItems.map(
//       (
//         {
//           id,
//           title,
//           link,
//           activeIcon,
//           inactiveIcon,
//           color,
//           backgroundActive,
//           iconActive,
//           hoverBg,
//         },
//         index
//       ) => {
//         const isActive = activeIndex === index;

//         const commonProps = {
//           to: link,
//           href: `#${link}`,
//           smooth: true,
//           offset: -70,
//           duration: 500,
//           onClick: () => handleLinkClick(index),
//           ...(isActive && { onMouseDown: createRipple }),
//         };

//         const icon = getIcon(
//           isActive,
//           iconActive,
//           color,
//           activeIcon,
//           inactiveIcon
//         );
//         const linkText = getLinkText(title, isActive, color, iconActive);

//         if (mobile) {
//           return (
//             <li key={id}>
//               <ScrollLink
//                 className={getMobileClasses(
//                   title,
//                   isActive,
//                   theme,
//                   backgroundActive
//                 )}
//                 {...commonProps}
//               >
//                 <div
//                   className={`icon text-md tracking-[2px] ${isActive ? iconActive : color}`}
//                 >
//                   {icon}
//                 </div>
//                 {linkText}
//               </ScrollLink>
//             </li>
//           );
//         }

//         const contactGradient = title === "HIRE ME" && !isActive;

//         return (
//           <li
//             key={id}
//             className={getDesktopListItemClasses(
//               isActive,
//               title,
//               hoverBg,
//               backgroundActive,
//               isDarkMode
//             )}
//             {...(isActive && { onMouseDown: createRipple })}
//           >
//             {contactGradient && (
//               <div className="absolute -inset-0.5 dark:-inset-1 rounded-lg bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-600 dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
//             )}
//             <ScrollLink
//               {...commonProps}
//               className={`relative inline-flex items-center gap-2 tracking-[2px] ${
//                 contactGradient
//                   ? "z-10 bg-gradient-to-br from-gray-200 to-white px-4 py-[11px] rounded-lg"
//                   : ""
//               }`}
//               style={getContactBgStyle(isDarkMode, title, isActive)}
//             >
//               {icon}
//               <span
//                 className={`link_text ${
//                   isActive
//                     ? iconActive
//                     : "group-hover:text-black dark:group-hover:text-white text-gray-600 dark:text-gray-300"
//                 }`}
//               >
//                 {title}
//               </span>
//             </ScrollLink>
//           </li>
//         );
//       }
//     );
//   };

//   const navigate = useNavigate();

//   const handleBack = () => {
//     const path = location.pathname;
//     let targetPath = "/";

//     if (path.includes("/projects/")) {
//       const category = path.split("/")[2];
//       targetPath = `/features/${category}`;
//     }

//     navigate(targetPath);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const baseClasses = `
//   w-full sticky top-0 z-60 flex justify-between items-center font-titleFont backdrop-blur-lg
//   px-8 py-3 md:px-12 md:py-3
//   transition-all duration-300 ease-out
// `;

//   const scrolledClasses = isScrolled
//     ? [
//         "xs:shadow-lg",
//         "pr-2.5 pl-4 py-0 md:p-0",
//         isFeaturesPage ? "xs:px-3.5 xs:py-0" : "xs:px-2.5 xs:py-0",
//         "md:px-12",
//         "xs:rounded-full md:rounded-none md:shadow-none",
//         "bg-bodyColorWhite/75 dark:bg-bodyColor/50 backdrop-blur-lg",
//       ].join(" ")
//     : "bg-bodyColorWhite dark:bg-bodyColor";

//   return (
//     <nav className={`${baseClasses} ${scrolledClasses}`}>
//       <div className="flex items-center gap-3">
//         {location.pathname !== "/" && (
//           <div className="gradientBorderLg">
//             <button
//               className="rounded-lg flex justify-center items-center w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] cardGradient transition-colors duration-300 ripple-container"
//               onClick={handleBack}
//               onMouseDown={createRipple}
//               aria-label="Back"
//             >
//               <HiArrowLeft className="w-5 h-5 arrowIcon" />
//             </button>
//           </div>
//         )}

//         <RouterLink
//           to="/"
//           smooth="true"
//           offset={-70}
//           duration={500}
//           className="flex justify-between items-center m-2 md:m-0"
//         >
//           {/* SVG for large screens */}
//           <LogoSVG
//             className="w-16 h-16 hidden lg:block"
//             aria-label="App logo"
//             loading="eager"
//             decoding="async"
//             fetchpriority="high"
//             width="64"
//             height="64"
//           />

//           {/* Raster fallback for small screens */}
//           {/* <picture className="block lg:hidden">
//             <source
//               srcSet={`${process.env.PUBLIC_URL}/app-logo.webp`}
//               type="image/webp"
//               width="64"
//               height="56"
//             />
//             <source
//               srcSet={`${process.env.PUBLIC_URL}/app-logo.png`}
//               type="image/png"
//               width="64"
//               height="56"
//             />
//             <img
//               src={`${process.env.PUBLIC_URL}/app-logo.png`}
//               alt="App logo"
//               className="w-16 h-14"
//               loading="eager"
//               decoding="async"
//               fetchpriority="high"
//               width="64"
//               height="56"
//             />
//           </picture> */}
//           <picture className="block lg:hidden">
//             <source
//               srcSet={`${process.env.PUBLIC_URL}/app-logo.webp`}
//               type="image/webp"
//             />
//             <source
//               srcSet={`${process.env.PUBLIC_URL}/app-logo.png`}
//               type="image/png"
//             />
//             <img
//               src={`${process.env.PUBLIC_URL}/app-logo.png`}
//               alt="App logo"
//               className="w-16 h-16"
//               width="64"
//               height="64"
//               loading="eager"
//               decoding="async"
//               fetchpriority="high"
//             />
//           </picture>
//         </RouterLink>

//         <button className="hidden lg:block " aria-label="Toggle Theme">
//           <div className="gradientBorderFull ">
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//           </div>
//         </button>
//       </div>

//       <div className="flex items-center gap-4">
//         {isFeaturesPage ? (
//           <div className="hidden lg:flex">
//             <Searchbar onSearch={onSearch} />
//           </div>
//         ) : (
//           <ul className="hidden lg:inline-flex items-center gap-6">
//             {renderNavItems(false)}
//           </ul>
//         )}

//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setShowMenu((prev) => !prev)}
//           className="relative text-xl xs:hidden md:block lg:hidden w-12 h-12 rounded-full flex items-center justify-center
//           transition-all duration-300 group elevatedShadow"
//         >
//           <HamburgerMenu showMenu={showMenu} />
//         </button>

//         <MediumScreenNavbar
//           showMenu={showMenu}
//           setShowMenu={setShowMenu}
//           renderNavItems={renderNavItems}
//           toggleTheme={toggleTheme}
//           theme={theme}
//         />

//         <button className="block md:hidden" aria-label="Toggle Theme">
//           <div className="gradientBorderFull">
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//           </div>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default React.memo(Navbar);



// import debounce from "lodash.debounce";
// import React, { useCallback, useEffect, useState } from "react";
// import { HiArrowLeft } from "react-icons/hi";
// import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import useSystemTheme from "react-use-system-theme";
// import { ReactComponent as LogoSVG } from "../../assets/images/app-logo/app-logo.svg";
// import { createRipple } from "../layouts/RippleEffect";
// import HamburgerMenu from "./components/HamburgerMenu";
// import LargeScreenNavItems from "./LargeScreenNavItems";
// import NavbarDrawer from "./NavbarDrawer";
// import Searchbar from "./components/Searchbar";
// import ThemeToggle from "./components/ThemeToggle";
// import { navItems } from "./Navbar.constants";
// import "./Navbar.css";
// import {
//   getContactBgStyle,
//   getDesktopListItemClasses,
//   getIcon,
//   getLinkText,
//   getMobileClasses,
// } from "./Navbar.Utils";

// const Navbar = ({ onSearch }) => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isFeaturesPage = location.pathname.startsWith("/features/");

//   // --- Scroll & Active Section Logic ---
//   useEffect(() => {
//     const checkSections = debounce(() => {
//       const sections = navItems.map((nav) => document.getElementById(nav.link));
//       let newActive = 0;
//       sections.forEach((sec, idx) => {
//         if (sec) {
//           const { top, bottom } = sec.getBoundingClientRect();
//           if (top <= 100 && bottom >= 100) newActive = idx;
//         }
//       });
//       setActiveIndex((prev) => {
//         if (prev !== newActive) {
//           localStorage.setItem("activeIndex", newActive);
//           return newActive;
//         }
//         return prev;
//       });
//     }, 100);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//       checkSections();
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       checkSections.cancel();
//     };
//   }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

//   // --- Load Active Index from Storage ---
//   useEffect(() => {
//     const storedIndex = localStorage.getItem("activeIndex");
//     if (storedIndex !== null) {
//       setActiveIndex(parseInt(storedIndex, 10));
//     }
//   }, []);

//   // --- Theme Logic ---
//   const systemTheme = useSystemTheme();
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("theme") || "system"
//   );
//   const isDarkMode =
//     theme === "dark" || (theme === "system" && systemTheme === "dark");

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.documentElement.classList.remove("dark", "light"); // Clear previous theme
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else if (theme === "light") {
//       document.documentElement.classList.add("light");
//     } else {
//       document.documentElement.classList.toggle("dark", systemTheme === "dark");
//     }
//   }, [theme, systemTheme]);

//   const toggleTheme = useCallback(() => {
//     setTheme((prevTheme) => {
//       if (prevTheme === "light") return "dark";
//       if (prevTheme === "dark") return "system";
//       return "light";
//     });
//   }, []);

//   // --- Link Click Handler ---
//   const handleLinkClick = useCallback((index) => {
//     setActiveIndex(index);
//     localStorage.setItem("activeIndex", index);
//     setShowMenu(false);
//   }, []);

//   // --- Render Nav Items Function ---
//   const renderNavItems = useCallback(
//     (mobile = false) => {
//       return navItems.map(
//         (
//           {
//             id,
//             title,
//             link,
//             activeIcon,
//             inactiveIcon,
//             color,
//             backgroundActive,
//             iconActive,
//             hoverBg,
//           },
//           index
//         ) => {
//           const isActive = activeIndex === index;

//           const commonProps = {
//             to: link,
//             href: `#${link}`,
//             smooth: true,
//             offset: -70,
//             duration: 500,
//             onClick: () => handleLinkClick(index),
//             ...(isActive && { onMouseDown: createRipple }),
//           };

//           const icon = getIcon(
//             isActive,
//             iconActive,
//             color,
//             activeIcon,
//             inactiveIcon
//           );
//           const linkText = getLinkText(title, isActive, color, iconActive);

//           if (mobile) {
//             return (
//               <li key={id}>
//                 <ScrollLink
//                   className={getMobileClasses(
//                     title,
//                     isActive,
//                     theme,
//                     backgroundActive
//                   )}
//                   {...commonProps}
//                 >
//                   <div
//                     className={`icon text-md tracking-[2px] ${
//                       isActive ? iconActive : color
//                     }`}
//                   >
//                     {icon}
//                   </div>
//                   {linkText}
//                 </ScrollLink>
//               </li>
//             );
//           }

//           const contactGradient = title === "HIRE ME" && !isActive;

//           return (
//             <li
//               key={id}
//               className={getDesktopListItemClasses(
//                 isActive,
//                 title,
//                 hoverBg,
//                 backgroundActive,
//                 isDarkMode
//               )}
//               {...(isActive && { onMouseDown: createRipple })}
//             >
//               {contactGradient && (
//                 <div className="absolute -inset-0.5 dark:-inset-1 rounded-lg bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-600 dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
//               )}
//               <ScrollLink
//                 {...commonProps}
//                 className={`relative inline-flex items-center gap-2 tracking-[2px] ${
//                   contactGradient
//                     ? "z-10 bg-gradient-to-br from-gray-200 to-white px-4 py-[11px] rounded-lg dark:from-gray-800 dark:to-bodyColor"
//                     : ""
//                 }`}
//                 style={getContactBgStyle(isDarkMode, title, isActive)}
//               >
//                 {icon}
//                 <span
//                   className={`link_text ${
//                     isActive
//                       ? iconActive
//                       : "group-hover:text-black dark:group-hover:text-white text-gray-600 dark:text-gray-300"
//                   }`}
//                 >
//                   {title}
//                 </span>
//               </ScrollLink>
//             </li>
//           );
//         }
//       );
//     },
//     [activeIndex, handleLinkClick, theme, isDarkMode]
//   );

//   // --- Back Button Logic ---
//   const handleBack = () => {
//     const path = location.pathname;
//     let targetPath = "/";

//     if (path.includes("/projects/")) {
//       const category = path.split("/")[2];
//       targetPath = `/features/${category}`;
//     }

//     navigate(targetPath);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // --- Navbar Classes ---
//   const baseClasses = `
//     w-full sticky top-0 z-50 flex justify-between items-center font-titleFont
//     px-8 py-3 md:px-12 md:py-3
//     transition-all duration-300 ease-out
//   `;

//   const scrolledClasses = isScrolled
//     ? `
//       xs:shadow-lg
//       p-2.5 pl-4 py-0 md:p-0
//       ${isFeaturesPage ? "xs:px-3.5 xs:py-0" : "xs:px-2.5 xs:py-0"}
//       md:px-12
//       xs:rounded-full md:rounded-none md:shadow-none
//       bg-bodyColorWhite/75 dark:bg-bodyColor/50 backdrop-blur-lg
//     `
//     : "bg-bodyColorWhite dark:bg-bodyColor";

//   // --- Logo Component ---
//   const Logo = React.memo(() => (
//     <RouterLink
//       to="/"
//       smooth="true"
//       offset={-70}
//       duration={500}
//       className="flex justify-between items-center m-2 md:m-0"
//       onClick={() => handleLinkClick(0)} // Assuming Home is index 0
//     >
//       <LogoSVG
//         className="w-16 h-16 hidden lg:block"
//         aria-label="App logo"
//         loading="eager"
//         decoding="async"
//         fetchpriority="high"
//       />
//       <picture className="block lg:hidden">
//         <source
//           srcSet={`${process.env.PUBLIC_URL}/app-logo.webp`}
//           type="image/webp"
//         />
//         <source
//           srcSet={`${process.env.PUBLIC_URL}/app-logo.png`}
//           type="image/png"
//         />
//         <img
//           src={`${process.env.PUBLIC_URL}/app-logo.png`}
//           alt="App logo"
//           className="w-16 h-16"
//           width="64"
//           height="64"
//           loading="eager"
//           decoding="async"
//           fetchpriority="high"
//         />
//       </picture>
//     </RouterLink>
//   ));

//   return (
//     <nav className={`${baseClasses} ${scrolledClasses}`}>
//       {/* Left Side: Back Button, Logo, LG Theme Toggle */}
//       <div className="flex items-center gap-3">
//         {location.pathname !== "/" && (
//           <div className="gradientBorderLg">
//             <button
//               className="rounded-lg flex justify-center items-center w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] cardGradient transition-colors duration-300 ripple-container"
//               onClick={handleBack}
//               onMouseDown={createRipple}
//               aria-label="Back"
//             >
//               <HiArrowLeft className="w-5 h-5 arrowIcon" />
//             </button>
//           </div>
//         )}
//         <Logo />
//         <button className="hidden lg:block " aria-label="Toggle Theme">
//           <div className="gradientBorderFull ">
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//           </div>
//         </button>
//       </div>

//       {/* Right Side: LG Nav/Search, MD Hamburger, SM Theme Toggle */}
//       <div className="flex items-center gap-4">
//         {/* LG View */}
//         <div className="hidden lg:flex">
//           {isFeaturesPage ? (
//             <Searchbar onSearch={onSearch} />
//           ) : (
//             <LargeScreenNavItems renderNavItems={renderNavItems} />
//           )}
//         </div>

//         {/* MD View - Hamburger */}
//         <button
//           type="button"
//           aria-label="Toggle Menu"
//           onClick={() => setShowMenu((prev) => !prev)}
//           className="relative text-xl xs:hidden md:block lg:hidden w-12 h-12 rounded-full flex items-center justify-center
//            transition-all duration-300 group elevatedShadow"
//         >
//           <HamburgerMenu showMenu={showMenu} />
//         </button>

//         {/* XS/SM View - Theme Toggle */}
//         <button className="block md:hidden" aria-label="Toggle Theme">
//           <div className="gradientBorderFull">
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//           </div>
//         </button>
//       </div>

//       {/* MD Drawer Menu */}
//       <NavbarDrawer
//         showMenu={showMenu}
//         setShowMenu={setShowMenu}
//         renderNavItems={renderNavItems}
//         toggleTheme={toggleTheme}
//         theme={theme}
//       />
//     </nav>
//   );
// };

// export default React.memo(Navbar);



import debounce from "lodash.debounce";
import React, { Suspense, useCallback, useEffect, useState } from "react"; // Added Suspense
import { HiArrowLeft } from "react-icons/hi";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useSystemTheme from "react-use-system-theme";
import LogoPNG from "../../assets/images/app-logo/app-logo.png";
import { createRipple } from "../layouts/RippleEffect";
import HamburgerMenu from "./components/HamburgerMenu";
import LargeScreenNavItems from "./LargeScreenNavItems";
// import NavbarDrawer from "./components/NavbarDrawer"; // Lazy load
// import Searchbar from "./components/Searchbar"; // Lazy load
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

const Navbar = ({ onSearch }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isFeaturesPage = location.pathname.startsWith("/features/");

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

  // --- Load Active Index from Storage ---
  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      setActiveIndex(parseInt(storedIndex, 10));
    }
  }, []);

  // --- Theme Logic ---
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );
  const isDarkMode =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

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

  // --- Render Nav Items Function ---
  const renderNavItems = useCallback(
    (mobile = false) => {
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
      );
    },
    [activeIndex, handleLinkClick, theme, isDarkMode]
  );

  // --- Back Button Logic ---
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

  // --- Navbar Classes ---
  const baseClasses = `
    w-full sticky top-0 z-50 flex justify-between items-center font-titleFont
    px-8 py-3 md:px-12 md:py-3
    transition-all duration-300 ease-out
  `;

  const scrolledClasses = isScrolled
    ? `
      xs:shadow-lg
      p-2.5 pl-4 py-0 md:p-0
      ${isFeaturesPage ? "xs:px-3.5 xs:py-0" : "xs:px-2.5 xs:py-0"}
      md:px-12
      xs:rounded-full md:rounded-none md:shadow-none
      bg-bodyColorWhite/75 dark:bg-bodyColor/50 backdrop-blur-lg
    `
    : "bg-bodyColorWhite dark:bg-bodyColor";

  // --- Logo Component ---
  const Logo = React.memo(() => (
    <RouterLink
      to="/"
      smooth="true"
      offset={-70}
      duration={500}
      className="flex justify-between items-center m-2 md:m-0"
      onClick={() => handleLinkClick(0)}
    >
      <img
        src={LogoPNG}
        className="w-16 h-16 hidden lg:block"
        aria-label="App logo"
        loading="eager"
        decoding="async" // Can help, but monitor impact
        fetchpriority="high"
      />
      <picture className="block lg:hidden">
        <source
          srcSet={`${process.env.PUBLIC_URL}/app-logo.png`}
          type="image/png"
        />
        <source
          srcSet={`${process.env.PUBLIC_URL}/app-logo.webp`}
          type="image/webp"
        />
        <img
          src={`${process.env.PUBLIC_URL}/app-logo.png`}
          alt="App logo"
          className="w-16 h-16"
          width="64"
          height="64"
          loading="eager"
          decoding="async" // *** ADDED THIS ***
          fetchpriority="high"
        />
      </picture>
    </RouterLink>
  ));

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
        <Logo />
        <button className="hidden lg:block " aria-label="Toggle Theme">
          <div className="gradientBorderFull ">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* LG View */}
        <div className="hidden lg:flex">
          {/* Wrap lazy components in Suspense */}
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

      {/* MD Drawer Menu - Wrap in Suspense */}
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