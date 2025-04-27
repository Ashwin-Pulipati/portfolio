import React, { useState, useCallback } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BiExpand } from "react-icons/bi";
import { certificationsGradientMap } from "../constants/CertificationsData"
import { slugify } from "../../layouts/Utils";
import { useDarkMode } from "../../layouts/DarkMode";

const CertificationsCard = React.memo(({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Open the certification link in a new tab.
  const handleCardClick = useCallback(() => {
    window.open(item.link, "_blank", "noopener,noreferrer");
  }, [item.link]);

  // Toggle expansion without propagating the click to the parent.
  const toggleExpand = useCallback((e) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  const isDarkMode = useDarkMode(); // Now isDarkMode is defined
  const cardSlug = slugify(item.title); // e.g. "certification-1"
  const gradients = certificationsGradientMap[cardSlug];

  const [isHovered, setIsHovered] = useState(false);
  // Compute a hover style based on dark mode and gradient mapping.
  const computedHoverStyle =
    isHovered && gradients
      ? { backgroundImage: isDarkMode ? gradients.dark : gradients.light }
      : {};
  
  return (
    <div
      className="w-full p-6 md:p-8 lg:p-10 rounded-2xl shadow-shadowTwo dark:shadow-shadowOne flex items-center 
                 bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022]
                 transition-colors duration-300 group cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={computedHoverStyle}
    >
      <div className="w-full">
        <div className="flex flex-col gap-6">
          {/* Image Section */}
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 duration-300 cursor-pointer"
              src={item.image}
              alt="Certification"
              onClick={toggleExpand}
            />
            {isExpanded && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <BiExpand className="w-10 h-10 text-gray-700 group-hover:text-black dark:group-hover:text-white dark:text-lightText" />
              </div>
            )}
          </div>

          {/* Title and External Link */}
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-700 group-hover:text-black dark:group-hover:text-white dark:text-lightText">
              {item.title}
            </h3>
            <div onClick={handleCardClick} className="cursor-pointer">
              <FiExternalLink className="w-5 h-5 text-gray-700 group-hover:text-black dark:group-hover:text-white dark:text-lightText" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default React.memo(CertificationsCard);
