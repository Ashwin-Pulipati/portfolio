// import { motion, useScroll } from "framer-motion";
// import React, { useRef } from "react";
// import ResumeCard from "./ResumeCard";

// const Education = React.memo(() => {
//   const cardsContainerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: cardsContainerRef,
//     offset: ["start end", "center start"],
//   });
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full py-12 flex flex-col xl:flex-row gap-10 xl:gap-20 px-1.5"
//     >
//       <div className="w-full h-full">
//         <div className="pb-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm arrowIcon tracking-[2px] font-bodyFont font-semibold">
//             2022 - 2024
//           </p>
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, ease: "easeInOut" }}
//             viewport={{ once: true }}
//           >
//             Graduate
//           </motion.h2>
//         </div>
//         <div
//           ref={cardsContainerRef}
//           className="relative w-full flex flex-col gap-10"
//         >
//           <motion.div
//             style={{ scaleY: scrollYProgress }}
//             className="absolute left-0.5 top-0 w-1 h-full bg-none md:bg-gray-400 origin-top"
//           />
//           <ResumeCard
//             title="Masters in Computer Science"
//             subTitle="Rowan University, Glassboro, NJ"
//             result="3.81/4"
//             country="USA"
//             showCountry={true}
//           />
//           <ResumeCard
//             title="Bachelors in Electronics and Instrumentation Engineering"
//             subTitle="Amrita Vishwa Vidhyapeetham, Coimbatore, TN"
//             result="7.96/10"
//             country="IN"
//             showCountry={true}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// });

// export default React.memo(Education);


import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import ResumeCard from "./ResumeCard";

const Education = React.memo(() => {
  const cardsContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "center start"],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full py-12 px-1.5"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {/* Column 1: dates and heading */}
        <div className="flex flex-col gap-4 font-titleFont">
          <p className="text-sm arrowIcon tracking-[2px] font-bodyFont font-semibold">
            2022 - 2024
          </p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Graduate
          </motion.h2>
        </div>

        {/* Columns 2–3: timeline spine + cards */}
        <div
          ref={cardsContainerRef}
          className="relative md:col-span-2 flex flex-col gap-10"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0.5 top-0 md:w-1 bg-gray-400 origin-top h-full"
          />

          <ResumeCard
            title="Masters in Computer Science"
            subTitle="Rowan University, Glassboro, NJ"
            result="3.81/4"
            country="USA"
            showCountry={true}
          />
          <ResumeCard
            title="Bachelors in Electronics and Instrumentation Engineering"
            subTitle="Amrita Vishwa Vidhyapeetham, Coimbatore, TN"
            result="7.96/10"
            country="IN"
            showCountry={true}
          />
        </div>
      </div>
    </motion.div>
  );
});

export default Education;
