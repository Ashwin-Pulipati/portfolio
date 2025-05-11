import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Media from "./Media";
import "../Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowRight } from "react-icons/hi2";
import { createRipple } from "../../layouts/RippleEffect";

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
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };


  return (
    <div
      className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full md:w-11/12 xl:gap-12 mt-6 md:mt-0"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-4 md:gap-5">
        {/* Container for heading and absolute fairy */}
        <h4
          className="tracking-[1px] mt-6 md:mt-0 text-sm sm:text-base font-normal font-titleFont w-fit h-fit 
          text-pink-800 bg-pink-100 dark:text-pink-100 dark:bg-pink-800 rounded-full p-2 pr-4 pl-4
          shadow-shadowTwo dark:shadow-shadowOne"
        >
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
      <div className="flex flex-col xs:gap-16 lg:gap-18 ">
        <div className="flex items-center gap-4 xs:flex-wrap sm:flex-nowrap">
          {/* "View Projects" Button */}
          <div
            className="group hover:cursor-pointer "
            onClick={() => scrollToSection("features")}
          >
            <div
              className="flex items-center gap-2 w-fit h-fit bg-boxBgWhite dark:bg-boxBg bg-orange-100 text-amber-800 
            dark:bg-orange-800 dark:text-amber-100 shadow-shadowTwo dark:shadow-shadowOne group-hover:shadow-none font-medium
            px-4 py-3 rounded-full text-sm sm:text-base view-projects-button ripple-container"
              onMouseDown={createRipple}
            >
              <div className="flex gap-1.5">
                <div className="flex">
                  <span className="animate-on-hover">V</span>
                  <span className="animate-on-hover">i</span>
                  <span className="animate-on-hover">e</span>
                  <span className="animate-on-hover">w</span>
                </div>
                <div className="flex">
                  <span className="animate-on-hover">P</span>
                  <span className="animate-on-hover">r</span>
                  <span className="animate-on-hover">o</span>
                  <span className="animate-on-hover">j</span>
                  <span className="animate-on-hover">e</span>
                  <span className="animate-on-hover">c</span>
                  <span className="animate-on-hover">t</span>
                  <span className="animate-on-hover">s</span>
                </div>
              </div>
              <span className="animate-on-hover">
                <HiArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* "View Resume" Button */}
          <div
            className="group hover:cursor-pointer"
            onClick={() => scrollToSection("resume")}
          >
            <div
              className="flex items-center gap-2 w-fit h-fit bg-boxBgWhite dark:bg-boxBg bg-cyan-100 font-medium 
            dark:bg-cyan-800 dark:text-blue-100 shadow-shadowTwo dark:shadow-shadowOne group-hover:shadow-none
            px-4 py-3 rounded-full text-blue-800 text-sm sm:text-base view-resume-button ripple-container"
              onMouseDown={createRipple}
            >
              <div className="flex gap-1.5">
                <div className="flex">
                  <span className="animate-on-hover">V</span>
                  <span className="animate-on-hover">i</span>
                  <span className="animate-on-hover">e</span>
                  <span className="animate-on-hover">w</span>
                </div>
                <div className="flex">
                  <span className="animate-on-hover">R</span>
                  <span className="animate-on-hover">e</span>
                  <span className="animate-on-hover">s</span>
                  <span className="animate-on-hover">u</span>
                  <span className="animate-on-hover">m</span>
                  <span className="animate-on-hover">e</span>
                </div>
              </div>
              <span className="animate-on-hover">
                <HiArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <Media />
        </div>
      </div>
    </div>
  );
};

export default React.memo(LeftBanner);
