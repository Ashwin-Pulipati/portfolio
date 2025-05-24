import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import projectDetailData from "./constants/ProjectDetailData";
import EmblaCarousel from "./components/embla-carousel-lazy/EmblaCarousel";
import Image1 from "../../assets/images/Webp/projectOne.webp";
import Image2 from "../../assets/images/Webp/projectTwo.webp";
import Image3 from "../../assets/images/Webp/projectThree.webp";
import { createRipple } from "../layouts/RippleEffect";
import Searchbar from "../navbar/components/Searchbar";
import HighlightTextProjectDetail from "./components/HighlightTextProjectDetail";
import ProjectDetailInterest from "./components/ProjectDetailInterest";
import ProjectSidebarNavigation from "./components/ProjectSidebarNavigation";

const ProjectDetail = ({
  id,
  title,
  des,
  github,
  website,
  demo,
  searchQuery,
  onSearch,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      const timeoutId = setTimeout(() => {
        const firstHighlight = document.querySelector(".highlighted");
        firstHighlight?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [searchQuery]);

  const SLIDES = [Image1, Image2, Image3];
  const emblaOptions = useMemo(() => ({ loop: true, align: "start" }), []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetPosition =
        section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const renderSection = (id, title, data) => (
    <div id={id} className="mt-16">
      <h2 className="text-2xl font-titleFont text-black dark:text-white mb-4">
        <HighlightTextProjectDetail text={title} highlight={searchQuery} />
      </h2>
      <ul className="list-disc ml-6 font-bodyFont">
        {data.map((point, idx) => (
          <li key={idx} className="arrowIcon mb-2">
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
  );

  return (
    <div className="w-full min-h-screen bg-bodyColorWhite dark:bg-bodyColor text-lightText relative">
      <div className="flex justify-center items-center lg:hidden mt-0 pt-8 md:px-12 lg:px-0">
        <Searchbar onSearch={onSearch} searchQuery={searchQuery} />
      </div>
      <ProjectSidebarNavigation onSectionClick={scrollToSection} />
      <div className="px-4 md:px-20 lg:px-28 xl:px-36 flex flex-col items-center justify-start z-0 py-20">
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
          <div className="cardView rounded-2xl py-14 px-6 md:px-14 relative">
            <button
              onClick={() => navigate(-1)}
              className="absolute z-10 top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 w-12 h-12 
              rounded-full flex items-center justify-center transition-all duration-300 group elevatedShadow"
              aria-label="Back"
            >
              <div
                className="absolute -inset-0.5 p-0.5 rounded-full appGradient opacity-0 group-hover:opacity-100 
              group-focus:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                className="relative w-full h-full boxBgGradient cardGradient rounded-full flex items-center justify-center 
                ripple-container"
                onMouseDown={createRipple}
              >
                <span className="relative block w-5 h-4 md:h-5 arrowIcon">
                  <span className="absolute inset-0 top-1.5 md:top-2 right-1 bg-current rotate-45 w-full h-[4px] rounded-full" />
                  <span className="absolute inset-0 top-1.5 md:top-2 right-1 bg-current -rotate-45 w-full h-[4px] rounded-full" />
                </span>
              </div>
            </button>
            <div
              id="overview-section"
              className="flex flex-col-reverse xl:flex-row-reverse justify-between items-start gap-14 border-b border-b-gray-400 dark:border-b-black pb-20 mt-8"
            >
              <div className="w-full max-w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[500px] rounded-xl z-20">
                <EmblaCarousel slides={SLIDES} options={emblaOptions} />
              </div>
              <div className="w-full h-full flex flex-col gap-6 z-20">
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
            {renderSection(
              "challenges-section",
              "Challenges and Solutions",
              projectDetailData.challengesAndSolutions.map(
                (item) =>
                  `Challenge: ${item.challenge}\nSolution: ${item.solution}`
              )
            )}
            {renderSection(
              "methodology-section",
              "Methodology and Process",
              projectDetailData.methodologyAndProcess
            )}
            {renderSection(
              "results-section",
              "Results and Impact",
              projectDetailData.resultsAndImpact
            )}
            {renderSection(
              "learnings-section",
              "Learnings and Reflections",
              projectDetailData.learningsAndReflections
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectDetail);
