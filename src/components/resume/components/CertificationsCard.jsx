// import React, { useState } from "react";
// import {
//   certificationsGradientMap,
// } from "../Resume.constants";
// import { slugify } from "../../layouts/Utils";
// import { useDarkMode } from "../../layouts/DarkMode";

// const CertificationsCard = React.memo(({ item }) => {
//   const isDarkMode = useDarkMode();
//   const cardSlug = slugify(item.title);
//   const gradients = certificationsGradientMap[cardSlug];

//   const [isHovered, setIsHovered] = useState(false);

//   const computedHoverStyle =
//     isHovered && gradients
//       ? { backgroundImage: isDarkMode ? gradients.dark : gradients.light }
//       : {};
  
//   return (
//     <div
//       className="w-full p-6 md:p-8 lg:p-10 rounded-2xl cardView group cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={computedHoverStyle}
//     >
//       <div className="w-full">
//         <div className="flex flex-col gap-6 transform transition-transform duration-300 ease-in-out">
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
//             <img
//               className="absolute top-0 left-0 w-full h-full object-contain group-hover:scale-105 duration-300 cursor-pointer"
//               src={item.image}
//               alt="Certification"
//             />
//           </div>
//           <div className="flex items-center flex-wrap gap-2">
//             <h3 className="text-lg font-bold text-gray-700 group-hover:text-black dark:group-hover:text-white dark:text-lightText">
//               {item.title}
//             </h3>
//             {/* <div onClick={handleCardClick} className="cursor-pointer">
//               <FiExternalLink className="w-5 h-5 text-gray-700 group-hover:text-black dark:group-hover:text-white dark:text-lightText" />
//             </div> */}
//             <div className="text-lg font-semibold text-gray-700 group-hover:text-black dark:group-hover:text-white dark:text-lightText">
//               ({item.platform})
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default React.memo(CertificationsCard);

// import React, { useState } from "react";
// import { certificationsGradientMap } from "../Resume.constants";
// import { slugify } from "../../layouts/Utils";
// import { useDarkMode } from "../../layouts/DarkMode";
// import CertificationsModal from "./CertificationsModal";
// import { BiExpand } from "react-icons/bi";

// const CertificationsCard = ({ item }) => {
//   const isDarkMode = useDarkMode();
//   const cardSlug = slugify(item.title);
//   const gradients = certificationsGradientMap[cardSlug];

//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const { points = [] } = item;

//   const computedHoverStyle =
//     isHovered && gradients
//       ? { backgroundImage: isDarkMode ? gradients.dark : gradients.light }
//       : {};

//   const toggleModal = () => setIsModalOpen((prev) => !prev);

//   return (
//     <>
//       <div
//         className="w-full p-6 md:p-8 lg:p-10 rounded-2xl cardView group cursor-pointer"
//         style={computedHoverStyle}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="flex flex-col gap-6 transform transition-transform duration-300 ease-in-out">
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
//             <img
//               className="absolute top-0 left-0 w-full h-full object-contain rounded-xl group-hover:scale-105 duration-300 cursor-pointer"
//               src={item.image}
//               alt={`${item.title} certification`}
//             />
//             <BiExpand
//               className="w-7 h-7 absolute top-2 right-2 duration-300 cursor-pointer text-violet-600 group-hover:text-violet-400 dark:text-violet-300 dark:group-hover:text-violet-400"
//               onClick={toggleModal}
//               aria-label="Expand"
//             />
//           </div>

//           <div className="flex items-center flex-wrap gap-2 textGradient font-titleFont">
//             <h3 className="text-lg font-bold group-hover:text-black dark:group-hover:text-white">
//               {item.title}
//             </h3>
//             <span className="text-lg font-semibold group-hover:text-black dark:group-hover:text-white">
//               ({item.platform})
//             </span>
//           </div>

