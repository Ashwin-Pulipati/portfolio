import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmblaCarousel from "../../projects/components/embla-carousel-lazy/EmblaCarousel";
import { createRipple } from "../../layouts/RippleEffect";
import Searchbar from "../../navbar/components/Searchbar";
import HighlightTextProjectDetail from "../../projects/components/HighlightTextProjectDetail";
import ProjectDetailInterest from "../../projects/components/ProjectDetailInterest";
import ProjectSidebarNavigation from "../../projects/components/ProjectSidebarNavigation";
import BackgroundVideo from "../../../assets/images/DB Images/TMIM/background.gif";
import Page1 from "../../../assets/images/DB Images/TMIM/Page-1.png";
import Page2 from "../../../assets/images/DB Images/TMIM/Page-2.png";
import Page3 from "../../../assets/images/DB Images/TMIM/Page-3.png";
import Page4 from "../../../assets/images/DB Images/TMIM/Page-4.png";
import Page5 from "../../../assets/images/DB Images/TMIM/Page-5.png";
import { CopyBlock, dracula } from "react-code-blocks";
import TeachableMachineImageModelDetailData from "./TeachableMachineImageModelDetailData";
import EmblaCarouselModal from "../../projects/components/embla-carousel-lazy/EmblaCarouselModal";

const TeachableMachineImageModelDetail = ({
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

  const codeSnippetChallenge1 = `// Asynchronously load model and webcam
async function init() {
  btn.disabled = true;
  loading.style.display = "block";

  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  model = await tmImage.load(modelURL, metadataURL);

  webcam = new tmImage.Webcam(450, 450, true);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);
}`;

const codeSnippetChallenge2 = `// Live prediction display with custom styles
async function predict() {
  const prediction = await model.predict(webcam.canvas);
  prediction.forEach((p, i) => {
    const label = document.createElement("div");
    label.textContent = \`\${p.className}: \${p.probability.toFixed(2)}\`;
    Object.assign(label.style, labelStyles[i]);
    labelContainer.appendChild(label);
  });
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
                        text={TeachableMachineImageModelDetailData.timeline}
                        highlight={searchQuery}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
                    <span className="text-md font-titleFont font-medium flex-shrink-0 text-gray-600 dark:text-gray-300">
                      Stack:
                    </span>
                    <div className="flex gap-4 flex-wrap">
                      {TeachableMachineImageModelDetailData.stack.map(
                        (tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-center rounded"
                          >
                            <span className="text-xs text-white">{tech}</span>
                          </div>
                        )
                      )}
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
                        text="Model and webcam loading caused UI freeze on slower devices"
                        highlight={searchQuery}
                      />
                    </div>

                    <div className="text-gray-700 dark:text-gray-400">
                      <strong>Solution:</strong>{" "}
                      <HighlightTextProjectDetail
                        text="Deferred rendering and interaction until both the webcam and model were ready. I also disabled the button and displayed a loader to provide clear user feedback."
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
                        text="Displaying live predictions with consistent style"
                        highlight={searchQuery}
                      />
                    </div>

                    <div className="text-gray-700 dark:text-gray-400">
                      <strong>Solution:</strong>{" "}
                      <HighlightTextProjectDetail
                        text="Dynamically generated each prediction label using JavaScript and applied custom styles from a labelStyles array to ensure visual clarity and design consistency."
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
                    text="Used TensorFlow.js + Teachable Machine to load and run an image classification model."
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Integrated Webcam API to allow real-time prediction using the device camera."
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Implemented Dark/Light Mode using a simple class toggle (.dark) for user comfort."
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
                    text="Model and webcam both initialize in ~1.5 seconds on modern browsers."
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Predictions refresh at ~30 FPS without jank"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Users can visually test different objects under different lighting"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Model structure allows anyone to retrain and re-deploy with new classes easily."
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
                    text="Learned how image data is classified in real time using a pre-trained model from Teachable Machine."
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Gained hands-on experience with confidence scores and how they map to user-facing outcomes."
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Realized how the number of classes and training samples impacts accuracy, speed, and responsiveness in the browser"
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Saw how Teachable Machine exports models for use in pure JS, helping me understand client-side ML deployment."
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Understood how to optimize asynchronous flows in JS for better UX."
                    highlight={searchQuery}
                  />
                </li>
                <li className="linkDot text-gray-700 dark:text-gray-400">
                  <HighlightTextProjectDetail
                    text="Improved at managing live webcam feeds and DOM manipulation simultaneously."
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

export default React.memo(TeachableMachineImageModelDetail);
