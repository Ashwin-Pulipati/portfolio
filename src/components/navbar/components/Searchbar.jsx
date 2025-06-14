// Searchbar.jsx

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TiChevronRight, TiChevronRightOutline } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "../../../assets/images/SVG/search.svg";
import { createRipple } from "../../layouts/RippleEffect";
import { slugify } from "../../layouts/Utils";
import {
  lightModeDropdownItemGradientMap,
  darkModeDropdownItemGradientMap,
  CATEGORY_LIST,
  categoryIconMap,
  subCategoryMap,
} from "../Navbar.constants";
import { getCategoryCount, getSubCount } from "../Navbar.Utils";
import { useDarkMode } from "../../layouts/DarkMode";

function Searchbar({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isSubOpen, setSubOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSub, setHoveredSub] = useState(null);
  const subDropdownRef = useRef(null);

  const defaultSub = useMemo(
    () =>
      location.pathname.includes("/features/ai") ? "All AI" : "All Stacks",
    [location.pathname]
  );
  const [selectedSub, setSelectedSub] = useState(defaultSub);

  const isDark = useDarkMode();
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

  const placeholder = useMemo(
    () =>
      location.pathname.includes("/projects/")
        ? "Search anything..."
        : "Enter Project Title...",
    [location.pathname]
  );

  const {
    iconOutlined: SelectedOutlinedIcon,
    iconFilled: SelectedFilledIcon,
    color: selectedColor,
  } = useMemo(
    () =>
      categoryIconMap[currentCategory || "All Categories"] || {
        iconOutlined: () => null,
        iconFilled: () => null,
        color: "",
      },
    [currentCategory]
  );

  const handleSearchChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchQuery(value);
      onSearch(value);
    },
    [onSearch]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        subDropdownRef.current &&
        !subDropdownRef.current.contains(event.target)
      ) {
        setSubOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, []);

  const subs = useMemo(() => {
    if (currentCategory === "Full Stack Development") {
      return [
        "All Stacks",
        "MERN Stack",
        "MEAN Stack",
        "PERN Stack",
        "Python",
        "Java",
      ];
    }
    return ["All AI", "No-Code", "Code-Based"];
  }, [currentCategory]);

  return (
    <div className="flex justify-center items-center w-full px-4 md:px-12 pt-4 lg:px-0 lg:py-0">
      <div className="flex max-w-4xl w-full flex-col lg:flex-row items-start lg:items-center rounded-lg cardView gap-2 lg:gap-4 xs:p-2 lg:p-1">
        {/* Category selector */}
        <button
          className="relative p-0.5 rounded-lg hoverFocusGradient elevatedShadow xs:w-full lg:w-[300px]"
          tabIndex="0"
          onBlur={() => setCategoryOpen(false)}
          aria-label="Select Category"
        >
          <div
            className="group flex justify-center gap-4 items-center cardGradient transition-colors duration-100 px-4 py-3 rounded-lg text-gray-300 font-semibold ripple-container cursor-pointer"
            onClick={() => setCategoryOpen((p) => !p)}
            onMouseDown={createRipple}
          >
            <div className="flex items-center gap-2">
              {isCategoryOpen ? (
                <SelectedFilledIcon className={`w-5 h-5 ${selectedColor}`} />
              ) : (
                <SelectedOutlinedIcon className={`w-5 h-5 ${selectedColor}`} />
              )}
              <span className="w-fit h-fit text-left text-base mb-0.5 text-gray-700 dark:text-gray-300 xs:font-semibold lg:font-normal font-titleFont">
                {currentCategory || "All Categories"}
              </span>
            </div>
            {isCategoryOpen ? (
              <TiChevronRight className="w-5 h-5 text-blue-800 dark:text-blue-300 -rotate-90" />
            ) : (
              <TiChevronRightOutline className="w-5 h-5 text-blue-800 dark:text-blue-300 rotate-90" />
            )}
          </div>
          {isCategoryOpen && (
            <ul className="absolute z-50 xs:top-16 lg:top-14 left-0 w-full cardGradient transition-colors duration-100 shadow-md rounded-br-md rounded-bl-md py-2 text-gray-700 dark:text-gray-300">
             {dropdownCategories.map((cat, i) => {
                const slug = slugify(cat);
                // Alias the icon components with uppercase names:
                const {
                  iconOutlined: IconOutlined,
                  iconFilled: IconFilled,
                  color,
                } = categoryIconMap[cat];
                const isHovered = hoveredCategory === cat;
                return (
                  <li
                    key={i}
                    onClick={() => {
                      navigate(`/features/${slug}`);
                      setCategoryOpen(false);
                      setSelectedSub(slug === "ai" ? "All AI" : "All Stacks");
                    }}
                    onMouseEnter={() => setHoveredCategory(cat)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onMouseDown={createRipple}
                    className="w-full flex items-center gap-2 px-4 py-2 text-base font-semibold cursor-pointer ripple-container
                      text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    style={{
                      background: isHovered
                        ? isDark
                          ? darkModeDropdownItemGradientMap[slug]
                          : lightModeDropdownItemGradientMap[slug]
                        : undefined,
                    }}
                  >
                    {isHovered ? (
                      <IconFilled className={`w-5 h-5 ${color}`} />
                    ) : (
                      <IconOutlined className={`w-5 h-5 ${color}`} />
                    )}
                    {cat} ({getCategoryCount(cat)})
                  </li>
                );
              })}
            </ul>
          )}
        </button>

        <div className="hidden lg:flex items-center h-6">
          <div className="w-px bg-gray-400 h-full" />
        </div>
        <div className="flex lg:hidden w-full px-8 justify-center">
          <div className="h-px w-full bg-gray-600 dark:bg-gray-300" />
        </div>

        {/* Subcategory dropdown */}
        {(currentCategory === "Full Stack Development" ||
          currentCategory === "AI") && (
          <>
            <div
              ref={subDropdownRef}
              className="w-full lg:hidden relative gradientBorderLg"
            >
              <div
                className="group flex justify-center gap-4 items-center cardGradient transition-colors duration-100 px-4 py-3 
                rounded-lg text-base text-gray-700 dark:text-gray-300 cursor-pointer ripple-container"
                onClick={() => setSubOpen((p) => !p)}
                onMouseDown={createRipple}
              >
                {React.createElement(subCategoryMap[selectedSub].icon, {
                  className: `w-5 h-5 ${subCategoryMap[selectedSub].color}`,
                })}
                <span className="w-fit h-fit text-left ml-2 mr-2 text-base md:text-base mb-0.5 text-gray-700 dark:text-gray-300 xs:font-semibold lg:font-normal font-titleFont">
                  {selectedSub}
                </span>
                {isSubOpen ? (
                  <TiChevronRight className="w-5 h-5 text-blue-800 dark:text-blue-300 -rotate-90" />
                ) : (
                  <TiChevronRightOutline className="w-5 h-5 text-blue-800 dark:text-blue-300 rotate-90" />
                )}
              </div>
              {isSubOpen && (
                <ul className="absolute z-50 top-16 left-0 w-full cardGradient shadow-md rounded-br-md rounded-bl-md py-2 text-base transition-colors duration-100">
                  {subs
                    .filter((s) => s !== selectedSub)
                    .map((sub, i) => {
                      const slugged = slugify(sub);
                      const isHoveredItem = hoveredSub === sub;
                      const gradientKey =
                        currentCategory === "Full Stack Development"
                          ? "full-stack-development"
                          : "ai";
                      const gradientMap = isDark
                        ? darkModeDropdownItemGradientMap[gradientKey]
                        : lightModeDropdownItemGradientMap[gradientKey];
                      return (
                        <li
                          key={i}
                          className="w-full flex items-center gap-2 px-4 py-2 font-semibold cursor-pointer ripple-container
                          text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                          style={{
                            background: isHoveredItem ? gradientMap : undefined,
                          }}
                          onClick={() => {
                            setSelectedSub(sub);
                            navigate(`${location.pathname}?sub=${slugged}`);
                            setSubOpen(false);
                          }}
                          onMouseEnter={() => setHoveredSub(sub)}
                          onMouseLeave={() => setHoveredSub(null)}
                          onMouseDown={createRipple}
                        >
                          {React.createElement(subCategoryMap[sub].icon, {
                            className: `w-5 h-5 ${subCategoryMap[sub].color}`,
                          })}
                          {sub} ({getSubCount(currentCategory, sub)})
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <div className="flex lg:hidden w-full px-8 justify-center">
              <div className="h-px w-full bg-gray-700 dark:bg-gray-300" />
            </div>
          </>
        )}

        {/* Search input */}
        <div className="relative gradientBorderLg xs:w-full lg:w-[300px]">
          <div className="flex items-center cardGradient transition-colors duration-100 px-4 py-3 rounded-lg w-full">
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="w-5 h-5 mr-2"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={placeholder}
              className="w-full text-gray-700 dark:text-gray-300 bg-transparent outline-none placeholder:opacity-75 text-base font-titleFont"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Searchbar);
