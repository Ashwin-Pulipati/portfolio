import React, { useCallback, useMemo, useState } from "react";
import { BiCategory, BiSolidCategory } from "react-icons/bi";
import { TiChevronRight, TiChevronRightOutline } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
import { slugify } from "../../layouts/Utils";
import { cardGradientMap, darkModeCardGradientMap } from "../constants/NavItems";
import SearchIcon from "../../../assets/images/SVG/search.svg";
import { projectsData } from "../../projects/constants/ProjectsCardData";
import { createRipple } from "../../layouts/RippleEffect";

const getCategoryCount = (category) => {
  const slug = slugify(category);
  const categoryData = projectsData.find((item) => item[slug]);
  return categoryData ? categoryData[slug].length : 0;
};

const CATEGORY_LIST = [
  "All Categories",
  "Frontend Development",
  "Machine Learning",
  "MERN Stack Development",
  "UI/UX",
];

function Searchbar({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const isDarkMode = document.documentElement.classList.contains("dark");

  const currentCategory = useMemo(
    () =>
      CATEGORY_LIST.find(
        (category) => `/features/${slugify(category)}` === location.pathname
      ),
    [location.pathname]
  );

  const dropdownCategories = useMemo(
    () => CATEGORY_LIST.filter((category) => category !== currentCategory),
    [currentCategory]
  );

  const handleCategoryClick = useCallback(
    (category) => {
      const slug = slugify(category);
      navigate(`/features/${slug}`);
      setDropdownOpen(false);
    },
    [navigate]
  );

  const handleSearchChange = useCallback(
    (e) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch(query);
    },
    [onSearch]
  );
  
  const placeholder = location.pathname.includes("/projects/")
    ? "Search anything..."
    : "Enter Project Title...";

  return (
    <div className="flex justify-center items-center w-full xs:pt-4 sm:pt-0 px-8 lg:px-0 ">
      <div className="flex flex-1 max-w-3xl items-center xs:pr-0 md:pr-0 md:space-x-0 lg:space-x-4 bg-gray-50 bg-gradient-br from-[#dee3e7] to-white dark:bg-bodyColor dark:bg-gradient-to-tl dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-100 rounded-lg shadow-shadowTwo dark:shadow-shadowOne xs:flex-col lg:flex-row w-full">
        <div
          className="relative p-0.5 rounded-lg flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] flex-1 w-full"
          tabIndex="0"
          onBlur={() => setDropdownOpen(false)}
        >
          <div
            className="group flex justify-center gap-2 md:gap-4 bg-gray-50 bg-gradient-br from-[#dee3e7] to-white 
            dark:bg-bodyColor dark:bg-gradient-to-tl  dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-100 
            items-center px-3 py-3 
            lg:px-5 lg:py-3 rounded-lg text-gray-300 font-semibold cursor-pointer text-sm 
            lg:text-base w-full min-w-max ripple-container"
            onClick={() => setDropdownOpen((prev) => !prev)}
            onMouseDown={createRipple}
          >
            {isDropdownOpen ? (
              <BiSolidCategory className="w-5 h-5 text-green-800 dark:text-green-300" />
            ) : (
              <BiCategory className="w-5 h-5 text-green-800 dark:text-green-300" />
            )}

            <span className="text-sm md:text-base mb-0.5 text-gray-700 dark:text-gray-300 xs:font-semibold lg:font-normal">
              {currentCategory || "All Categories"}
            </span>

            {isDropdownOpen ? (
              <TiChevronRight className="w-5 h-5 text-blue-800 dark:text-blue-300 -rotate-90" />
            ) : (
              <TiChevronRightOutline className="w-5 h-5 text-blue-800 dark:text-blue-300 transition-transform duration-200 rotate-90" />
            )}
          </div>

          {isDropdownOpen && (
            <ul
              className="absolute z-50 top-12 md:top-14 left-0 overflow-hidden dark:bg-bodyColor dark:bg-gradient-to-tl bg-gray-50 
      bg-gradient-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-100
      shadow-md rounded-md text-gray-700 dark:text-gray-300 py-2 w-full"
            >
              {dropdownCategories.map((category, index) => {
                const slug = slugify(category);
                const bgGradient = isDarkMode
                  ? darkModeCardGradientMap[slug]
                  : cardGradientMap[slug];

                return (
                  <li
                    key={index}
                    className="hover:scale-105 px-4 py-2 cursor-pointer transition text-sm md:text-base text-gray-600 
                    dark:text-gray-300 xs:font-semibold lg:font-normal ripple-container"
                    onClick={() => handleCategoryClick(category)}
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onMouseDown={createRipple}
                    style={{
                      background:
                        hoveredCategory === category ? bgGradient : "",
                      color: isDarkMode
                        ? "white"
                        : hoveredCategory === category
                        ? "black"
                        : "#374151",
                    }}
                  >
                    {category} ({getCategoryCount(category)})
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <hr className="w-full border-t border-gray-400 dark:border-gray-600 md:hidden my-1" />

        {/* Search Bar */}
        <div className="relative p-0.5 rounded-lg flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] flex-1 w-full">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-4 bg-gray-50 dark:bg-bodyColor dark:bg-gradient-to-tl bg-gradient-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-100r p-2 md:p-3 w-full rounded-lg">
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="w-5 h-5 mr-0 bg-[#F9FAFB] dark:bg-[#202224] shadow-xs"
            />
            <input
              className=" bg-gray-50 dark:bg-bodyColor dark:bg-gradient-to-tl bg-gradient-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-100 outline-none placeholder:opacity-75 sm:text-md lg:text-base w-full text-gray-700 dark:text-gray-300"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Searchbar);
