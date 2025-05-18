import { motion } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import { useDarkMode } from "../../layouts/DarkMode";
import { slugify } from "../../layouts/Utils";
import { experienceGradientMap } from "../Resume.constants";
import TimelineDot from "./TimelineDot";

const ResumeCard = ({
  title,
  subTitle,
  result,
  des = "",
  country,
  showCountry,
  tags = [],
  points = [],
}) => {
  const isDarkMode = useDarkMode();
  const cardSlug = slugify(title);
  const gradients = experienceGradientMap[cardSlug];

  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef(null);


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


  return (
    <motion.div ref={cardRef} className="w-full group flex">
      <div className="hidden w-10 md:flex flex-col items-center gap-2.5">
        <TimelineDot reference={cardRef} timelineGradient={timelineGradient} />
        <div className="w-9 h-[6px] bgOpacity dark:bg-gray-400" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={computedHoverStyle}
        className="w-full rounded-lg px-8 sm:px-10 md:px-14 py-8 sm:py-10 md:py-14 flex flex-col justify-center gap-6 xl:gap-10 cardView group"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-4 xl:gap-0 xl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-black dark:group-hover:text-white duration-300 font-titleFont">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white duration-300 font-bodyFont">
              {subTitle}
            </p>
          </div>

          <div className="flex sm:justify-start gap-4">
            {[result, showCountry && country].filter(Boolean).map((text, i) => (
              <div
                key={i}
                className="w-fit h-fit px-4 py-2 cardView group group-hover:shadow-none rounded-lg flex justify-center items-center"
              >
                <span className="text-sm font-semibold arrowIcon font-bodyFont">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {des && (
          <p
            className="text-sm md:text-base font-medium text-gray-500
            dark:text-gray-400 group-hover:text-black
            dark:group-hover:text-gray-300 duration-300 break-all
            font-bodyFont"
          >
            {isExpanded ? des : `${des.slice(0, 230)}...`}
            {des.length > 230 && (
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="arrowIcon font-semibold hover:underline text-sm ml-1 tracking-[1px]"
                aria-label="Read More"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
        )}

        {points.length > 0 && (
          <ul className="list-disc ml-6 font-bodyFont group">
            {(isExpanded ? points : points.slice(0, 3)).map((point, idx) => (
              <li
                key={idx}
                className="arrowIcon0 mb-2 marker:text-blue-700 dark:marker:text-cyan-400"
              >
                <div className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-gray-300 duration-300 break-all font-bodyFont">
                  {point}
                </div>
              </li>
            ))}
          </ul>
        )}

        {points.length > 3 && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="arrowIcon text-sm text-center font-semibold font-bodyFont hover:underline mt-1 tracking-[1px]"
            aria-label="Toggle Bullet Points"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default React.memo(ResumeCard);
