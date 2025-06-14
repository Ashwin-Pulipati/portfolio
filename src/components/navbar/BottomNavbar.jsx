// BottomNavbar.jsx

import React, { useEffect, useState, useMemo, useCallback } from "react";
import debounce from "lodash.debounce";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./Navbar.constants";
import { createRipple } from "../layouts/RippleEffect";

function BottomNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoize section IDs array
  const sectionIds = useMemo(() => navItems.map((n) => n.link), []);

  const headerOffset = 70;

  // Update activeIndex based on current path
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const idx = navItems.findIndex((i) =>
      currentPath.includes(i.link.toLowerCase())
    );
    if (idx !== -1) setActiveIndex(idx);
  }, [location.pathname]);

  // Track scroll for backdrop styling
  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  // Click handler for each nav button
  const handleClick = useCallback(
    (nav, idx) => {
      if (location.pathname.startsWith("/features")) {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(nav.link);
          if (el) {
            const pos =
              el.getBoundingClientRect().top +
              window.pageYOffset -
              headerOffset;
            window.scrollTo({ top: pos, behavior: "smooth" });
          }
        }, 300);
      } else {
        const el = document.getElementById(nav.link);
        if (el) {
          const pos =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;
          window.scrollTo({ top: pos, behavior: "smooth" });
        } else {
          navigate(`/${nav.link}`);
        }
      }
      setActiveIndex(idx);
    },
    [location.pathname, navigate]
  );

  // Update activeIndex on scroll when on homepage
  useEffect(() => {
    const isHomepage =
      location.pathname === "/" || location.pathname === "/portfolio";
    if (!isHomepage) return;

    const handleActiveOnScroll = debounce(() => {
      const scrollPos = window.pageYOffset + headerOffset + 1;
      let newIndex = sectionIds.findIndex((id) => {
        const sec = document.getElementById(id);
        if (!sec) return false;
        return (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        );
      });

      if (newIndex === -1) {
        const first = document.getElementById(sectionIds[0]);
        if (first && scrollPos < first.offsetTop) {
          newIndex = 0;
        }
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }, 100);

    window.addEventListener("scroll", handleActiveOnScroll);
    handleActiveOnScroll();
    return () => {
      window.removeEventListener("scroll", handleActiveOnScroll);
      handleActiveOnScroll.cancel();
    };
  }, [activeIndex, sectionIds, location.pathname]);

  // Memoize navigation items rendering
  const renderedNavItems = useMemo(
    () =>
      navItems.map((nav, idx) => (
        <div
          key={nav.id}
          className="flex flex-col items-center justify-center transition-all duration-300"
        >
          <button
            className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ripple-container ${
              activeIndex === idx
                ? `${nav.backgroundActive} elevatedShadow`
                : ""
            }`}
            onMouseDown={createRipple}
            onClick={() => handleClick(nav, idx)}
            aria-label="bottom nav"
          >
            <div
              className={`w-6 h-6 ${
                activeIndex === idx ? nav.iconActive : nav.color
              }`}
            >
              {activeIndex === idx ? nav.activeIcon : nav.inactiveIcon}
            </div>
          </button>
          <span
            className={`text-xs capitalize pt-1.5 ${
              activeIndex === idx
                ? nav.iconActive
                : "text-gray-600 dark:text-lightText"
            }`}
          >
            {nav.bottomNavTitle}
          </span>
        </div>
      )),
    [activeIndex, handleClick]
  );

  return (
    <div
      className={`w-full xs:block md:hidden fixed bottom-0 z-50 flex justify-between items-center font-titleFont backdrop-blur-lg 
      py-5 xs:px-5 xs:pb-3.5 sm:px-8 md:px-11 rounded-tr-xl rounded-tl-xl ${
        isScrolled
          ? "bg-bodyColorWhite/75 dark:bg-bodyColor/50"
          : "bg-bodyColorWhite dark:bg-bodyColor"
      } transition-shadow duration-300`}
    >
      <div className="flex justify-between items-center gap-2">
        {renderedNavItems}
      </div>
    </div>
  );
}

export default React.memo(BottomNavbar);
