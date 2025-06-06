// import { motion } from "framer-motion";
// import React from "react";
// import { useDarkMode } from "../../layouts/DarkMode";
// import { skillsData } from "../Resume.constants";

// const Skills = () => {
//   const isDarkMode = useDarkMode();

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col gap-4 px-1 pb-12"
//     >
//       {skillsData.map((category, catIndex) => (
//         <div key={catIndex} className="w-full">
//           <div className="pt-12">
//             <p className="text-sm font-bodyFont arrowIcon font-semibold tracking-[2px] uppercase">
//               {category.category.toUpperCase()}
//             </p>
//             {category.subCategories.map((subCat, subIndex) => (
//               <motion.div
//                 key={subIndex}
//                 className={`pt-6 flex flex-col gap-6 ${
//                   category.category === "Development" && subIndex > 0
//                     ? "mt-12"
//                     : ""
//                 }`}
//               >
//                 <motion.h2
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   viewport={{ once: true }}
//                   className="text-3xl md:text-4xl font-bold font-titleFont"
//                 >
//                   {subCat.title}
//                 </motion.h2>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.7, ease: "easeOut" }}
//                   viewport={{ once: true }}
//                   className="flex gap-6 items-center flex-wrap"
//                 >
//                   {subCat.items.map((item, itemIndex) => {
//                     const commonProps = {
//                       key: itemIndex,
//                       className: item.className || "w-11 h-11",
//                     };
                    
//                     return item.type === "icon" ? (
//                       <item.component
//                         {...commonProps}
//                         style={{
//                           color: isDarkMode
//                             ? item.color
//                             : item.color.toLowerCase() === "#ffffff"
//                             ? "#000000"
//                             : item.color,
//                         }}
//                       />
//                     ) : (
//                       <img {...commonProps} src={item.src} alt={item.alt} />
//                     );
//                   })}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default React.memo(Skills);



// import React from "react";
// import { motion } from "framer-motion";
// import { useDarkMode } from "../../layouts/DarkMode";
// import { skillsData } from "../Resume.constants";

// // Utility to chunk arrays
// const chunkArray = (arr, size) =>
//   Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
//     arr.slice(i * size, i * size + size)
//   );

// const Skills = () => {
//   const isDarkMode = useDarkMode();

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col gap-4 px-1 pb-12"
//     >
//       {skillsData.map((category, catIndex) => (
//         <div key={catIndex} className="w-full">
//           <div className="pt-12">
//             <p className="text-sm font-bodyFont arrowIcon font-semibold tracking-[2px] uppercase">
//               {category.category.toUpperCase()}
//             </p>
//             {category.subCategories.map((subCat, subIndex) => (
//               <motion.div
//                 key={subIndex}
//                 className={`pt-6 flex flex-col gap-6 ${
//                   category.category === "Development" && subIndex > 0
//                     ? "mt-12"
//                     : ""
//                 }`}
//               >
//                 <motion.h2
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   viewport={{ once: true }}
//                   className="text-3xl md:text-4xl font-bold font-titleFont"
//                 >
//                   {subCat.title}
//                 </motion.h2>

//                 {/* Chunked groups to prevent excessive children */}
//                 {chunkArray(subCat.items, 10).map((group, groupIndex) => (
//                   <motion.div
//                     key={groupIndex}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                     viewport={{ once: true }}
//                     className="flex gap-6 items-center flex-wrap"
//                   >
//                     {group.map((item, itemIndex) => {
//                       const commonProps = {
//                         key: itemIndex,
//                         className: item.className || "w-11 h-11",
//                       };

//                       return item.type === "icon" ? (
//                         <item.component
//                           {...commonProps}
//                           style={{
//                             color: isDarkMode
//                               ? item.color
//                               : item.color.toLowerCase() === "#ffffff"
//                               ? "#000000"
//                               : item.color,
//                           }}
//                         />
//                       ) : (
//                         <img {...commonProps} src={item.src} alt={item.alt} />
//                       );
//                     })}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default React.memo(Skills);



// ProfessionalSkills.jsx

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../layouts/DarkMode";
import { skillsData } from "../Resume.constants";

// Utility to chunk arrays
const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Skills = () => {
  const isDarkMode = useDarkMode();

  const categorySections = useMemo(
    () =>
      skillsData.map((category, catIndex) => {
        const subSections = category.subCategories.map((subCat, subIndex) => {
          const groups = chunkArray(subCat.items, 10).map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex gap-6 items-center flex-wrap"
            >
              {group.map((item, itemIndex) => {
                const commonProps = {
                  key: itemIndex,
                  className: item.className || "w-11 h-11",
                };

                return item.type === "icon" ? (
                  <item.component
                    {...commonProps}
                    style={{
                      color: isDarkMode
                        ? item.color
                        : item.color.toLowerCase() === "#ffffff"
                        ? "#000000"
                        : item.color,
                    }}
                  />
                ) : (
                  <img {...commonProps} src={item.src} alt={item.alt} />
                );
              })}
            </motion.div>
          ));

          return (
            <motion.div
              key={subIndex}
              className={`pt-6 flex flex-col gap-6 ${
                category.category === "Development" && subIndex > 0
                  ? "mt-12"
                  : ""
              }`}
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-titleFont"
              >
                {subCat.title}
              </motion.h2>
              {groups}
            </motion.div>
          );
        });

        return (
          <div key={catIndex} className="w-full">
            <div className="pt-12">
              <p className="text-sm font-bodyFont arrowIcon font-semibold tracking-[2px] uppercase">
                {category.category.toUpperCase()}
              </p>
              {subSections}
            </div>
          </div>
        );
      }),
    [isDarkMode]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-4 px-1 pb-12"
    >
      {categorySections}
    </motion.div>
  );
};

export default React.memo(Skills);
