import React, { useCallback, useMemo, useState } from "react";
import { BiCategory } from "react-icons/bi";
import {
  TiChevronRight,
  TiChevronRightOutline,
  TiThSmall,
} from "react-icons/ti";
import { AiFillAliwangwang, AiFillCode, AiOutlineCode } from "react-icons/ai";
import { MdCodeOff, MdOutlineDesignServices } from "react-icons/md";
import { HiInboxStack } from "react-icons/hi2";
import { SiAiqfome, SiOpenai, SiPostgresql } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { slugify } from "../../layouts/Utils";
import {
  cardGradientMap,
  darkModeCardGradientMap,
} from "../constants/NavItems";
import SearchIcon from "../../../assets/images/SVG/search.svg";
import { createRipple } from "../../layouts/RippleEffect";
import { projectsData } from "../../projects/constants/ProjectsCardData";
import { FaAngular, FaJava, FaPython, FaReact } from "react-icons/fa";

const CATEGORY_LIST = [
  "All Categories",
  "Frontend Development",
  "Machine Learning",
  "Full Stack Development",
  "UI/UX",
  "AI",
];

const categoryIconMap = {
  "All Categories": {
    icon: BiCategory,
    color: "text-stone-600 dark:text-stone-400",
  },
  "Frontend Development": {
    icon: AiFillCode,
    color: "text-pink-600 dark:text-pink-400",
  },
  "Machine Learning": {
    icon: AiFillAliwangwang,
    color: "text-orange-600 dark:text-orange-400",
  },
  "Full Stack Development": {
    icon: HiInboxStack,
    color: "text-green-600 dark:text-green-400",
  },
  "UI/UX": {
    icon: MdOutlineDesignServices,
    color: "text-purple-600 dark:text-purple-400",
  },
  AI: { icon: SiAiqfome, color: "text-blue-600 dark:text-blue-400" },
};

const getCategoryCount = (category) => {
  const slug = slugify(category);
  const entry = projectsData.find((item) => item[slug]);
  if (!entry) return 0;
  const data = entry[slug];
  if (Array.isArray(data)) return data.length;
  const allKey = Object.keys(data).find((k) => k.startsWith("all"));
  return data[allKey]?.length || 0;
};

const getSubCount = (category, sub) => {
  const slug = slugify(category);
  const entry = projectsData.find((item) => item[slug])[slug];
  const key = slugify(sub);
  return Array.isArray(entry[key]) ? entry[key].length : 0;
};


