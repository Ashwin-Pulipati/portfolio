import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AiOutlineCode } from "react-icons/ai";
import { FaAngular, FaJava, FaPython, FaReact } from "react-icons/fa";
import { MdCodeOff } from "react-icons/md";
import { SiOpenai, SiPostgresql } from "react-icons/si";
import {
  TiChevronRight,
  TiChevronRightOutline,
  TiThSmall,
} from "react-icons/ti";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pagination from "./components/Pagination";
import { createRipple } from "../layouts/RippleEffect";
import { slugify } from "../layouts/Utils";
import Searchbar from "../navbar/components/Searchbar";
import {
  allProjectsList,
  projectsByCategory,
  projectsBySubcategory,
} from "./Projects.Utils";
import { darkModeDropdownItemGradientMap, lightModeDropdownItemGradientMap } from "../navbar/Navbar.constants";
import { useDarkMode } from "../layouts/DarkMode";
import OctaCat from "../../assets/images/Other Formats/octacat.gif";
import ManufacturerOctaCat from "../../assets/images/Other Formats/manufacturetocat.png";

const ProjectsCardLazy = lazy(() => import("./ProjectsCard"));

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="bg-gray-400 rounded-xl h-48 sm:h-56 md:h-64 lg:h-72 mb-4"></div>
    <div className="flex items-center justify-end gap-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-10 h-10 bg-gray-400 rounded-full"></div>
      ))}
    </div>
    <div className="flex flex-col gap-2 mt-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-400 rounded-full"
          style={{ width: `${((4 - i) / 4) * 100}%` }}
        ></div>
      ))}
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
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryProjects, setCategoryProjects] = useState(allProjectsList);

  const subs = useMemo(
    () =>
      category === "full-stack-development"
        ? [
            "All Stacks",
            "MERN Stack",
            "MEAN Stack",
            "PERN Stack",
            "Python",
            "Java",
          ]
        : ["All AI", "No-Code", "Code-Based"],
    [category]
  );

  useEffect(() => {
    const subParam = new URLSearchParams(location.search).get("sub");
    const match = subParam
      ? subs.find((opt) => slugify(opt) === subParam)
      : null;
    setSelectedSub(match || defaultSubLabel);
  }, [location.search, subs, defaultSubLabel]);

  useEffect(() => {
    const catSlug = slugify(category);
    const baseList = projectsByCategory[catSlug] || [];
    const subSlug = slugify(selectedSub === defaultSubLabel ? "" : selectedSub);
    const key = `${catSlug}||${subSlug}`;
    const sortedList = [
      ...(category === "full-stack-development" ||
      (category === "ai" && subSlug)
        ? projectsBySubcategory[key] || baseList
        : baseList),
    ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setCategoryProjects(sortedList);
    
  }, [category, selectedSub, defaultSubLabel]);

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }, [searchQuery]);

  const filteredProjects = useMemo(
    () =>
      categoryProjects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.des.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [categoryProjects, searchQuery]
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

  const getSubCount = useCallback((cat, sub) => {
    const catSlug = slugify(cat);
    const defaultLabel = cat === "ai" ? "All AI" : "All Stacks";
    if (sub === defaultLabel) {
      return (projectsByCategory[catSlug] || []).length;
    }
    const subSlug = slugify(sub);
    const key = `${catSlug}||${subSlug}`;
    return (projectsBySubcategory[key] || []).length;
  }, []);
  
  const isDark = useDarkMode();

  return (
    <section className="w-full min-h-screen bg-bodyColorWhite dark:bg-bodyColor text-lightText sm:pt-4 lg:pt-0">
      <div className="flex justify-center items-center lg:hidden mt-0">
        <Searchbar onSearch={onSearch} />
      </div>
      {(category === "full-stack-development" || category === "ai") && (
        <div className="xs:hidden lg:flex flex justify-end items-center cursor-pointer mr-11 ">
          <div className="relative w-48 rounded-lg">
            <div
              className="relative flex items-center w-full gradientBorderLg "
              tabIndex="0"
              onBlur={() => setSubOpen(false)}
            >
              <div
                className="group flex gap-2 justify-center items-center cardGradient 
      transition-colors px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 text-base w-full ripple-container "
                onClick={() => setSubOpen((p) => !p)}
                onMouseDown={createRipple}
              >
                {React.createElement(subIconMap[selectedSub] || FaReact, {
                  className: `w-5 h-5 ${subColorMap[selectedSub]}`,
                })}
                <span className="font-titleFont text-base mb-0.5 text-gray-700 dark:text-gray-300 xs:font-semibold lg:font-normal">
                  {selectedSub}
                </span>
                {isSubOpen ? (
                  <TiChevronRight className="w-5 h-5 text-blue-800 dark:text-blue-300 -rotate-90" />
                ) : (
                  <TiChevronRightOutline className="w-5 h-5 text-blue-800 dark:text-blue-300 rotate-90" />
                )}
              </div>

              {isSubOpen && (
                <ul className="absolute z-50 top-14 left-0 w-full cardGradient shadow-md rounded-md py-2 text-gray-700 dark:text-gray-300 transition-colors duration-100">
                  {subs
                    .filter((s) => s !== selectedSub)
                    .map((sub, i) => {
                      const Icon = subIconMap[sub] || FaReact;
                      const colorClass =
                        subColorMap[sub] || "text-gray-700 dark:text-gray-300";
                      return (
                        <li
                          key={i}
                          className={`
    w-full flex items-center gap-2 px-4 py-2 text-base font-semibold cursor-pointer ripple-container font-titleFont
    text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white
  `}
                          style={{
                            background:
                              hoveredSub === sub
                                ? category === "full-stack-development"
                                  ? isDark
                                    ? darkModeDropdownItemGradientMap[
                                        "full-stack-development"
                                      ]
                                    : lightModeDropdownItemGradientMap[
                                        "full-stack-development"
                                      ]
                                  : isDark
                                  ? darkModeDropdownItemGradientMap["ui-ux"] // or “ai” key if that’s your AI slug
                                  : lightModeDropdownItemGradientMap["ai"]
                                : undefined,
                          }}
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 lg:gap-7 xs:px-4 md:px-6 lg:px-11 py-10">
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
          <div className="col-span-full flex flex-col justify-center items-center min-h-[calc(100vh-15rem)] text-2xl text-gray-600 dark:text-gray-300 font-titleFont">
            {categoryProjects.length === 0 ? (
              <>
                <img
                  src={OctaCat}
                  alt="Coming Soon OctaCat"
                  className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
                />
                Coming Soon...
              </>
            ) : (
              <>
                <img
                  src={ManufacturerOctaCat}
                  alt="No Results Found OctaCat"
                  className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
                />
                No Results Found...
              </>
            )}
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
