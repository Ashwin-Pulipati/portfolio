import React from "react";

const RightBanner = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 h-4/5 bottom-0 bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl 
        from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] shadow-shadowTwo dark:shadow-shadowOne 
        transition-colors duration-300 rounded-lg z-0"
      />
      <div
        className="absolute inset-x-0 h-4/5 -translate-y-[3%] right-5 bottom-0 border border-gray-400 shadow-shadowTwo 
        dark:shadow-shadowOne rounded-md -z-20 translate-x-[7%]"
      />
      {/* Image */}
      <img
        className="relative w-full h-auto max-w-md lg:max-w-lg mx-auto object-cover rounded-lg z-30"
        src="/banner-right.png"
        alt="banner"
        decoding="async"
        loading="eager"
        width={700}
        height={960}
      />
      <div
        className="absolute inset-x-0 h-3/5 -translate-y-[-2%] right-6 bottom-0 bg-gradient-to-r from-[#58eba6] via-[#1fc8de] 
        to-[#0584d9] dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] opacity-75 blur transition duration-500 
        shadow-shadowTwo dark:shadow-shadowOne rounded-md -z-20 -translate-x-[1%] border 
        border-gray-700 dark:border-gray-200 "
      />
    </div>
  );
};

export default React.memo(RightBanner);

