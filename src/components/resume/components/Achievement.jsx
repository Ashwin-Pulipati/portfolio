// import { motion, useScroll } from "framer-motion";
// import React, { useRef } from "react";
// import { achievementData } from "../Resume.constants";
// import ResumeCard from "./ResumeCard";

// const Achievement = () => {
//   const cardsContainerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: cardsContainerRef,
//     offset: ["start end", "center start"],
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="py-12 flex gap-20 xs:flex-col px-1"
//     >
//       <div className="w-full">
//         <div className="pb-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm arrowIcon tracking-[2px] font-bodyFont font-semibold">
//             2020 - PRESENT
//           </p>
//           <motion.h2
//             className="text-4xl font-bold"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             viewport={{ once: true }}
//           >
//             Company Experience
//           </motion.h2>
//         </div>
//         <div
//           ref={cardsContainerRef}
//           className="relative w-full flex flex-col gap-10"
//         >
//           <motion.div
//             style={{ scaleY: scrollYProgress }}
//             className="absolute left-0.5 top-0 w-[4px] h-full bg-none md:bg-gray-400 origin-top"
//           />
//           {achievementData.map((exp, index) => (
//             <ResumeCard key={index} {...exp} />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default React.memo(Achievement);



// import { motion, useScroll } from "framer-motion";
// import React, { useRef } from "react";
// import { achievementData } from "../Resume.constants";
// import ResumeCard from "./ResumeCard";

// const Achievement = () => {
//   const cardsContainerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: cardsContainerRef,
//     offset: ["start end", "center start"],
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="
//         py-12 px-1
//         flex flex-col gap-10
//         md:grid md:grid-cols-3 md:gap-8
//       "
//     >
//       {/* Left column: period + heading */}
//       <div className="col-span-1">
//         <div className="pb-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm arrowIcon tracking-[2px] font-bodyFont font-semibold">
//             2020 - PRESENT
//           </p>
//           <motion.h2
//             className="text-4xl font-bold"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             viewport={{ once: true }}
//           >
//             Company Experience
//           </motion.h2>
//         </div>
//       </div>

//       {/* Right column: timeline + cards */}
//       <div
//         ref={cardsContainerRef}
//         className="relative md:col-span-2 flex flex-col gap-10"
//       >
//         <motion.div
//           style={{ scaleY: scrollYProgress }}
//           className="absolute left-0.5 top-0 md:w-[4px] h-full bg-none md:bg-gray-400 origin-top"
//         />
//         {achievementData.map((exp, idx) => (
//           <ResumeCard key={idx} {...exp} />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default React.memo(Achievement);


// Achievement.jsx

import { motion, useScroll } from "framer-motion";
import React, { useRef, useMemo } from "react";
import { achievementData } from "../Resume.constants";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  const cardsContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "center start"],
  });

  const cards = useMemo(
    () =>
      achievementData.map((exp, idx) => (
        <ResumeCard key={idx} {...exp} />
      )),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="
        py-12 px-1 
        flex flex-col gap-10       
        md:grid md:grid-cols-3 md:gap-8 
      "
    >
      <div className="col-span-1">
        <div className="pb-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm arrowIcon tracking-[2px] font-bodyFont font-semibold">
            2020 - PRESENT
          </p>
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Company Experience
          </motion.h2>
        </div>
      </div>

      <div
        ref={cardsContainerRef}
        className="relative md:col-span-2 flex flex-col gap-10"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0.5 top-0 md:w-[4px] h-full bg-none md:bg-gray-400 origin-top"
        />
        {cards}
      </div>
    </motion.div>
  );
};

export default React.memo(Achievement);
