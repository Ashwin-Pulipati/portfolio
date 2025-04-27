import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import ResumeCard from "./ResumeCard";
import { experienceData } from "../constants/ExperienceData";

const Experience = () => {
  const cardsContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "center start"],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 px-1 flex flex-col gap-10"
    >
      {/* Heading Section */}
      <div className="w-full">
        <div className="flex flex-col gap-4 font-titleFont">
          <p className="text-sm text-blue-700 dark:text-designColor tracking-[2px] font-bodyFont font-semibold">
            2020 - PRESENT
          </p>
          <h2 className="text-4xl font-bold" data-aos="fade-up">
            Manager, Engineer & Developer
          </h2>
        </div>
      </div>

      {/* Resume Cards Container */}
      <div
        ref={cardsContainerRef}
        className="relative w-full flex flex-col gap-10"
      >
        {/* Vertical timeline line (only behind the resume cards) */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0.5 top-0 w-[4px] h-full bg-none md:bg-gray-400 origin-top"
        />
        {experienceData.map((exp, index) => (
          <ResumeCard key={index} {...exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(Experience);