//           <div>
//             <h4 className="font-titleFont text-md text-gray-700 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white font-semibold">
//               Learnings:
//             </h4>
//             {points.length > 0 && (
//               <ul className="list-disc ml-6 font-bodyFont group mt-2">
//                 {(isExpanded ? points : points.slice(0, 3)).map(
//                   (point, idx) => (
//                     <li
//                       key={idx}
//                       className="mb-2 marker:text-blue-700 dark:marker:text-cyan-400"
//                     >
//                       <div className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white duration-300 break-all">
//                         {point}
//                       </div>
//                     </li>
//                   )
//                 )}
//               </ul>
//             )}

//             {points.length > 3 && (
//               <button
//                 onClick={() => setIsExpanded((prev) => !prev)}
//                 className="arrowIcon text-sm text-center font-semibold font-bodyFont hover:underline mt-1 tracking-[1px]"
//                 aria-label="Toggle Bullet Points"
//               >
//                 {isExpanded ? "Read Less" : "Read More"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <CertificationsModal image={item.image} onClose={toggleModal} />
//       )}
//     </>
//   );
// };

// export default CertificationsCard;


// CertificationsCard.jsx

import React, { useState, useCallback, useMemo } from "react";
import { certificationsGradientMap } from "../Resume.constants";
import { slugify } from "../../layouts/Utils";
import { useDarkMode } from "../../layouts/DarkMode";
import CertificationsModal from "./CertificationsModal";
import { BiExpand } from "react-icons/bi";

const CertificationsCard = ({ item }) => {
  const isDarkMode = useDarkMode();
  const cardSlug = slugify(item.title);
  const gradients = certificationsGradientMap[cardSlug];

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const { points = [] } = item;

  const computedHoverStyle = useMemo(
    () =>
      isHovered && gradients
        ? { backgroundImage: isDarkMode ? gradients.dark : gradients.light }
        : {},
    [isHovered, gradients, isDarkMode]
  );

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const bulletPoints = useMemo(
    () =>
      (isExpanded ? points : points.slice(0, 3)).map((point, idx) => (
        <li
          key={idx}
          className="mb-2 marker:text-blue-700 dark:marker:text-cyan-400"
        >
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white duration-300 break-all">
            {point}
          </div>
        </li>
      )),
    [isExpanded, points]
  );

  return (
    <>
      <div
        className="w-full p-6 md:p-8 lg:p-10 rounded-2xl cardView group cursor-pointer"
        style={computedHoverStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col gap-6 transform transition-transform duration-300 ease-in-out">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
            <img
              className="absolute top-0 left-0 w-full h-full object-contain rounded-xl group-hover:scale-105 duration-300 cursor-pointer"
              src={item.image}
              alt={`${item.title} certification`}
            />
            <div className="absolute top-0 right-0 p-2.5 bg-white/80 dark:bg-black/60 rounded-full ">
              <BiExpand
                className="w-5 h-5 text-rose-400  group-hover:text-rose-600 dark:text-rose-600 dark:group-hover:text-rose-400 duration-300 cursor-pointer"
                onClick={toggleModal}
                aria-label="Expand"
              />
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2 textGradient font-titleFont">
            <h3 className="text-lg font-bold group-hover:text-black dark:group-hover:text-white">
              {item.title}
            </h3>
            <span className="text-lg font-semibold group-hover:text-black dark:group-hover:text-white">
              ({item.platform})
            </span>
          </div>

          <div>
            <h4 className="font-titleFont text-md text-gray-700 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white font-semibold">
              Learnings:
            </h4>
            {points.length > 0 && (
              <ul className="list-disc ml-6 font-bodyFont group mt-2">
                {bulletPoints}
              </ul>
            )}

            {points.length > 3 && (
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="arrowIcon text-sm text-center font-semibold font-bodyFont hover:underline mt-1 tracking-[1px]"
                aria-label="Toggle Bullet Points"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CertificationsModal image={item.image} onClose={toggleModal} />
      )}
    </>
  );
};

export default React.memo(CertificationsCard);

