// import React from "react";
// import banner from "../../../assets/images/Webp/banner-right.webp";

// const RightBanner = React.memo(() => (
//   <div className="relative flex justify-center items-center w-full md:w-[57%] lg:w-[50%] xl:w-[87.5%] ml-0 lg:ml-7">
//     <div
//       className="w-full max-w-sm lg:max-w-lg rounded-lg bg-cover bg-center bg-no-repeat z-30 -translate-y-[7%]
//        sm:-translate-y-[4%] md:-translate-y-[4%] lg:-translate-y-[0%] xl:-translate-y-[3%] "
//       style={{ backgroundImage: `url(${banner})`, aspectRatio: "8 / 12" }}
//     />
//     <div
//       className="absolute inset-x-0 h-4/5 bottom-0 rounded-lg z-0 -translate-y-[9%] sm:-translate-y-[5%] md:-translate-y-[5%]
//       lg:-translate-y-[0%] xl:-translate-y-[4%] cardView rounded-lg"
//     />
//     <div
//       className="absolute inset-x-0 h-4/5 -translate-y-[12%] sm:-translate-y-[8%] md:-translate-y-[8%] lg:-translate-y-[3%]
//       xl:-translate-y-[7%] right-5 bottom-0 border border-gray-400 rounded-md -z-20 translate-x-[7%] elevatedShadow "
//     />
//     <div
//       className="absolute inset-x-0 h-3/5 -translate-x-[1%] -translate-y-[10%] sm:-translate-y-[4%] md:-translate-y-[4%] lg:-translate-y-[-3%]
//       xl:-translate-y-[4%] right-6 bottom-0 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-700 dark:from-emerald-500
//       dark:via-cyan-600 dark:to-blue-800 opacity-75 blur transition duration-500 rounded-md -z-20 border
//       border-gray-700 dark:border-gray-200 elevatedShadow "
//     />
//   </div>
// ));

// export default React.memo(RightBanner);


import React from "react";
import banner from "../../../assets/images/Webp/banner-right.webp";

const RightBanner = React.memo(() => (
  // Main container - needs relative positioning for the absolute children.
  <div className="relative flex justify-center items-center w-full md:w-[57%] lg:w-[50%] xl:w-[87.5%] ml-0 lg:ml-7">
    {/* *** USE <img> TAG FOR LCP ELEMENT *** */}
    <img
      src={banner}
      alt="Ashwin Pulipati portfolio banner" // *** Add descriptive alt text! ***
      className="w-full max-w-sm lg:max-w-lg rounded-lg object-cover z-30 -translate-y-[7%]
                 sm:-translate-y-[4%] md:-translate-y-[4%] lg:-translate-y-[0%] xl:-translate-y-[3%]"
      style={{ aspectRatio: "8 / 12" }}
      loading="eager" // *** Ensure it's not lazy loaded ***
      fetchpriority="high" // *** ADD THIS - CRITICAL ***
      decoding="async" // Good to keep
      width="512" // Add approximate width/height if known
      height="768" // (Based on 8/12 ratio - adjust if needed)
    />

    {/* Background/Shadow Elements (Positioned Absolutely) */}
    {/* These remain the same, but ensure they are positioned relative to the container */}
    <div
      className="absolute inset-x-0 h-4/5 bottom-0 rounded-lg z-0 -translate-y-[9%] sm:-translate-y-[5%] md:-translate-y-[5%]
      lg:-translate-y-[0%] xl:-translate-y-[4%] cardView rounded-lg"
    />
    <div
      className="absolute inset-x-0 h-4/5 -translate-y-[12%] sm:-translate-y-[8%] md:-translate-y-[8%] lg:-translate-y-[3%]
      xl:-translate-y-[7%] right-5 bottom-0 border border-gray-400 rounded-md -z-20 translate-x-[7%] elevatedShadow"
      /* Fixed 'bordegray' */
    />
    <div
      className="absolute inset-x-0 h-3/5 -translate-x-[1%] -translate-y-[10%] sm:-translate-y-[4%] md:-translate-y-[4%] lg:-translate-y-[-3%]
      xl:-translate-y-[4%] right-6 bottom-0 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-700 dark:from-emerald-500 
      dark:via-cyan-600 dark:to-blue-800 opacity-75 blur transition duration-500 rounded-md -z-20 border
      border-gray-700 dark:border-gray-200 elevatedShadow"
      /* Fixed 'bordegray' */
    />
  </div>
));

export default React.memo(RightBanner);