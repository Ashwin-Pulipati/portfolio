import React from "react";
import Tooltip from "./Tooltip";
import ExternalLinkIcon from "../../assets/images/SVG/external-link.svg";
import FairyAnimation from "./FairyAnimation";
import { motion } from "framer-motion";
import {
  leftLineMap,
  rightLineMap,
  titleStyleMap,
  commonTitleClasses,
  titleMessages,
} from "./Title.constants";
  
const Title = ({ title, des }) => {
  const isFeatures = title === "Features";
  const titleClasses = titleStyleMap[title];
  const messagesForThisTitle = titleMessages[title] || [
    { message: "Default title message", shockTitle: "Did you know?" },
  ];

  return (
    <div
      className={`flex flex-col gap-4 font-titleFont mb-12 ${
        isFeatures ? "text-left items-start mb-8" : "text-center items-center"
      }`}
    >
      <div className="relative">
        {titleClasses && (
          <h3 className={`${commonTitleClasses} ${titleClasses}`}>{title}</h3>
        )}
        <div className="absolute hidden md:block md:top-4 md:-right-[7.5rem] md:z-50">
          <FairyAnimation section={title} messages={messagesForThisTitle} />
        </div>
      </div>

      <motion.div
        className="flex items-center w-full justify-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {leftLineMap[des] && (
          <div className={`mt-3 flex-1 h-[2px] ${leftLineMap[des]}`}></div>
        )}

        <div className="text-4xl md:text-5xl text-gray-700 dark:text-gray-300 font-bold capitalize pl-0 pr-2">
          {des === "My Resume" ? (
            <a
              href="https://tinyurl.com/ashwin-pulipati-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 group cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-800"
            >
              My Resume
              <img
                src={ExternalLinkIcon}
                alt="External Link"
                className="w-8 h-8 mt-3"
              />
              <Tooltip text="View resume" />
            </a>
          ) : (
            des
          )}
        </div>

        {rightLineMap[des] && (
          <div className={`mt-3 flex-1 h-[2px] ${rightLineMap[des]}`}></div>
        )}
      </motion.div>
    </div>
  );
};

export default React.memo(Title);
