// FeaturesCard.jsx

import React, { useCallback, useState, useMemo } from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../layouts/DarkMode";
import { slugify } from "../../layouts/Utils";
import { hexToRGBA, tagStyleMap } from "../Features.constants";

const Card = ({
  item: {
    title,
    des,
    iconOutlined,
    iconFilled,
    tags,
    tagIconOutlined,
  },
}) => {
  const navigate = useNavigate();
  const cardSlug = useMemo(() => slugify(title), [title]);

  const handleCardClick = useCallback(() => {
    navigate(`/features/${cardSlug}`);
  }, [cardSlug, navigate]);

  const [isHovered, setIsHovered] = useState(false);
  const isDarkMode = useDarkMode();

  const style = useMemo(
    () =>
      tagStyleMap[cardSlug] || {
        tagColor: "#ffffff",
        textColor: "#333333",
        backgroundClass: "",
        lightMode: {},
        gradient: { light: "", dark: "" },
      },
    [cardSlug]
  );

  const bgClass = style.backgroundClass;
  const tagColors = useMemo(
    () => ({ tagColor: style.tagColor, textColor: style.textColor }),
    [style.tagColor, style.textColor]
  );
  const lightColors = style.lightMode;

  const currentGradient = useMemo(
    () => (isDarkMode ? style.gradient.dark : style.gradient.light),
    [isDarkMode, style.gradient]
  );

  const computedHoverStyle = useMemo(
    () =>
      isHovered
        ? { backgroundImage: currentGradient, color: "#ffffff" }
        : {},
    [isHovered, currentGradient]
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      style={computedHoverStyle}
      className="w-full p-6 md:p-8 lg:p-10 rounded-lg flex items-center cardView group cursor-pointer"
    >
      <div className="w-full">
        <div className="flex flex-col gap-6 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-2.5">
          <div
            className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300 ${bgClass}`}
          >
            <div
              style={{
                color: !isDarkMode ? lightColors.text : tagColors.tagColor,
              }}
              className="text-2xl md:text-3xl lg:text-4xl"
            >
              <span className="group-hover:hidden">{iconOutlined}</span>
              <span className="hidden group-hover:inline">{iconFilled}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg lg:text-2xl md:text-xl font-titleFont font-bold text-gray-700 dark:text-gray-300 dark:group-hover:text-white">
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="text-xs font-medium font-bodyFont rounded-full px-2.5 py-1 border-2 cursor-pointer transition-all duration-300 dark:group-hover:text-white"
                  style={
                    !isDarkMode && lightColors.border && lightColors.bg
                      ? {
                          borderColor: lightColors.border,
                          color: lightColors.text,
                          backgroundColor: lightColors.bg,
                        }
                      : {
                          borderColor: tagColors.tagColor,
                          color: tagColors.textColor,
                          backgroundColor: hexToRGBA(tagColors.tagColor, 0.15),
                        }
                  }
                >
                  <div className="flex items-center gap-1">
                    <span className="transition-all duration-300 dark:group-hover:text-white">
                      {tagIconOutlined}
                    </span>
                    {tag}
                  </div>
                </div>
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

          <div className="flex justify-start">
            <span className="text-2xl arrowIcon lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
