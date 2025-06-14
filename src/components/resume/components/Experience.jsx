// Experience.jsx

import { motion, useScroll } from "framer-motion";
import React, { useRef, useMemo } from "react";
import { experienceData } from "../Resume.constants";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  const cardsContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "center start"],
  });

  const cards = useMemo(
    () =>
      experienceData.map((exp, index) => (
        <ResumeCard key={index} {...exp} />
      )),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 px-1"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 font-titleFont">
          <p className="text-sm arrowIcon tracking-[2px] font-bodyFont font-semibold">
            2020 - PRESENT
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Engineer, Manager & Developer
          </motion.h2>
        </div>

        <div
          ref={cardsContainerRef}
          className="relative md:col-span-2 flex flex-col gap-10"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0.5 top-0 md:w-[4px] h-full bg-gray-400 origin-top"
          />
          {cards}
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(Experience);
