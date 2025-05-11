import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Pagination from "../features/components/FeaturesPagination";
import Searchbar from "../navbar/components/Searchbar";
import { slugify } from "../layouts/Utils";
import {
  allProjectsList,
  projectsByCategory,
  projectsBySubcategory,
} from "./constants/ProjectDataUtils";
import { TiChevronRight, TiChevronRightOutline, TiThSmall } from "react-icons/ti";
import { FaReact, FaAngular, FaPython, FaJava } from "react-icons/fa";
import { SiPostgresql, SiOpenai } from "react-icons/si";   
import { MdCodeOff } from "react-icons/md";                  
import { AiOutlineCode } from "react-icons/ai"; 
import { useLocation } from "react-router-dom";            


const ProjectsCardLazy = lazy(() => import("./ProjectsCard"));

const SkeletonCard = () => (
  <div
    className="relative w-full p-4 lg:p-8 sm:p-7 xs:p-6 rounded-2xl flex flex-col bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e]
                  dark:to-[#1f2022] shadow-shadowTwo dark:shadow-shadowOne
                 transition-colors duration-300  animate-pulse"
  >
    <div className="absolute z-10 xs:top-7 sm:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-2 rounded-lg">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-75 blur"></div>
      <div
        className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e]
                  dark:to-[#1f2022] shadow-shadowTwo dark:shadow-shadowOne
                 transition-colors duration-300 "
      >
        <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full"></div>
        <span className="text-gray-400 text-xs">Loading...</span>
        <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full"></div>
      </div>
    </div>
    <div className="w-full h-48 bg-gray-400 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl"></div>
    <div className="w-full mt-5 flex flex-col gap-6">
      <div className="flex items-center justify-end gap-1">
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-4">
      <div className="h-6 bg-gray-400 w-3/4 rounded-full"></div>
      <div className="h-4 bg-gray-400 w-full rounded-full"></div>
      <div className="h-4 bg-gray-400 w-5/6 rounded-full"></div>
      <div className="h-4 bg-gray-400 w-2/3 rounded-full"></div>
    </div>
  </div>
);

const subIconMap = {
  "All Stacks": TiThSmall,
  "MERN Stack": FaReact,
  "MEAN Stack": FaAngular,
  "PERN Stack": SiPostgresql,
  Python: FaPython,
  Java: FaJava,

  "All AI": SiOpenai,
  "No-Code": MdCodeOff,
  "Code-Based": AiOutlineCode,
};


const subColorMap = {
  "All Stacks": "text-gray-500 dark:text-gray-400",
  "MERN Stack": "text-cyan-500 dark:text-cyan-400",
  "MEAN Stack": "text-red-500 dark:text-red-400",
  "PERN Stack": "text-blue-600 dark:text-blue-400",
  Python: "text-yellow-500 dark:text-yellow-400",
  Java: "text-orange-600 dark:text-orange-400",
  "All AI": "text-purple-500 dark:text-purple-400",
  "No-Code": "text-indigo-500 dark:text-indigo-400",
  "Code-Based": "text-teal-500 dark:text-teal-400",
};

const DelayedFallback = () => {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(true), 300);
    return () => clearTimeout(timeout);
  }, []);
  return showLoader ? <SkeletonCard /> : null;
};

const ITEMS_PER_PAGE = 9;

