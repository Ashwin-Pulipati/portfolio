import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import Pagination from "../features/components/FeaturesPagination";
import { useParams } from "react-router-dom";
import { projectsData } from "./constants/ProjectsCardData";
// Removed local Navbar to avoid duplication
import Searchbar from "../navbar/components/Searchbar";

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
    {/* Image Placeholder */}
    <div className="w-full h-48 bg-gray-400 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl"></div>
    {/* Content Placeholder */}
    <div className="w-full mt-5 flex flex-col gap-6">
      <div className="flex items-center justify-end gap-1">
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
      </div>
    </div>
    {/* Title & Description Placeholder */}
    <div className="flex flex-col gap-2 mt-4">
      <div className="h-6 bg-gray-400 w-3/4 rounded-full"></div>
      <div className="h-4 bg-gray-400 w-full rounded-full"></div>
      <div className="h-4 bg-gray-400 w-5/6 rounded-full"></div>
      <div className="h-4 bg-gray-400 w-2/3 rounded-full"></div>
    </div>
  </div>
);

const DelayedFallback = () => {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(true), 300); // Delay before showing the loader
    return () => clearTimeout(timeout);
  }, []);
  return showLoader ? <SkeletonCard /> : null; // Show SkeletonCard only after delay
};

const ITEMS_PER_PAGE = 9;

const ProjectsList = ({ searchQuery, onSearch }) => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryProjects, setCategoryProjects] = useState([]);

  // Remove local search state; use the passed in searchQuery instead.
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const selectedCategory = projectsData.find((project) => project[category]);
    if (selectedCategory) {
      setCategoryProjects(selectedCategory[category]);
    }
  }, [category]);

  // Reset page when searchQuery changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

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
  }, [ currentPage ]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full min-h-screen bg-bodyColorWhite dark:bg-bodyColor text-lightText sm:pt-4 lg:pt-0">
      {/* For mobile view, use the global onSearch via the Searchbar */}
      <div className="flex justify-center items-center lg:hidden mt-0">
        <Searchbar onSearch={onSearch} />
      </div>
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
                gradientIndex={index} // pass the index for gradient selection
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