function Searchbar({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isSubOpen, setSubOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSub, setHoveredSub] = useState(null);

  const defaultSub = location.pathname.includes("/features/ai")
    ? "All AI"
    : "All Stacks";
  const [selectedSub, setSelectedSub] = useState(defaultSub);

  const isDark = document.documentElement.classList.contains("dark");

  const currentCategory = useMemo(
    () =>
      CATEGORY_LIST.find(
        (cat) => `/features/${slugify(cat)}` === location.pathname
      ),
    [location.pathname]
  );

  const dropdownCategories = useMemo(
    () => CATEGORY_LIST.filter((cat) => cat !== currentCategory),
    [currentCategory]
  );

  const placeholder = location.pathname.includes("/projects/")
    ? "Search anything..."
    : "Enter Project Title...";

  const SelectedIcon =
    categoryIconMap[currentCategory || "All Categories"].icon;
  const selectedColor =
    categoryIconMap[currentCategory || "All Categories"].color;

  const handleSearchChange = useCallback(
    (e) => {
      setSearchQuery(e.target.value);
      onSearch(e.target.value);
    },
    [onSearch]
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

  return (
    <div className="flex justify-center items-center w-full xs:pt-4 sm:pt-0 px-8 lg:px-0">
      <div
        className="flex flex-1 max-w-3xl items-center xs:pr-0 md:pr-0 md:space-x-0 lg:space-x-4 bg-gray-50 bg-gradient-br 
      from-[#dee3e7] to-white dark:bg-bodyColor dark:bg-gradient-to-tl dark:from-[#262a2e] dark:to-[#1f2022]
      transition-colors duration-100 rounded-lg shadow-shadowTwo dark:shadow-shadowOne xs:flex-col lg:flex-row w-full"
      >
        <div
          className="relative p-0.5 rounded-lg flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r 
          from-[#58eba6] via-[#1fc8de] to-[#0584d9] flex-1 w-full"
          tabIndex="0"
          onBlur={() => setCategoryOpen(false)}
        >
          <div
            className="group flex justify-center gap-2 md:gap-4 bg-gray-50 bg-gradient-br from-[#dee3e7] to-white 
            dark:bg-bodyColor dark:bg-gradient-to-tl dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-100 
            items-center px-3 py-3 
            lg:px-5 lg:py-3 rounded-lg text-gray-300 font-semibold cursor-pointer text-sm lg:text-base w-full min-w-max 
            ripple-container"
            onClick={() => setCategoryOpen((p) => !p)}
            onMouseDown={createRipple}
          >
            <SelectedIcon className={`w-5 h-5 ${selectedColor}`} />
            <span className="text-sm md:text-base mb-0.5 text-gray-700 dark:text-gray-300 xs:font-semibold lg:font-normal">
              {currentCategory || "All Categories"}
            </span>
            {isCategoryOpen ? (
              <TiChevronRight className="w-5 h-5 text-blue-800 dark:text-blue-300 -rotate-90" />
            ) : (
              <TiChevronRightOutline className="w-5 h-5 text-blue-800 dark:text-blue-300 transition-transform duration-200 rotate-90" />
            )}
          </div>
          {isCategoryOpen && (
            <ul className="absolute z-50 top-14 md:top-16 lg:top-14 left-0 w-full min-w-max bg-gray-50 dark:bg-bodyColor shadow-md rounded-md py-2 text-gray-700 dark:text-gray-300 transition-colors duration-100">
              {dropdownCategories.map((cat, i) => {
                const slug = slugify(cat);
                const bg = isDark
                  ? darkModeCardGradientMap[slug]
                  : cardGradientMap[slug];
                const { icon: Icon, color } = categoryIconMap[cat];
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 text-sm md:text-base font-semibold cursor-pointer ripple-container"
                    onClick={() => {
                      navigate(`/features/${slugify(cat)}`);
                      setCategoryOpen(false);
                      setSelectedSub(
                        slugify(cat) === "ai" ? "All AI" : "All Stacks"
                      );
                    }}
                    onMouseEnter={() => setHoveredCategory(cat)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onMouseDown={createRipple}
                    style={{
                      background: hoveredCategory === cat ? bg : "",
                      color: isDark
                        ? "white"
                        : hoveredCategory === cat
                        ? "black"
                        : "#374151",
                    }}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    {cat} ({getCategoryCount(cat)})
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <hr className="w-full border-t border-gray-400 dark:border-gray-600 lg:hidden my-1" />

        {(currentCategory === "Full Stack Development" ||
          currentCategory === "AI") && (
          <div className="xs:block lg:hidden flex justify-center items-center w-full">
            <div className="relative w-full">
              <div
                className="relative p-0.5 rounded-lg flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r 
                from-[#58eba6] via-[#1fc8de] to-[#0584d9] w-full"
                tabIndex="0"
                onBlur={() => setSubOpen(false)}
              >
                <div
                  className="group flex gap-4 justify-center items-center bg-gray-50 dark:bg-bodyColor dark:bg-gradient-to-tl 
                  bg-gradient-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors 
                  duration-100 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 text-sm lg:text-base w-full 
                  ripple-container"
                  onClick={() => setSubOpen((p) => !p)}
                  onMouseDown={createRipple}
                >
                  {React.createElement(subIconMap[selectedSub], {
                    className: `w-5 h-5 ${subColorMap[selectedSub]}`,
                  })}
                  <span className="text-sm md:text-base mb-0.5 text-gray-700 dark:text-gray-300 xs:font-semibold lg:font-normal">
                    {selectedSub}
                  </span>
                  {isSubOpen ? (
                    <TiChevronRight className="w-5 h-5 text-blue-800 dark:text-blue-300 -rotate-90" />
                  ) : (
                    <TiChevronRightOutline className="w-5 h-5 text-blue-800 dark:text-blue-300 rotate-90" />
                  )}
                </div>
                {isSubOpen && (
                  <ul className="absolute z-50 top-14 md:top-16 lg:top-14 left-0 w-full bg-gray-50 dark:bg-bodyColor shadow-md rounded-md py-2 text-gray-700 dark:text-gray-300 transition-colors duration-100">
                    {(currentCategory === "Full Stack Development"
                      ? [
                          "All Stacks",
                          "MERN Stack",
                          "MEAN Stack",
                          "PERN Stack",
                          "Python",
                          "Java",
                        ]
                      : ["All AI", "No-Code", "Code-Based"]
                    ).map((sub, i) => (
                      <li
                        key={i}
                        className={`
            flex items-center gap-2 px-4 py-2 text-sm md:text-base 
            font-semibold cursor-pointer ripple-container
            ${
              hoveredSub === sub
                ? currentCategory === "full-stack-development"
                  ? "bg-gradient-to-br from-[#96fbc4] to-[#f9f586] dark:from-[#226346] dark:to-[#6b5b1d] text-black"
                  : "bg-gradient-to-br from-[#a0f0f4] to-[#f9f586] dark:from-[#0d7998] dark:to-[#66009a] text-black"
                : "text-gray-700 dark:text-gray-300"
            }
          `}
                        onClick={() => {
                          setSelectedSub(sub);
                          navigate(
                            `/features/${slugify(
                              currentCategory
                            )}?sub=${slugify(sub)}`
                          );
                          setSubOpen(false);
                        }}
                        onMouseEnter={() => setHoveredSub(sub)}
                        onMouseLeave={() => setHoveredSub(null)}
                        onMouseDown={createRipple}
                      >
                        {React.createElement(subIconMap[sub], {
                          className: `w-5 h-5 ${subColorMap[sub]}`,
                        })}
                        {sub} ({getSubCount(currentCategory, sub)})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}

        <hr className="w-full border-t border-gray-400 dark:border-gray-600 lg:hidden my-1" />

        <div className="relative p-0.5 rounded-lg flex items-center hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] flex-1 w-full">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-4 bg-gray-50 dark:bg-bodyColor dark:bg-gradient-to-tl bg-gradient-br from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] transition-colors duration-100 p-2 md:p-3 w-full rounded-lg">
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="w-5 h-5 bg-[#F9FAFB] dark:bg-[#202224] shadow-xs"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={placeholder}
              className="w-full text-gray-700 dark:text-gray-300 outline-none placeholder:opacity-75 sm:text-md lg:text-base bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Searchbar);
