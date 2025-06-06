// import React from "react";
// import { createPortal } from "react-dom";

// const CertificationsModal = ({ image, onClose }) =>
//   createPortal(
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//       onClick={onClose}
//     >
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           onClose();
//         }}
//         aria-label="Close"
//         className="absolute top-4 right-4 z-60"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 14 14"
//           width="1em"
//           height="1em"
//           className="w-7 h-7 text-rose-600 group-hover:text-rose-400 dark:text-rose-300 dark:group-hover:text-rose-400 duration-300 cursor-pointer"
//         >
//           <path
//             fill="currentColor"
//             fillRule="evenodd"
//             d="M.293.293a1 1 0 0 1 1.414 0l1.397 1.396L4.146.646A.5.5 0 0 1 5 1v3.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.354-.854L1.69 3.104L.293 1.707a1 1 0 0 1 0-1.414m9.016.245a.5.5 0 0 1 .545.108l1.043 1.043L12.293.293a1 1 0 1 1 1.414 1.414l-1.396 1.397l1.043 1.042A.5.5 0 0 1 13 5H9.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .309-.462M1 9a.5.5 0 0 0-.354.854l1.043 1.043l-1.396 1.396a1 1 0 1 0 1.414 1.414l1.397-1.396l1.042 1.043A.5.5 0 0 0 5 13V9.5a.5.5 0 0 0-.5-.5zm8 .5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .354.854l-1.043 1.043l1.396 1.396a1 1 0 0 1-1.414 1.414l-1.397-1.396l-1.042 1.043A.5.5 0 0 1 9 13z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       <div
//         className="relative max-w-3xl w-full p-4 rounded-xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <img
//           src={image}
//           alt="Certification Full View"
//           className="w-full h-auto rounded-xl"
//         />
//       </div>
//     </div>,
//     document.body
//   );

// export default CertificationsModal;



// CertificationsModal.jsx

import React from "react";
import { createPortal } from "react-dom";

const CertificationsModal = React.memo(({ image, onClose }) =>
  createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute top-4 right-4 z-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          width="1em"
          height="1em"
          className="w-7 h-7 text-rose-600 group-hover:text-rose-400 dark:text-rose-300 dark:group-hover:text-rose-400 duration-300 cursor-pointer"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M.293.293a1 1 0 0 1 1.414 0l1.397 1.396L4.146.646A.5.5 0 0 1 5 1v3.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.354-.854L1.69 3.104L.293 1.707a1 1 0 0 1 0-1.414m9.016.245a.5.5 0 0 1 .545.108l1.043 1.043L12.293.293a1 1 0 1 1 1.414 1.414l-1.396 1.397l1.043 1.042A.5.5 0 0 1 13 5H9.5a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .309-.462M1 9a.5.5 0 0 0-.354.854l1.043 1.043l-1.396 1.396a1 1 0 1 0 1.414 1.414l1.397-1.396l1.042 1.043A.5.5 0 0 0 5 13V9.5a.5.5 0 0 0-.5-.5zm8 .5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .354.854l-1.043 1.043l1.396 1.396a1 1 0 0 1-1.414 1.414l-1.397-1.396l-1.042 1.043A.5.5 0 0 1 9 13z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className="relative max-w-3xl w-full p-4 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt="Certification Full View"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>,
    document.body
  )
);

export default CertificationsModal;
