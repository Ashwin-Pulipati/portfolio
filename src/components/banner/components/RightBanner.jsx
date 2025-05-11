import React from "react";
import banner from "../../../assets/images/Webp/banner-right.webp";

const RightBanner = () => {
  return (
    <div className="relative xs:w-full md:w-[57%] lg:w-[50%] xl:w-[87.5%] flex justify-center items-end">
      <div
        className="w-full max-w-sm lg:max-w-lg rounded-lg bg-cover bg-center bg-no-repeat z-30 xs:-translate-y-[8%]
         sm:xs:-translate-y-[7%] md:-translate-y-[4%] lg:-translate-y-[0%] xl:-translate-y-[4%] "
        style={{
          backgroundImage: `url(${banner})`,
          aspectRatio: "8 / 12",
        }}
      />

      <div
        className="absolute inset-x-0 h-4/5 bottom-0 bg-boxBgWhite dark:bg-boxBg bg-gradient-to-br dark:bg-gradient-to-tl
        from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] shadow-shadowTwo dark:shadow-shadowOne
        transition-colors duration-300 rounded-lg z-0 xs:-translate-y-[10%] sm:-translate-y-[9%] md:-translate-y-[5%]
        lg:-translate-y-[0%] xl:-translate-y-[5%]"
      />
      <div
        className="absolute inset-x-0 h-4/5 xs:-translate-y-[13%] sm:-translate-y-[12%] md:-translate-y-[8%] lg:-translate-y-[3%]
        xl:-translate-y-[8%] right-5 bottom-0 border border-gray-400 shadow-shadowTwo
        dark:shadow-shadowOne rounded-md -z-20 translate-x-[7%]"
      />
      <div
        className="absolute inset-x-0 h-3/5 xs:-translate-y-[11%] sm:-translate-y-[10%] md:-translate-y-[4%] lg:-translate-y-[-3%]
        xl:-translate-y-[5%] right-6 bottom-0 bg-gradient-to-r from-[#58eba6] via-[#1fc8de]
        to-[#0584d9] dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] opacity-75 blur transition duration-500
        shadow-shadowTwo dark:shadow-shadowOne rounded-md -z-20 -translate-x-[1%] border
        border-gray-700 dark:border-gray-200 "
      />
    </div>
  );
};

export default React.memo(RightBanner);