const ProjectsList = ({ searchQuery, onSearch }) => {
  const location = useLocation();
  const { category } = useParams();
  const navigate = useNavigate();
  const [isSubOpen, setSubOpen] = useState(false);
  const [hoveredSub, setHoveredSub] = useState(null);
  const defaultSubLabel = category === "ai" ? "All AI" : "All Stacks";
  const [selectedSub, setSelectedSub] = useState(defaultSubLabel);
  useEffect(() => {
    const subParam = new URLSearchParams(location.search).get("sub");

    const options =
      category === "full-stack-development"
        ? [
            "All Stacks",
            "MERN Stack",
            "MEAN Stack",
            "PERN Stack",
            "Python",
            "Java",
          ]
        : ["All AI", "No-Code", "Code-Based"];
    
    const match = subParam
      ? options.find((opt) => slugify(opt) === subParam)
      : null;

    setSelectedSub(match || defaultSubLabel);
  }, [location.search, category, defaultSubLabel]);

  const [currentPage, setCurrentPage] = useState(1);
  const [categoryProjects, setCategoryProjects] = useState(allProjectsList);

  useEffect(() => {
    const catSlug = slugify(category);
    const baseList = projectsByCategory[catSlug] || [];

    if (category === "full-stack-development" || category === "ai") {
      const subSlug = slugify(
        selectedSub === defaultSubLabel ? "" : selectedSub
      );
      if (subSlug && projectsBySubcategory[`${catSlug}||${subSlug}`]) {
        setCategoryProjects(projectsBySubcategory[`${catSlug}||${subSlug}`]);
      } else {
        setCategoryProjects(baseList);
      }
    } else {
      setCategoryProjects(baseList);
    }
  }, [category, selectedSub, defaultSubLabel]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = categoryProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.des.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  }, [currentPage, totalPages]);

  const handlePrev = useCallback(() => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  }, [currentPage]);

  const getSubCount = (cat, sub) => {
    const catSlug = slugify(cat);
    const defaultLabel = cat === "ai" ? "All AI" : "All Stacks";
    if (sub === defaultLabel) {
      return (projectsByCategory[catSlug] || []).length;
    }
    const subSlug = slugify(sub);
    const key = `${catSlug}||${subSlug}`;
    return (projectsBySubcategory[key] || []).length;
  };

  const subs = 
    category === "full-stack-development"
      ? [
          "All Stacks",
          "MERN Stack",
          "MEAN Stack",
          "PERN Stack",
          "Python",
          "Java",
        ]
      : ["All AI", "No-Code", "Code-Based"]

  return (
    <section className="w-full min-h-screen bg-bodyColorWhite dark:bg-bodyColor text-lightText sm:pt-4 lg:pt-0">
      <div className="flex justify-center items-center lg:hidden mt-0">
        <Searchbar onSearch={onSearch} />
      </div>
      {(category === "full-stack-development" || category === "ai") && (
        <div className="xs:hidden lg:flex flex justify-end items-center cursor-pointer mr-11">
          <div className="relative w-48 rounded-lg">
            <div
              className="relative p-0.5 rounded-lg flex items-center w-full hover:bg-gradient-to-r focus-within:bg-gradient-to-r 
          from-[#58eba6] via-[#1fc8de] to-[#0584d9] shadow-shadowTwo dark:shadow-shadowOne"
              tabIndex="0"
              onBlur={() => setSubOpen(false)}
            >
              <div
                className="group flex gap-2 justify-center items-center bg-gray-50 bg-gradient-br 
      from-[#dee3e7] to-white dark:bg-bodyColor dark:bg-gradient-to-tl dark:from-[#262a2e] dark:to-[#1f2022]
      transition-colors px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 text-sm lg:text-base w-full ripple-container"
                onClick={() => setSubOpen((p) => !p)}
              >
                {React.createElement(subIconMap[selectedSub] || FaReact, {
                  className: `w-5 h-5 ${subColorMap[selectedSub]}`,
                })}
                <span className="font-titleFont text-sm md:text-base mb-0.5 text-gray-700 dark:text-gray-300 xs:font-semibold lg:font-normal">
                  {selectedSub}
                </span>
                {isSubOpen ? (
                  <TiChevronRight className="w-5 h-5 text-blue-800 dark:text-blue-300 -rotate-90" />
                ) : (
                  <TiChevronRightOutline className="w-5 h-5 text-blue-800 dark:text-blue-300 rotate-90" />
                )}
              </div>

              {isSubOpen && (
                <ul className="absolute z-50 top-14 left-0 w-full bg-gray-50 dark:bg-bodyColor shadow-md rounded-md py-2 text-gray-700 dark:text-gray-300 transition-colors duration-100">
                  {subs.filter(s => s !== selectedSub).map((sub, i) => {
                    const Icon = subIconMap[sub] || FaReact;
                    const colorClass =
                      subColorMap[sub] || "text-gray-700 dark:text-gray-300";
                    return (
                      <li
                        key={i}
                        className={`
            flex items-center gap-2 px-4 py-2 text-sm md:text-base 
            font-semibold cursor-pointer ripple-container font-titleFont
            ${
              hoveredSub === sub
                ? category === "full-stack-development"
                  ? "bg-gradient-to-br from-[#96fbc4] to-[#f9f586] dark:from-[#226346] dark:to-[#6b5b1d] text-black"
                  : "bg-gradient-to-br from-[#a0f0f4] to-[#f9f586] dark:from-[#0d7998] dark:to-[#66009a] text-black"
                : "text-gray-700 dark:text-gray-300"
            }
          `}
                        onClick={() => {
                          const slugSub = slugify(sub);
                          navigate(`${location.pathname}?sub=${slugSub}`);
                          setSubOpen(false);
                        }}
                        onMouseEnter={() => setHoveredSub(sub)}
                        onMouseLeave={() => setHoveredSub(null)}
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <Icon className={`w-5 h-5 ${colorClass}`} />
                        {sub} ({getSubCount(category, sub)})
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 lg:gap-7 xs:px-4 md:px-6 lg:px-11 py-10">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <Suspense key={project.id} fallback={<DelayedFallback />}>
              <ProjectsCardLazy
                {...project}
                category={category}
                searchQuery={searchQuery}
                createdAt={project.createdAt}
                id={project.id}
                gradientIndex={index}
              />
            </Suspense>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center min-h-[calc(100vh-15rem)] text-2xl text-gray-500 dark:text-gray-500 font-titleFont">
            No results found
          </div>
        )}
      </div>
      {displayedProjects.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default React.memo(ProjectsList);
