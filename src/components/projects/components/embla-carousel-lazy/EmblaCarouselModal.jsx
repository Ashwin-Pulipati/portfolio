import React, { useMemo } from "react";
import EmblaCarousel from "./EmblaCarousel";

const EmblaCarouselModal = React.memo(function EmblaCarouselModal({
  slides,
  startIndex,
  onClose,
}) {
  const options = useMemo(() => ({ startIndex, loop: true }), [startIndex]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Expanded carousel */}
        <EmblaCarousel
          slides={slides}
          options={options}
          onExpand={null}
          expanded={true}
        />
      </div>
      <button className="group p-2.5 absolute top-7 right-7  bg-white/80 dark:bg-black/60 rounded-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          width="1em"
          height="1em"
          className="w-5 h-5 duration-300 cursor-pointer text-rose-400  group-hover:text-rose-600 dark:text-rose-600 dark:group-hover:text-rose-400"
          onClick={onClose}
          aria-label="Collapse"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M.293.293a1 1 0 0 1 1.414 0l1.397 1.396L4.146.646A.5.5 0 0 1 5 1v3.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.354-.854L1.69 3.104L.293 1.707a1 1 0 0 1 0-1.414m9.016.245a.5.5 0 0 1 .545.108l1.043 1.043L12.293.293a1 1 0 1 1 1.414 1.414l-1.396 1.397l1.043 1.042A.5.5 0 0 1 13 5H9.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .309-.462M1 9a.5.5 0 0 0-.354.854l1.043 1.043l-1.396 1.396a1 1 0 1 0 1.414 1.414l1.397-1.396l1.042 1.043A.5.5 0 0 0 5 13V9.5a.5.5 0 0 0-.5-.5zm8 .5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .354.854l-1.043 1.043l1.396 1.396a1 1 0 0 1-1.414 1.414l-1.397-1.396l-1.042 1.043A.5.5 0 0 1 9 13z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
});

export default EmblaCarouselModal;
