// import React, { useState, useCallback } from "react";
// import { BiExpand } from "react-icons/bi";


// const ViewCardImage = ({ src }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = useCallback(() => {
//     setIsExpanded((prev) => !prev);
//   }, []);

//   return (
//     <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
//       {isExpanded ? (
//         <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center z-50">
//           <img
//             className="w-full max-w-5xl mx-auto object-cover"
//             src={src}
//             alt="Expanded project"
//           />
//           <div className="text-rose-400 dark:text-rose-600 group-hover:text-rose-600 dark:group-hover:text-rose-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 14 14"
//               width="1em"
//               height="1em"
//               className="w-8 h-8 absolute top-5 right-8 duration-300 cursor-pointer"
//               onClick={toggleExpand}
//               aria-label="Collapse"
//             >
//               <path
//                 fill="currentColor"
//                 fillRule="evenodd"
//                 d="M.293.293a1 1 0 0 1 1.414 0l1.397 1.396L4.146.646A.5.5 0 0 1 5 1v3.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.354-.854L1.69 3.104L.293 1.707a1 1 0 0 1 0-1.414m9.016.245a.5.5 0 0 1 .545.108l1.043 1.043L12.293.293a1 1 0 1 1 1.414 1.414l-1.396 1.397l1.043 1.042A.5.5 0 0 1 13 5H9.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .309-.462M1 9a.5.5 0 0 0-.354.854l1.043 1.043l-1.396 1.396a1 1 0 1 0 1.414 1.414l1.397-1.396l1.042 1.043A.5.5 0 0 0 5 13V9.5a.5.5 0 0 0-.5-.5zm8 .5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .354.854l-1.043 1.043l1.396 1.396a1 1 0 0 1-1.414 1.414l-1.397-1.396l-1.042 1.043A.5.5 0 0 1 9 13z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>
//       ) : (
//         <>
//           <img
//             className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 duration-300 cursor-pointer"
//             src={src}
//             alt="project"
//           />
//           <BiExpand
//             className="w-5 h-5 absolute top-3 right-3 text-md duration-300 cursor-pointer text-rose-400 dark:text-rose-600 hover:text-rose-600 dark:hover:text-rose-400"
//             onClick={toggleExpand}
//             aria-label="Expand"
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default React.memo(ViewCardImage);



// import React, { useState, useCallback } from "react";
// import { BiExpand } from "react-icons/bi";

// const ViewCardImage = ({ src }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = useCallback(() => {
//     setIsExpanded((prev) => !prev);
//   }, []);

//   return (
//     <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
//       {isExpanded ? (
//         <div
//           className="fixed inset-0 w-screen bg-black bg-opacity-80 flex justify-center items-center z-50"
//           style={{ height: "100dvh" }}
//         >
//           <img
//             className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
//             src={src}
//             alt="Expanded project"
//           />
//           <button
//             onClick={toggleExpand}
//             aria-label="Collapse"
//             className="absolute top-5 right-8 w-8 h-8 cursor-pointer text-rose-400 dark:text-rose-600 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 14 14"
//               fill="currentColor"
//               className="w-full h-full"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M.293.293a1 1 0 0 1 1.414 0l1.397 1.396L4.146.646A.5.5 0 0 1 5 1v3.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.354-.854L1.69 3.104L.293 1.707a1 1 0 0 1 0-1.414m9.016.245a.5.5 0 0 1 .545.108l1.043 1.043L12.293.293a1 1 0 1 1 1.414 1.414l-1.396 1.397l1.043 1.042A.5.5 0 0 1 13 5H9.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .309-.462M1 9a.5.5 0 0 0-.354.854l1.043 1.043l-1.396 1.396a1 1 0 1 0 1.414 1.414l1.397-1.396l1.042 1.043A.5.5 0 0 0 5 13V9.5a.5.5 0 0 0-.5-.5zm8 .5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .354.854l-1.043 1.043l1.396 1.396a1 1 0 0 1-1.414 1.414l-1.397-1.396l-1.042 1.043A.5.5 0 0 1 9 13z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>
//       ) : (
//         <>
//           <img
//             className="absolute top-0 left-0 w-full h-full object-cover duration-300"
//             src={src}
//             alt="project"
//           />
//           <div className="absolute top-3 right-3 group/expand-icon">
//             <BiExpand
//               onClick={toggleExpand}
//               aria-label="Expand"
//               className="w-5 h-5 text-md cursor-pointer text-rose-400 dark:text-rose-600 group-hover/expand-icon:text-rose-600 dark:group-hover/expand-icon:text-rose-400 transition-colors duration-300"
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default React.memo(ViewCardImage);

import React, { useState, useCallback } from "react";
import { BiExpand } from "react-icons/bi";

const ViewCardImage = ({ src }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 pb-[56.25%] relative overflow-hidden rounded-xl">
      {isExpanded ? (
        <div
          onClick={toggleExpand}
          className="fixed inset-0 w-screen h-[100dvh] bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
          <img
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl"
            src={src}
            alt="Expanded project"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
            aria-label="Collapse"
            className="absolute top-5 right-8 w-8 h-8 cursor-pointer text-rose-400 dark:text-rose-600 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
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
      ) : (
        <>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover duration-300"
            src={src}
            alt="project"
          />
          <div className="absolute top-3 right-3">
            <BiExpand
              onClick={toggleExpand}
              aria-label="Expand"
              className="w-5 h-5 cursor-pointer text-rose-400 dark:text-rose-600 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ViewCardImage;