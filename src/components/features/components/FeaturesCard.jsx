import React, { useCallback, useState} from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../layouts/Utils";
import {
  hexToRGBA,
  tagColorMap,
  lightModeColorMap,
  darkModeCardGradientMap,
  cardGradientMap,
} from "../constants/featuresData";
import { useDarkMode } from "../../layouts/DarkMode";

const Card = ({
  item: {
    id,
    title,
    des,
    iconOutlined,
    iconFilled,
    tags,
    tagIconFilled,
    tagIconOutlined,
    bgClass,
  },
}) => {
  const navigate = useNavigate();
  const cardSlug = slugify(title);

  const handleCardClick = useCallback(() => {
    navigate(`/features/${cardSlug}`);
  }, [cardSlug, navigate]);

  const [hoveredTag, setHoveredTag] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const isDarkMode = useDarkMode();

  const { tagColor, textColor } = tagColorMap[cardSlug] || {
    tagColor: "#ffffff",
    textColor: "#333",
  };

  const currentGradient = isDarkMode
    ? darkModeCardGradientMap[cardSlug]
    : cardGradientMap[cardSlug];

  const computedHoverStyle =
    isHovered && currentGradient
      ? {
          backgroundImage: currentGradient,
          color: "white",
        }
      : {};

  const lightColors = lightModeColorMap[cardSlug] || {};

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      style={computedHoverStyle}
      className="w-full p-6 md:p-8 lg:p-10 rounded-lg flex items-center bg-boxBgWhite dark:bg-boxBg shadow-shadowTwo dark:shadow-shadowOne transition-colors duration-300 group cursor-pointer"
    >
      <div className="w-full">
        <div className="flex flex-col gap-6 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-2.5">
          {/* Icon with background */}
          <div
            className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300 ${
              bgClass
            }`}
          >
            <div
              style={{
                color: !isDarkMode ? lightColors.text : tagColor,
              }}
              className="text-2xl md:text-3xl lg:text-4xl"
            >
              <span className="group-hover:hidden">{iconOutlined}</span>
              <span className="hidden group-hover:inline">{iconFilled}</span>
            </div>
          </div>

          {/* Title, Tags and Description */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-titleFont font-bold text-gray-700 dark:text-gray-300 dark:group-hover:text-white">
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs font-medium font-bodyFont rounded-full px-2.5 py-1 border-2 cursor-pointer transition-all duration-300 dark:group-hover:text-white"
                  style={
                    !isDarkMode && lightColors.border && lightColors.bg
                      ? {
                          borderColor: lightColors.border,
                          color: lightColors.text,
                          backgroundColor: lightColors.bg,
                        }
                      : {
                          borderColor: tagColor,
                          color: textColor,
                          backgroundColor: hexToRGBA(tagColor, 0.15),
                        }
                  }
                  onMouseEnter={() => setHoveredTag(tagIndex)}
                  onMouseLeave={() => setHoveredTag(null)}
                >
                  <div className="flex items-center gap-1">
                    <span className="transition-all duration-300 dark:group-hover:text-white">
                      {hoveredTag === tagIndex
                        ? tagIconFilled
                        : tagIconOutlined}
                    </span>
                    {tag}
                  </div>
                </span>
              ))}
            </div>
            <p
              className={`text-sm md:text-base text-justify ${
                !isDarkMode
                  ? "text-gray-700"
                  : "text-gray-400 dark:group-hover:text-white"
              }`}
            >
              {des}
            </p>
          </div>

          {/* Arrow to trigger navigation */}
          <div className="flex justify-start">
            <span className="text-2xl text-blue-700 dark:text-designColor opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);