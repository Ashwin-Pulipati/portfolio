import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Media from "./Media";
import "../Banner.css";
import { HiArrowRight } from "react-icons/hi2";
import { createRipple } from "../../layouts/RippleEffect";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <div className="flex gap-1.5">
      {words.map((word, wi) => (
        <div key={wi} className="flex">
          {word.split("").map((char, ci) => (
            <span key={ci} className="animate-on-hover">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

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
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 25,
    delaySpeed: 3000,
  });

  useEffect(() => {
           AOS.init({
             duration: 1000,
             easing: "ease-in-out",
             once: false,
           });
           AOS.refresh();
           return () => {
             AOS.refresh();
           };
         }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full md:w-11/12 xl:gap-12 xs:mt-0 lg:mt-10 xl:mt-0" data-aos="fade-up">
      <div className="flex flex-col gap-4 md:gap-5">
        <h4 className="tracking-[1px] mt-6 md:mt-0 text-sm sm:text-base font-normal font-titleFont w-fit h-fit text-pink-800 bg-pink-100 dark:text-pink-100 dark:bg-pink-800 rounded-full p-2 pr-4 pl-4 shadow-shadowTwo dark:shadow-shadowOne">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="xs:text-4xl md:text-6xl font-bold text-gray-700 dark:text-white font-titleFont">
          Hi, I'm{" "}
          <span className="xs:pt-3 md:pt-0 xs:block md:inline xs:text-4xl md:text-6xl px-1 w-fit h-fit font-nameFont gradient-animation">
            Ashwin Pulipati
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-700 dark:text-white leading-[1.2] font-titleFont">
          a <span>{text}</span>
          <span className="ml-1 animate-blink bg-gradient-to-b from-[#58eba6] via-[#1fc8de] to-[#0584d9] bg-clip-text text-transparent pipeline">
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
        <div className="flex items-center gap-4 xs:flex-wrap sm:flex-nowrap">
          {/* View Projects */}
          <div className="group hover:cursor-pointer" onClick={() => scrollToSection("features")}>
            <div className="flex items-center gap-2 w-fit h-fit bg-boxBgWhite dark:bg-boxBg bg-orange-100 text-amber-800 dark:bg-orange-800 dark:text-amber-100 shadow-shadowTwo dark:shadow-shadowOne group-hover:shadow-none font-medium px-4 py-3 rounded-full text-sm sm:text-base view-projects-button ripple-container" onMouseDown={createRipple}>
              <AnimatedText text="View Projects" />
              <span className="animate-on-hover">
                <HiArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* View Resume */}
          <div className="group hover:cursor-pointer" onClick={() => scrollToSection("resume")}>
            <div className="flex items-center gap-2 w-fit h-fit bg-boxBgWhite dark:bg-boxBg bg-cyan-100 font-medium dark:bg-cyan-800 dark:text-blue-100 shadow-shadowTwo dark:shadow-shadowOne group-hover:shadow-none px-4 py-3 rounded-full text-blue-800 text-sm sm:text-base view-resume-button ripple-container" onMouseDown={createRipple}>
              <AnimatedText text="View Resume" />
              <span className="animate-on-hover">
                <HiArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        <Media />
      </div>
    </div>
  );
};

export default React.memo(LeftBanner);
