import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";
import Education from "./components/Education";
import ProfessionalSkills from "./components/ProfessionalSkills";
import Achievement from "./components/Achievement";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import { createRipple } from "../layouts/RippleEffect";
import { motion } from "framer-motion";
import { tabData, LOCAL_STORAGE_KEY } from "./Resume.constants";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    const savedTab = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTab && tabData.some((tab) => tab.id === savedTab)) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
    localStorage.setItem(LOCAL_STORAGE_KEY, id);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
      id="resume"
      className="w-full xs:px-6 xl:px-20 lg:px-16 md:px-12 sm:px-8 py-8"
    >
      <Title title="4 YEARS OF EXPERIENCE" des="My Resume" />
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col xl:flex-row gap-6 w-full list-none p-0 m-0 rounded-xl cardView">
          {tabData.map(({ id, label }) => (
            <li key={id} className="flex-1 text-center">
              <button
                onClick={() => handleTabClick(id)}
                className={`w-full py-5 sm:py-8 md:py-5 lg:py-8 lg:text-lg rounded-xl font-medium outline-none border-none 
                transition-all duration-500 ease-in-out bg-transparent cursor-pointer whitespace-nowrap tracking-wider ripple-container ${
                  activeTab === id
                    ? "cardView rounded-xl bg-opacity-25 text-white"
                    : "text-lightText"
                }`}
                onMouseDown={createRipple}
                aria-label="Resume Tabs"
              >
                <span
                  className={`w-fit h-fit inline-block font-titleFont ${
                    activeTab === id
                      ? "textGradient"
                      : "text-gray-500 dark:text-lightText"
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full">
          {activeTab === "experience" && <Experience />}
          {activeTab === "skills" && <ProfessionalSkills />}
          {activeTab === "achievements" && <Achievement />}
          {activeTab === "certifications" && <Certifications />}
          {activeTab === "education" && <Education />}
        </div>
      </div>
    </motion.section>
  );
};

export default React.memo(Resume);
