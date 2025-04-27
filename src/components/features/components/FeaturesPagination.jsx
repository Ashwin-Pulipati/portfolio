import React from "react";
import UnifiedArrow from "../../layouts/UnifiedArrow";
import "./FeaturesPagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onNext,
  onPrev,
}) => (
  <div className="flex justify-center items-center gap-3 py-6">
    <div className="relative p-0.5 rounded-lg flex justify-center items-center">
      <UnifiedArrow
        variant={"pagination"}
        direction="prev"
        onClick={onPrev}
        disabled={currentPage === 1}
      />
    </div>

    {Array.from({ length: totalPages }, (_, i) => (
      <div
        key={i}
        className={`relative rounded-lg flex justify-center items-center group shadow-shadowTwo dark:shadow-shadowOne ${
          currentPage === i + 1
            ? "active-pagination p-0.5 active-pagination-btn"
            : "hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] text-white/50 hover:text-white hover:scale-105 transition-transform duration-200 p-0.5"
        }`}
      >
        <button
          className="relative w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center text-lg font-semibold rounded-lg 
          transition bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl from-[#dee3e7] to-white 
          dark:from-[#262a2e] dark:to-[#1f2022] "
          onClick={() => onPageChange(i + 1)}
        >
          <span className="relative z-10 text-black dark:text-white">
            {i + 1}
          </span>
        </button>
      </div>
    ))}

    <div className="relative p-0.5 rounded-lg flex justify-center items-center">
      <UnifiedArrow
        variant={"pagination"}
        direction="next"
        onClick={onNext}
        disabled={currentPage === totalPages}
      />
    </div>
  </div>
);

export default React.memo(Pagination);
