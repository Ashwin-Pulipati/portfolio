import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import UnifiedArrow from "../layouts/UnifiedArrow";
import ProjectDetailInterest from "./components/ProjectDetailInterest";
import projectDetailData from "./constants/ProjectDetailData";

// Sample Images for Carousel
import Image1 from "../../assets/images/Webp/projectOne.webp";
import Image3 from "../../assets/images/Webp/projectThree.webp";
import Image2 from "../../assets/images/Webp/projectTwo.webp";
import HighlightTextProjectDetail from "./components/HighlightTextProjectDetail";
import Searchbar from "../navbar/components/Searchbar";
import "./Project.css";
import ProjectSidebarNavigation from "./constants/ProjectSidebarNavigation";
import { useDarkMode } from "../layouts/DarkMode";

const ProjectDetail = ({
  id,
  title,
  des,
  github,
  website,
  demo,
  onNext,
  onPrev,
  nextDisabled,
  prevDisabled,
  searchQuery,
  onSearch, // receive the search query prop
}) => {
  const navigate = useNavigate();
  const [dotActive, setDotActive] = useState(0);

  const isDarkMode = useDarkMode(); // Now isDarkMode is defined

  useEffect(() => {
    if (searchQuery) {
      // Delay scrolling to let the new highlighted elements render
      setTimeout(() => {
        const firstHighlight = document.querySelector(".highlighted");
        if (firstHighlight) {
          firstHighlight.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    }
  }, [searchQuery]);

  // Memoized slider settings
  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      loop: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: (
        <UnifiedArrow
          variant={"projectDetail"}
          direction="next"
          onClick={onNext}
          disabled={nextDisabled}
        />
      ),
      prevArrow: (
        <UnifiedArrow
          variant={"projectDetail"}
          direction="prev"
          onClick={onPrev}
          disabled={prevDisabled}
        />
      ),
      beforeChange: (prev, next) => setDotActive(next),
      appendDots: (dots) => (
        <div style={{ borderRadius: "10px", padding: "10px" }}>
          <ul
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {dots}
          </ul>
        </div>
      ),
      customPaging: (i) => (
        <div className="relative flex items-center justify-center group">
          {/* Gradient Border Effect (Always Exists, Only Visible on Hover) */}
          <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[17px] h-[17px] rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-30 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>

          {/* Main Dot */}
          <div
            style={{
              width: "10px",
              height: "10px",
              background: isDarkMode
                ? i === dotActive
                  ? "#35BDFD"
                  : "#23272b"
                : i === dotActive
                ? "#1D4ED8"
                : "lightGray",
              borderRadius: "50%",
              cursor: "pointer",
              marginTop: "15px",
              boxShadow:
                "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
              zIndex: "1",
            }}
          />
        </div>
      ),
    }),
    [dotActive, nextDisabled, onNext, onPrev, prevDisabled, isDarkMode]
  );

  // Scroll handler that takes an element id and scrolls it into view smoothly.
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100; // Adjust this value as needed
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <div className="w-full min-h-screen bg-bodyColorWhite dark:bg-bodyColor text-lightText relative">
      <div className="flex justify-center items-center lg:hidden mt-0 pt-8 md:px-12 lg:px-0">
        <Searchbar onSearch={onSearch} searchQuery={searchQuery} />
      </div>

      <ProjectSidebarNavigation onSectionClick={scrollToSection} />

      {/* Project Detail Card (Main Content) */}
      <div className="px-4 md:px-20 lg:px-28 xl:px-36 flex flex-col items-center justify-start z-0 py-20">
        {/* Container to center the card and position content */}
        <div className="relative w-full max-w-7xl">
          <div className="absolute inset-0 h-72 md:h-96 overflow-hidden z-10 rounded-tr-xl rounded-tl-xl">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover fade-mask"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          </div>
          {/* Project Detail Card */}
          <div
            className="bg-gradient-to-br from-[#dee3e7] to-white dark:bg-gradient-to-tl dark:from-[#262a2e] 
          dark:to-[#1f2022] rounded-2xl shadow-shadowTwo dark:shadow-shadowOne py-14 px-6 md:px-14 relative"
          >
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="absolute z-10 top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 group shadow-shadowTwo dark:shadow-shadowOne"
            >
              <div className="absolute -inset-0.5 p-0.5 rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full bg-bgBoxWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] rounded-full flex items-center justify-center">
                <span className="relative block w-4 h-4 md:w-5 md:h-5 text-blue-700 dark:text-designColor">
                  <span className="absolute inset-0 top-1.5 md:top-2 right-1 bg-current rotate-45 w-full h-[4px] rounded-full" />
                  <span className="absolute inset-0 top-1.5 md:top-2 right-1 bg-current -rotate-45 w-full h-[4px] rounded-full" />
                </span>
              </div>
            </button>

            {/* Project Overview Section */}
            <div
              id="overview-section"
              className="flex flex-col-reverse xl:flex-row-reverse items-start gap-14 border-b border-b-gray-400 
              dark:border-b-black pb-20 mt-8"
            >
              {/* Slider Container */}
              <div className="w-full max-w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[500px] mx-auto rounded-xl z-20">
                <Slider {...sliderSettings}>
                  {[Image1, Image2, Image3].map((image, index) => (
                    <div
                      key={index}
                      className="w-full xs:h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] xl:h-[400px] flex justify-center 
                      items-center rounded-xl"
                    >
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-6  z-20">
                <div className="flex flex-col gap-3">
                  <h1 className="font-titleFont text-3xl font-bold text-black dark:text-white">
                    <HighlightTextProjectDetail
                      text={title}
                      highlight={searchQuery}
                    />
                  </h1>
                  <p className="text-gray-700 dark:text-gray-200 font-bodyFont">
                    <HighlightTextProjectDetail
                      text={des}
                      highlight={searchQuery}
                    />
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <span className="text-md font-titleFont font-medium shrink-0 text-gray-600 dark:text-gray-300">
                      Timeline:
                    </span>
                    <span className="text-md font-titleFont font-medium shrink-0 text-gray-700 dark:text-gray-300">
                      <HighlightTextProjectDetail
                        text={projectDetailData.timeline}
                        highlight={searchQuery}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
                    <span className="text-md font-titleFont font-medium flex-shrink-0 text-gray-600 dark:text-gray-300">
                      Stack:
                    </span>
                    <div className="flex gap-4 flex-wrap">
                      {projectDetailData.stack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center rounded"
                        >
                          <span className="text-xs text-white">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ProjectDetailInterest
                    projectId={id}
                    github={github}
                    website={website}
                    demo={demo}
                  />
                </div>
              </div>
            </div>

            {/* Challenges and Solutions */}
            <div id="challenges-section" className="mt-14">
              <h2 className="text-2xl font-titleFont text-black dark:text-white mb-4">
                <HighlightTextProjectDetail
                  text="Challenges and Solutions"
                  highlight={searchQuery}
                />
              </h2>
              <ul className="list-disc ml-6 font-bodyFont">
                {projectDetailData.challengesAndSolutions.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-blue-700 dark:text-designColor mb-2"
                  >
                    <div className="text-gray-700 dark:text-gray-400">
                      <strong>Challenge:</strong>{" "}
                      <HighlightTextProjectDetail
                        text={item.challenge}
                        highlight={searchQuery}
                      />
                      <br />
                      <strong>Solution:</strong>{" "}
                      <HighlightTextProjectDetail
                        text={item.solution}
                        highlight={searchQuery}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology and Process */}
            <div id="methodology-section" className="mt-16">
              <h2 className="text-2xl font-titleFont text-black dark:text-white mb-4">
                <HighlightTextProjectDetail
                  text="Methodology and Process"
                  highlight={searchQuery}
                />
              </h2>
              <ul className="list-disc ml-6 font-bodyFont">
                {projectDetailData.methodologyAndProcess.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-blue-700 dark:text-designColor mb-2"
                  >
                    <div className="text-gray-700 dark:text-gray-400">
                      <HighlightTextProjectDetail
                        text={point}
                        highlight={searchQuery}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results and Impact */}
            <div id="results-section" className="mt-16">
              <h2 className="text-2xl font-titleFont text-black dark:text-white mb-4">
                <HighlightTextProjectDetail
                  text="Results and Impact"
                  highlight={searchQuery}
                />
              </h2>
              <ul className="list-disc ml-6 font-bodyFont">
                {projectDetailData.resultsAndImpact.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-blue-700 dark:text-designColor mb-2"
                  >
                    <div className="text-gray-700 dark:text-gray-400">
                      <HighlightTextProjectDetail
                        text={point}
                        highlight={searchQuery}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings and Reflections */}
            <div id="learnings-section" className="mt-16">
              <h2 className="text-2xl font-titleFont text-black dark:text-white mb-4">
                <HighlightTextProjectDetail
                  text="Learnings and Reflections"
                  highlight={searchQuery}
                />
              </h2>
              <ul className="list-disc ml-6 font-bodyFont">
                {projectDetailData.learningsAndReflections.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-blue-700 dark:text-designColor mb-2"
                  >
                    <div className="text-gray-700 dark:text-gray-400">
                      <HighlightTextProjectDetail
                        text={point}
                        highlight={searchQuery}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectDetail);
