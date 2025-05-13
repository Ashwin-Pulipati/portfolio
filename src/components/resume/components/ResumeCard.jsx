import React, { useMemo, useRef, useState } from "react";
import { slugify } from "../../layouts/Utils";
import { experienceGradientMap } from "../constants/ExperienceData";
import TimelineDot from "./TimelineDot";
import {
  FaRegSquarePlus,
  FaSquarePlus,
  FaRegSquareMinus,
  FaSquareMinus,
} from "react-icons/fa6";
import { useDarkMode } from "../../layouts/DarkMode";
import { motion} from "framer-motion";

const ResumeCard = ({
  title,
  subTitle,
  result,
  des = "",
  country,
  showCountry,
  tags = [],
}) => {
  const isDarkMode = useDarkMode();
  const cardSlug = slugify(title);
  const gradients = experienceGradientMap[cardSlug];

  const [isExpanded, setIsExpanded] = useState(false);
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef(null);

  const initialVisibleCount = 9;
  const visibleTags = tagsExpanded ? tags : tags.slice(0, initialVisibleCount);
  const hiddenCount = tags.length - initialVisibleCount;

  const timelineGradient = useMemo(
    () => (isDarkMode ? gradients?.dark : gradients?.light),
    [isDarkMode, gradients]
  );

  const computedHoverStyle = useMemo(
    () =>
      isHovered && gradients
        ? {
            backgroundImage: isDarkMode ? gradients.dark : gradients.light,
          }
        : {},
    [isHovered, gradients, isDarkMode]
  );

  const handleToggleTags = () => setTagsExpanded((prev) => !prev);

  return (
    <motion.div ref={cardRef} className="w-full h-1/3 group flex">
      {/* Timeline */}
      <div className="hidden w-10 md:flex flex-col items-center gap-2.5">
        <TimelineDot reference={cardRef} timelineGradient={timelineGradient} />
        <div className="w-9 h-[6px] bgOpacity dark:bg-gray-400" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={computedHoverStyle}
        className="w-full bg-boxBgwhite dark:bg-boxBg rounded-lg lg:py-14 lg:px-14 md:py-14 md:px-14 sm:py-10 sm:px-10 xs:px-8 xs:py-8 flex flex-col justify-center gap-6 xl:gap-10 bg-gradient-to-br from-[#dee3e7] to-white shadow-shadowTwo dark:shadow-shadowOne dark:bg-gradient-to-tl dark:from-[#262a2e] dark:to-[#1f2022] group"
      >
        {/* Header */}
        <div className="flex flex-col xs:flex-col xl:flex-row lg:flex-row justify-between gap-4 xl:gap-0 xl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-black dark:group-hover:text-white duration-300 font-titleFont">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white duration-300 font-bodyFont">
              {subTitle}
            </p>
          </div>

          {/* Result and Country */}
          <div className="flex sm:justify-start gap-4">
            {[result, showCountry && country].filter(Boolean).map((text, i) => (
              <div
                key={i}
                className="w-fit h-fit px-4 py-2 bg-gradient-to-br from-[#dee3e7] to-white shadow-shadowTwo bg-boxBdWhite dark:bg-boxBg dark:bg-gradient-to-tl dark:from-[#262a2e] dark:to-[#1f2022] group group-hover:shadow-none rounded-lg flex justify-center items-center dark:shadow-shadowOne"
              >
                <span className="text-sm font-medium text-blue-700 dark:text-designColor font-bodyFont">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        {des && (
          <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-gray-300 duration-300 break-all font-bodyFont">
            {isExpanded ? des : `${des.slice(0, 230)}...`}
            {des.length > 230 && (
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="text-blue-700 dark:text-blue-400 hover:underline text-sm ml-1"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex items-center gap-4 flex-wrap">
            {visibleTags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-400/15 dark:bg-opacity-60 border-blue-700 dark:border-blue-400 text-sm font-bodyFont rounded-full px-2.5 py-1 border-2 cursor-pointer transition-all duration-300 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
              >
                {tag}
              </span>
            ))}
            {hiddenCount > 0 && (
              <button
                onClick={handleToggleTags}
                className="bg-blue-100 dark:bg-blue-400/15 flex items-center gap-2 text-sm font-medium rounded-full px-2.5 py-1 border-2 cursor-pointer transition-all duration-300 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 dark:group-hover:text-white"
              >
                <span className="relative w-4 h-4">
                  {tagsExpanded ? (
                    <>
                      <FaRegSquareMinus className="absolute inset-0 w-4 h-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
                      <FaSquareMinus className="absolute inset-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </>
                  ) : (
                    <>
                      <FaRegSquarePlus className="absolute inset-0 w-4 h-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
                      <FaSquarePlus className="absolute inset-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </>
                  )}
                </span>
                {tagsExpanded ? "Show Less" : `${hiddenCount} More`}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default React.memo(ResumeCard);
