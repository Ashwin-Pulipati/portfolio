import React, { useEffect, useRef, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollTo() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [position, setPosition] = useState("top"); // "top" | "middle" | "bottom"
  const lastY = useRef(0);

  // scroll handlers
  useEffect(() => {
    let timer;
    const handleScroll = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const y = window.pageYOffset;
        const maxY = document.documentElement.scrollHeight - window.innerHeight;

        // 1) detect direction
        setScrollDirection(y > lastY.current ? "down" : "up");
        lastY.current = y;

        // 2) detect position
        if (y === 0) {
          setPosition("top");
        } else if (y >= maxY) {
          setPosition("bottom");
        } else {
          setPosition("middle");
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // decide arrow orientation: true = pointing down
  const arrowDown =
    position === "top" || (position === "middle" && scrollDirection === "up");

  // click behavior
  const handleClick = () => {
    if (position === "top") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (position === "bottom") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (scrollDirection === "up") {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="fixed xs:bottom-24 sm:bottom-28 md:bottom-5 xs:right-2 sm:right-3
                group opacity-25 hover:opacity-100 transition-all duration-300
                shadow-shadowTwo dark:shadow-shadowOne rounded-full"
    >
      <div
        className="absolute -inset-0.5 p-0.5 rounded-full
                   bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9]
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <button
        onClick={handleClick}
        aria-label={arrowDown ? "Scroll to bottom" : "Scroll to top"}
        className="relative w-full h-full p-3 rounded-full bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl
               from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] 
               transition-colors duration-300 "
      >
        <FaArrowUpLong
          className={`w-6 h-6 transition-transform duration-300 text-sky-600 dark:text-sky-200 ${
            arrowDown ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}

export default React.memo(ScrollTo);
