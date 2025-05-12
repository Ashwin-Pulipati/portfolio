import React from 'react'

const Tootip = ({text}) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-gray-700 dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <span className="whitespace-nowrap text-xs">{text}</span>
      {/* Tooltip Arrow */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 bottom-full w-2 h-2 bg-gray-700 dark:bg-white rotate-45"></div>
    </div>
  );
}

export default React.memo(Tootip); 