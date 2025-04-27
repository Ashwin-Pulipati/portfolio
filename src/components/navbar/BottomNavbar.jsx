import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "./constants/NavItems";

function BottomNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = navItems.map((n) => n.link);
  const headerOffset = 70; // same offset you use for scrolls

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const index = navItems.findIndex((item) =>
      currentPath.includes(item.link.toLowerCase())
    );
    // only override if we actually found a match
    if (index !== -1) {
      setActiveIndex(index);
    }
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

  const handleClick = (nav, index) => {
    if (location.pathname.startsWith("/features")) {
      navigate("/");
      setTimeout(() => {
        const targetElement = document.getElementById(nav.link);
        if (targetElement) {
          const headerOffset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 300);
    } else {
      const targetElement = document.getElementById(nav.link);
      if (targetElement) {
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        navigate(`/${nav.link}`);
      }
    }
    setActiveIndex(index);
  };

  const isDark = document.documentElement.classList.contains("dark");

  useEffect(() => {
    const handleActiveOnScroll = debounce(() => {
      const scrollPos = window.pageYOffset + headerOffset + 1;
      // find the first section whose top <= scrollPos < bottom
      const newIndex = sectionIds.findIndex((id) => {
        const sec = document.getElementById(id);
        if (!sec) return false;
        return (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        );
      });
      if (newIndex !== -1 && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }, 100);

    window.addEventListener("scroll", handleActiveOnScroll);
    handleActiveOnScroll(); // run once on mount
    return () => {
      window.removeEventListener("scroll", handleActiveOnScroll);
      handleActiveOnScroll.cancel();
    };
  }, [activeIndex, sectionIds]);

  return (
    <div
      className={`w-full xs:block md:hidden fixed bottom-0 z-50 flex justify-between items-center font-titleFont backdrop-blur-lg 
      py-[20px] md:px-[45px] sm:px-[30px] xs:px-[20px] xs:pb-[15px] rounded-tr-xl rounded-tl-xl ${
        isScrolled
          ? "bg-[#ECF0F3]/75 dark:bg-bodyColor/50"
          : "bg-[#ECF0F3] dark:bg-bodyColor"
      } transition-shadow duration-300`}
    >
      <div className="flex justify-between items-center gap-2 ">
        {navItems.map((nav, index) => (
          <button
            key={nav.id}
            onClick={() => handleClick(nav, index)}
            className={`flex flex-col items-center justify-center transition-all duration-300`}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? `${nav.backgroundActive} shadow-shadowTwo dark:shadow-shadowOne`
                  : ""
              }`}
            >
              <div
                className={`w-6 h-6 ${
                  !isDark
                    ? nav.iconActive
                    : activeIndex === index
                    ? nav.iconActive
                    : nav.color
                }`}
              >
                {activeIndex === index ? nav.activeIcon : nav.inactiveIcon}
              </div>
            </div>
            <span
              className={`text-xs capitalize pt-1.5 ${
                activeIndex === index
                  ? nav.iconActive
                  : "text-gray-500 dark:text-lightText"
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
