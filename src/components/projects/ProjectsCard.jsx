import React, { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { slugify } from "../layouts/Utils";
import ProjectsCardInterest from "./components/ProjectsCardInterest";
import ViewCardImage from "./components/ViewCardImage";
import "./Project.css"
import {gradients} from "./constants/ProjectsGradients.js";

const getProjectAgeText = (createdAt) => {
  if (!createdAt) return null;

  const projectDate = new Date(createdAt);
  const currentDate = new Date();
  const diffTime = Math.floor((currentDate - projectDate) / 1000);

  if (diffTime < 60) return `${diffTime} sec${diffTime > 1 ? "s" : ""} ago`;
  if (diffTime < 3600)
    return `${Math.floor(diffTime / 60)} min${
      Math.floor(diffTime / 60) > 1 ? "s" : ""
    } ago`;
  if (diffTime < 86400)
    return `${Math.floor(diffTime / 3600)} hr${
      Math.floor(diffTime / 3600) > 1 ? "s" : ""
    } ago`;

  const days = Math.floor(diffTime / 86400);
  if (days % 7 === 0) {
    const weeks = days / 7;
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }

  return `${days} day${days > 1 ? "s" : ""} ago`;
};

const useProjectAgeText = (createdAt) => {
  const [projectAgeText, setProjectAgeText] = useState(
    getProjectAgeText(createdAt)
  );

  useEffect(() => {
    let timerId;

    const tick = () => {
      setProjectAgeText(getProjectAgeText(createdAt));
      const projectDate = new Date(createdAt);
      const diffSeconds = (Date.now() - projectDate.getTime()) / 1000;

      let nextDelay = 1000;
      if (diffSeconds >= 86400)
        nextDelay = 86400000;
      else if (diffSeconds >= 3600)
        nextDelay = 3600000;
      else if (diffSeconds >= 60) nextDelay = 60000;

      timerId = setTimeout(tick, nextDelay);
    };

    tick();
    return () => clearTimeout(timerId);
  }, [createdAt]);

  return projectAgeText;
};

const ProjectsCard = ({
  id,
  title,
  des,
  src,
  github,
  website,
  category,
  searchQuery,
  createdAt,
  gradientIndex,
}) => {
  const slug = useMemo(() => slugify(title), [title]);
  const categorySlug = useMemo(() => slugify(category), [category]);
  const [isHovered, setIsHovered] = useState(false);

  const isDarkMode = document.documentElement.classList.contains("dark");

  const currentGradient = gradients[gradientIndex % gradients.length];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={index}
          className="font-medium border border-lime-800 bg-lime-100 text-blue-700 dark:border-lime-100 dark:bg-lime-800 dark:text-white px-1 rounded pb-0.5"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const highlightedTitle = useMemo(
    () => highlightText(title, searchQuery),
    [title, searchQuery]
  );
  const highlightedDescription = useMemo(
    () => highlightText(des, searchQuery),
    [des, searchQuery]
  );

  const projectAgeText = useProjectAgeText(createdAt);

  return (
    <div
      className="group relative w-full p-4 lg:p-8 sm:p-7 xs:p-6 rounded-2xl flex flex-col transition-colors 
      duration-100 shadow-shadowTwo dark:shadow-shadowOne bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl 
      from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isHovered
          ? {
              background: isDarkMode
                ? currentGradient.dark
                : currentGradient.light,
            }
          : {}
      }
    >
      {projectAgeText && (
        <div
          className="w-fit h-fit absolute z-10 xs:top-7 sm:top-8 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 flex justify-center items-center rounded-full p-[2px]"
        >
          <div
            className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bodyColorWhite dark:bg-boxBg 
          dark:bg-gradient-to-tl bg-gradient-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022]
          transition-colors duration-100"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 dark:bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-cyan-500 dark:bg-cyan-300"></span>
            </span>
            <span className="text-black dark:text-white text-xs font-bodyFont">
              {projectAgeText}
            </span>
          </div>
        </div>
      )}

      <ViewCardImage src={src} />

      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="flex items-center justify-end gap-1">
          <ProjectsCardInterest
            projectId={id}
            github={github}
            website={website}
            disableShadow={isHovered}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 group">
        <Link to={`/features/${categorySlug}/projects/${slug}`}>
          <div className="flex items-center gap-2">
            <h1 className="font-medium capitalize tracking-wide w-fit h-fit bg-gradient-to-r from-[#46c28f] via-[#1aaabe] to-[#0584d9] dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] bg-clip-text text-transparent inline-block group-hover:text-black dark:group-hover:text-white">
              {highlightedTitle}
            </h1>
            <FiArrowUpRight className="text-blue-700 dark:text-designColor w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform duration-700 ease-in-out group-hover:translate-x-[5%] group-hover:translate-y-[-5%] group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out" />
          </div>
        </Link>
        <div className="relative flex flex-col gap-2">
          <p className="text-sm capitalize tracking-wide text-gray-700 dark:text-lightText text-justify group-hover:text-black dark:group-hover:text-gray-100 duration-300 group-hover:cursor-pointer">
            {highlightedDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectsCard);
