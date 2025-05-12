import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./constants/NavItems";
import { createRipple } from "../layouts/RippleEffect";

function BottomNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = navItems.map((n) => n.link);
  const headerOffset = 70;

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const idx = navItems.findIndex((i) =>
      currentPath.includes(i.link.toLowerCase())
    );
    if (idx !== -1) setActiveIndex(idx);
  }, [location.pathname]);

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

  const handleClick = (nav, idx) => {
    if (location.pathname.startsWith("/features")) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(nav.link);
        if (el) {
          const pos =
            el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      }, 300);
    } else {
      const el = document.getElementById(nav.link);
      if (el) {
        const pos =
          el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: pos, behavior: "smooth" });
      } else {
        navigate(`/${nav.link}`);
      }
    }
    setActiveIndex(idx);
  };

    useEffect(() => {
      const isHomepage =
        location.pathname === "/" || location.pathname === "/portfolio";

      if (!isHomepage) return; // don't attach scroll logic on non-home pages

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

  return (
    <div
      className={`w-full xs:block md:hidden fixed bottom-0 z-50 flex justify-between items-center font-titleFont backdrop-blur-lg 
      py-[20px] md:px-[45px] sm:px-[30px] xs:px-[20px] xs:pb-[15px] rounded-tr-xl rounded-tl-xl ${
        isScrolled
          ? "bg-[#ECF0F3]/75 dark:bg-bodyColor/50"
          : "bg-[#ECF0F3] dark:bg-bodyColor"
      } transition-shadow duration-300`}
    >
      <div className="flex justify-between items-center gap-2">
        {navItems.map((nav, idx) => (
          <button
            key={nav.id}
            onClick={() => handleClick(nav, idx)}
            className="flex flex-col items-center justify-center transition-all duration-300"
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ripple-container ${
                activeIndex === idx
                  ? `${nav.backgroundActive} shadow-shadowTwo dark:shadow-shadowOne`
                  : ""
                }`}
              onMouseDown={createRipple}
            >
              <div
                className={`w-6 h-6 ${
                  activeIndex === idx ? nav.iconActive : nav.color
                }`}
              >
                {activeIndex === idx ? nav.activeIcon : nav.inactiveIcon}
              </div>
            </div>
            <span
              className={`text-xs capitalize pt-1.5 ${
                activeIndex === idx
                  ? nav.iconActive
                  : "text-gray-600 dark:text-lightText"
              }`}
            >
              {nav.bottomNavTitle}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default React.memo(BottomNavbar);
