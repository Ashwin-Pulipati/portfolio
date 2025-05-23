import { motion } from "framer-motion";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useTypewriter } from "react-simple-typewriter";
import { createRipple } from "../../layouts/RippleEffect";
import "../Banner.css";
import { AnimatedText, fadeUpProps } from "../Banner.utils.js";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
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
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

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

      <div className="flex flex-col gap-16 lg:gap-20">
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
          <button
            className="group hover:cursor-pointer"
            onClick={() => scrollToSection("features")}
            aria-label="View Projects"
          >
            <div
              className="flex items-center gap-2 w-fit h-fit bg-orange-100 text-amber-800 
              dark:bg-orange-800 dark:text-amber-100 font-medium px-4 py-3 
              rounded-full text-sm sm:text-base view-projects-button ripple-container elevatedShadow  group-hover:shadow-none "
              onMouseDown={createRipple}
            >
              <div className="flex items-center gap-2 justify-center md:hidden">
                <span className="mb-0.5">View Projects </span>
                <HiArrowRight className="w-4 h-4" />
              </div>

              <div className="md:flex items-center gap-2 justify-center hidden">
                <AnimatedText text="View Projects" />
                <span className="animate-on-hover">
                  <HiArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </button>

          <button
            className="group hover:cursor-pointer"
            onClick={() => scrollToSection("resume")}
            aria-label="View Resume"
          >
            <div
              className="flex items-center gap-2 w-fit h-fit bg-cyan-100 font-medium dark:bg-cyan-800 dark:text-blue-100 
              px-4 py-3 rounded-full text-blue-800 text-sm sm:text-base 
              view-resume-button ripple-container elevatedShadow group-hover:shadow-none"
              onMouseDown={createRipple}
            >
              <div className="flex items-center gap-2 justify-center md:hidden">
                <span className="mb-0.5">View Resume </span>
                <HiArrowRight className="w-4 h-4" />
              </div>

              <div className="md:flex items-center gap-2 justify-center hidden">
                <AnimatedText text="View Resume" />
                <span className="animate-on-hover">
                  <HiArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className="pt-0 xl:pt-6">
          <Media />
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(LeftBanner);
