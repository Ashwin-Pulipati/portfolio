import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmblaCarousel from "../../projects/components/embla-carousel-lazy/EmblaCarousel";
import { createRipple } from "../../layouts/RippleEffect";
import Searchbar from "../../navbar/components/Searchbar";
import HighlightTextProjectDetail from "../../projects/components/HighlightTextProjectDetail";
import ProjectDetailInterest from "../../projects/components/ProjectDetailInterest";
import ProjectSidebarNavigation from "../../projects/components/ProjectSidebarNavigation";
import BackgroundVideo from "../../../assets/images/DB Images/FL/background.gif";
import Page1 from "../../../assets/images/DB Images/FL/Page-1.png";
import Page2 from "../../../assets/images/DB Images/FL/Page-2.png";
import Page3 from "../../../assets/images/DB Images/FL/Page-3.png";
import Page4 from "../../../assets/images/DB Images/FL/Page-4.png";
import Page5 from "../../../assets/images/DB Images/FL/Page-5.png";
import { CopyBlock, dracula } from "react-code-blocks";
import FLProjectDetailData from "./FacialLandmarkingDetailData";
import EmblaCarouselModal from "../../projects/components/embla-carousel-lazy/EmblaCarouselModal";

const FacialLandmarkingDetail = ({
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

  const SLIDES = [Page1, Page2, Page3, Page4, Page5];
  const emblaOptions = useMemo(() => ({ loop: true, align: "start" }), []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetPosition =
        section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const renderSection = (id, title, content) => (
    <div id={id} className="mt-16">
      <h2 className="text-2xl font-titleFont text-black dark:text-white mb-4">
        <HighlightTextProjectDetail text={title} highlight={searchQuery} />
      </h2>
      {content}
    </div>
  );

  const codeSnippetChallenge1 = `async function loadModels() {
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./models'),
    faceapi.nets.ageGenderNet.loadFromUri('./models'),
  ]);
  startBtn.disabled = false;
  statusEl.textContent = 'Models loaded.';
}`;

  const codeSnippetChallenge2 = `async function detectLoop() {
  const detections = await faceapi
    .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceExpressions()
    .withAgeAndGender();

  const resized = faceapi.resizeResults(detections, {
    width: video.videoWidth,
    height: video.videoHeight,
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  faceapi.draw.drawDetections(canvas, resized);
  faceapi.draw.drawFaceLandmarks(canvas, resized);
  faceapi.draw.drawFaceExpressions(canvas, resized);

  requestAnimationFrame(detectLoop);
}`;
  
  const [startIndex, setStartIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = useCallback((idx) => {
        setStartIndex(idx);
        setIsModalOpen(true);
      }, []);

  return (
    <div className="w-full min-h-screen bg-bodyColorWhite dark:bg-bodyColor text-lightText relative">
      {isModalOpen && (
        <EmblaCarouselModal
          slides={SLIDES}
          startIndex={startIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div className="flex justify-center items-center lg:hidden mt-0 pt-8 md:px-12 lg:px-0">
        <Searchbar onSearch={onSearch} searchQuery={searchQuery} />
      </div>
      <ProjectSidebarNavigation onSectionClick={scrollToSection} />
      <div className="px-4 md:px-20 lg:px-28 xl:px-36 flex flex-col items-center justify-start z-0 py-20">
        <div className="relative w-full max-w-7xl">
          <div className="absolute inset-0 h-72 md:h-96 overflow-hidden z-10 rounded-tr-xl rounded-tl-xl">
            <img
              src={BackgroundVideo}
              alt="Background Video"
              className="absolute inset-0 w-full h-full object-cover fade-mask blur-sm"
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
                <EmblaCarousel
                  slides={SLIDES}
                  options={emblaOptions}
                  onExpand={openModal}
                />
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
                        text={FLProjectDetailData.timeline}
                        highlight={searchQuery}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
                    <span className="text-md font-titleFont font-medium flex-shrink-0 text-gray-600 dark:text-gray-300">
                      Stack:
                    </span>
                    <div className="flex gap-4 flex-wrap">
                      {FLProjectDetailData.stack.map((tech, idx) => (
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

            {/* Challenges Section */}
            <div id="challenges-section" className="mt-16">
              <h2 className="text-2xl font-titleFont text-black dark:text-white mb-4">
                <HighlightTextProjectDetail
                  text="Challenges and Solutions"
                  highlight={searchQuery}
                />
              </h2>
              <ul className="list-disc ml-6 font-bodyFont">
                <li className="linkDot">
                  <div className="flex flex-col gap-3">
                    <div className="text-gray-700 dark:text-gray-400">
                      <strong>Challenge:</strong>{" "}
                      <HighlightTextProjectDetail
                        text="Slow model loading causing a laggy user experience"
                        highlight={searchQuery}
                      />
                    </div>

                    <div className="text-gray-700 dark:text-gray-400">
                      <strong>Solution:</strong>{" "}
                      <HighlightTextProjectDetail
                        text="Used Promise.all() to load all Face-API models in parallel and only enabled UI controls after all models were fully initialized. This improved load times and eliminated UI lock-ups."
                        highlight={searchQuery}
                      />
                    </div>

                    <CopyBlock
                      text={codeSnippetChallenge1}
                      language="javascript"
                      theme={dracula}
                      showLineNumbers={true}
                      wrapLines={true}
                      codeBlock
                    />
                  </div>
                </li>
                <li className="linkDot">
                  <div className="flex flex-col gap-3">
                    <div className="text-gray-700 dark:text-gray-400">
                      <strong>Challenge:</strong>{" "}
                      <HighlightTextProjectDetail
                        text="Flickering canvas due to improper rendering cycle"
                        highlight={searchQuery}
                      />
                    </div>

                    <div className="text-gray-700 dark:text-gray-400">
                      <strong>Solution:</strong>{" "}
                      <HighlightTextProjectDetail
                        text="Cleared the canvas with clearRect before redrawing every frame and wrapped detection inside requestAnimationFrame() for smooth rendering."
                        highlight={searchQuery}
                      />
                    </div>

                    <CopyBlock
                      text={codeSnippetChallenge2}
                      language="javascript"
                      theme={dracula}
                      showLineNumbers={true}
                      wrapLines={true}
                      codeBlock
                    />
                  </div>
                </li>
              </ul>
            </div>

            {/* Methodology Section */}
            {renderSection(
              "methodology-section",
              "Methodology and Process",
              <ul className="list-disc ml-6 font-bodyFont">
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Used Face-API.js to load and run ML models directly in the browser"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Built a dual-layer video/canvas system to overlay face data in real-time"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Controlled video stream with standard MediaStream APIs (start/stop, permission handling)"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Used async/await patterns to manage model load order and control flow"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Applied modular JS structure to keep logic for detection, drawing, and UI control clean and testable"
                    highlight={searchQuery}
                  />
                </li>
              </ul>
            )}

            {/* Results Section */}
            {renderSection(
              "results-section",
              "Results and Impact",
              <ul className="list-disc ml-6 font-bodyFont">
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Achieved smooth inference at ~24 FPS using the lightweight TinyFaceDetector"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="UI waits reduced to ~2s on average load by parallelizing models"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Helped me understand how to run ML models in-browser without a server"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Designed for zero dependency beyond Face-API, keeping bundle size small and local"
                    highlight={searchQuery}
                  />
                </li>
              </ul>
            )}

            {/* Learnings Section */}
            {renderSection(
              "learnings-section",
              "Learnings and Reflections",
              <ul className="list-disc ml-6 font-bodyFont">
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Learned how to handle real-time rendering loops in sync with ML inferences"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Discovered how model weights and inference types impact performance (e.g. using TinyFaceDetector vs SSD Mobilenet)"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Got hands-on experience with async loading patterns and race condition debugging"
                    highlight={searchQuery}
                  />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FacialLandmarkingDetail);
