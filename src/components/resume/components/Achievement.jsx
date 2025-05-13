import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { achievementData } from "../constants/AchievementData";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  const cardsContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "center start"],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 flex gap-20 xs:flex-col px-1"
    >
      <div className="w-full">
        <div className="pb-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-blue-700 dark:text-designColor tracking-[2px] font-bodyFont font-semibold">
            2020 - PRESENT
          </p>
          <h2 className="text-4xl font-bold" data-aos="fade-up">
            Company Experience
          </h2>
        </div>
        <div
          ref={cardsContainerRef}
          className="relative w-full flex flex-col gap-10"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0.5 top-0 w-[4px] h-full bg-none md:bg-gray-400 origin-top"
          />
          {achievementData.map((exp, index) => (
            <ResumeCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Achievement);
