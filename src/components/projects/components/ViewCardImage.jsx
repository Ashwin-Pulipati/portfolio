import React, { useCallback, useState } from "react";
import { BiExpand } from "react-icons/bi";
import "../Project.css";

const ViewCardImage = React.memo(function ViewCardImage({ src, stack }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
      {isExpanded ? (
        <div
          onClick={toggleExpand}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <img
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
            src={src}
            alt="Expanded project"
          />
          <div className="flex justify-center items-center absolute top-5 right-8 bg-white/80 dark:bg-black/60 rounded-full p-2.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
              aria-label="Collapse"
              className="w-5 h-5 cursor-pointer text-rose-600 dark:text-rose-300 hover:text-rose-800 dark:hover:text-rose-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                fill="currentColor"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M.293.293a1 1 0 0 1 1.414 0l1.397 1.396L4.146.646A.5.5 0 0 1 5 1v3.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.354-.854L1.69 3.104L.293 1.707a1 1 0 0 1 0-1.414m9.016.245a.5.5 0 0 1 .545.108l1.043 1.043L12.293.293a1 1 0 1 1 1.414 1.414l-1.396 1.397l1.043 1.042A.5.5 0 0 1 13 5H9.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .309-.462M1 9a.5.5 0 0 0-.354.854l1.043 1.043l-1.396 1.396a1 1 0 1 0 1.414 1.414l1.397-1.396l1.042 1.043A.5.5 0 0 0 5 13V9.5a.5.5 0 0 0-.5-.5zm8 .5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .354.854l-1.043 1.043l1.396 1.396a1 1 0 0 1-1.414 1.414l-1.397-1.396l-1.042 1.043A.5.5 0 0 1 9 13z"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <>
          <figure>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover duration-300 "
              src={src}
              alt="project"
            />
            <figcaption className="absolute bottom-0 right-0 z-10 flex flex-wrap gap-2 p-2 bg-white/90 rounded-tl-xl">
              {stack.map((icon) => icon)}
            </figcaption>
          </figure>
          <div className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/60 rounded-full">
            <BiExpand
              onClick={toggleExpand}
              aria-label="Expand"
              className="w-5 h-5 cursor-pointer text-rose-600 dark:text-rose-300 hover:text-rose-800 dark:hover:text-rose-600 transition-colors duration-300"
            />
          </div>
        </>
      )}
    </div>
  );
});

export default ViewCardImage;
