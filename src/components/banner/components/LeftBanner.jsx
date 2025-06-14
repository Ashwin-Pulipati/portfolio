// LeftBanner.jsx

import { motion } from "framer-motion";
import React, { useCallback, useMemo, Suspense } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useTypewriter } from "react-simple-typewriter";
import { createRipple } from "../../layouts/RippleEffect";
import "../Banner.css";
import { fadeUpProps } from "../Banner.utils.js";
const Media = React.lazy(() => import("./Media"));

const renderPerWord = (label) => (
  <span className="tracking-tight">
    {label.split(" ").map((word, idx) => (
      <span key={idx} className="inline-block mr-1">
        {word.split("").map((char, cIdx) => (
          <span
            key={`${idx}-${cIdx}`}
            className="inline-block group-hover:animate-move-out transition-transform duration-300 ease-in-out"
            style={{ animationDelay: `${(idx * word.length + cIdx) * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    ))}
  </span>
);

const LeftBanner = () => {
  const [text] = useTypewriter(
    useMemo(
      () => ({
        words: [
          "Professional Coder.",
          "Optimizer.",
          "Collaborator.",
          "Tester.",
          "Integrator.",
          "Problem Solver.",
          "Troubleshooter.",
          "Mentor.",
          "Code Reviewer.",
          "Full Stack Developer.",
          "Software Engineer.",
          "UI/UX Developer.",
          "Designer.",
        ],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 25,
        delaySpeed: 3000,
      }),
      []
    )
  );

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.div
      {...fadeUpProps}
      className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full md:w-11/12 mt-0 lg:mt-10 xl:mt-0"
    >
      <div className="flex flex-col gap-4 md:gap-5">
        <h4 className="tracking-[2px] mt-6 md:mt-0 text-sm sm:text-base font-normal font-titleFont w-fit h-fit text-pink-800 bg-pink-100 dark:text-pink-100 dark:bg-pink-800 rounded-full py-2 px-4 shadow-shadowTwo dark:shadow-shadowOne">
          WELCOME TO MY WORLD
        </h4>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-white font-titleFont">
          Hi, I'm{" "}
          <span className="pt-3 md:pt-0 xs:block md:inline text-4xl md:text-6xl px-1 w-fit h-fit font-nameFont gradient-animation">
            Ashwin Pulipati
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-700 dark:text-white leading-[1.2] font-titleFont">
          a <span>{text}</span>
          <span className="ml-1 animate-blink bg-gradient-to-b from-emerald-400 via-cyan-500 to-blue-700 dark:from-emerald-500 dark:via-cyan-600 dark:to-blue-800 bg-clip-text text-transparent pipeline">
            |
          </span>
        </h2>

        <p className="text-gray-600 dark:text-white text-sm sm:text-base font-bodyFont leading-6 sm:leading-7 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and guide through every interaction. I’m not adding motion just to
          spruce things up, but doing it in ways that enhance the user
          experience.
        </p>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24">
        <div className="flex items-center gap-6 flex-wrap sml:flex-nowrap">
          {/* View Projects Button */}
          <button
            type="button"
            className="group hover:cursor-pointer flex items-center gap-2 w-fit h-fit bg-orange-100 text-amber-800 dark:bg-orange-800 dark:text-amber-100 font-medium px-4 py-3 rounded-full text-sm sm:text-base view-projects-button ripple-container elevatedShadow group-hover:shadow-none"
            onClick={() => scrollToSection("features")}
            onMouseDown={createRipple}
            aria-label="View Projects"
          >
            {/* Mobile: static */}
            <div className="md:hidden flex items-center gap-2">
              <span>View Projects</span>
              <HiArrowRight className="w-4 h-4" />
            </div>
            {/* Desktop: per-word hover animation */}
            <div className="hidden md:flex items-center gap-2">
              {renderPerWord("View Projects")}
              <span className="inline-block transform group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <HiArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>

          {/* View Resume Button */}
          <button
            type="button"
            className="group hover:cursor-pointer flex items-center gap-2 w-fit h-fit bg-cyan-100 font-medium dark:bg-cyan-800 dark:text-blue-100 px-4 py-3 rounded-full text-blue-800 text-sm sm:text-base view-resume-button ripple-container elevatedShadow group-hover:shadow-none"
            onClick={() => scrollToSection("resume")}
            onMouseDown={createRipple}
            aria-label="View Resume"
          >
            <div className="md:hidden flex items-center gap-2">
              <span>View Resume</span>
              <HiArrowRight className="w-4 h-4" />
            </div>
            <div className="hidden md:flex items-center gap-2">
              {renderPerWord("View Resume")}
              <span className="inline-block transform group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <HiArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>
        </div>

        {/* Lazy-loaded media */}
        <Suspense fallback={null}>
          <Media />
        </Suspense>
      </div>
    </motion.div>
  );
};

export default React.memo(LeftBanner);

