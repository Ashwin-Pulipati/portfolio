import React from "react";
import { createRipple } from "../../layouts/RippleEffect";

function CrossIcon() {
  return (
    <div className="w-12 h-12 gradientBorderFull transition-transform duration-300">
      <button
        onMouseDown={createRipple}
        className="relative w-full h-full flex items-center justify-center cardGradient transition-colors duration-300 rounded-full ripple-container"
      aria-label="Close"
      >
        <span className="relative block w-5 h-5 text-blue-700 dark:text-cyan-400">
          <span className="absolute inset-0 top-2 right-1 bg-current rotate-45 w-full h-[4px] rounded-full" />
          <span className="absolute inset-0 top-2 right-1 bg-current -rotate-45 w-full h-[4px] rounded-full" />
        </span>
      </button>
    </div>
  );
}

export default React.memo(CrossIcon);