import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../constants/ProfessionalSkillsData";
import { useDarkMode } from "../../layouts/DarkMode";

const Skills = () => {
  const isDarkMode = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-4 px-1 pb-12"
    >
      {skillsData.map((category, catIndex) => (
        <div key={catIndex} className="w-full">
          <div className="pt-12">
            <p className="text-sm font-bodyFont text-blue-700 dark:text-designColor tracking-[2px] uppercase font-medium">
              {category.category.toUpperCase()}
            </p>
            {category.subCategories.map((subCat, subIndex) => (
              <div
                key={subIndex}
                className={`pt-6 flex flex-col gap-6 ${
                  category.category === "Development" && subIndex > 0
                    ? "mt-12"
                    : ""
                }`}
              >
                <h2
                  className="text-3xl md:text-4xl font-bold font-titleFont"
                  data-aos="fade-up"
                >
                  {subCat.title}
                </h2>
                <div className="flex gap-6 items-center" data-aos="zoom-in">
                  {subCat.items.map((item, itemIndex) => {
                    if (item.type === "icon") {
                      const Icon = item.component;
                      return (
                        <Icon
                          key={itemIndex}
                          style={{
                            color: isDarkMode
                              ? item.color
                              : item.color.toLowerCase() === "#ffffff"
                              ? "#000000"
                              : item.color,
                          }}
                          className={item.className || "w-11 h-11"}
                        />
                      );
                    } else if (item.type === "image") {
                      return (
                        <img
                          key={itemIndex}
                          src={item.src}
                          alt={item.alt}
                          className={item.className || "w-11 h-11"}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
