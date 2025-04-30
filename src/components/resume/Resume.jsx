import React, { useEffect, useState } from "react";
import Title from "../layouts/Title";
import Education from "./components/Education";
import ProfessionalSkills from "./components/ProfessionalSkills";
import Achievement from "./components/Achievement";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import AOS from "aos";
import "aos/dist/aos.css";
import { createRipple } from "../layouts/RippleEffect";

const tabData = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Professional Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");
  // Initialize and refresh AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section
      id="resume"
      className="w-full xs:px-6 xl:px-20 lg:px-16 md:px-12 sm:px-8 py-8"
      data-aos="fade-up"
    >
      <div className="border-b border-b-gray-400 dark:border-b-black pb-10">
        <Title title="4 YEARS OF EXPERIENCE" des="My Resume" />
        <div  data-aos="zoom-in">
          <ul
            className="flex w-full list-none p-0 m-0 rounded-xl boxBgWhite shadow-shadowTwo dark:bg-boxBg dark:shadow-shadowOne 
          xs:flex-col sm:flex-col lg:flex-row md:flex-col md:gap-6 sm:gap-0 "
          >
            {tabData.map(({ id, label }) => (
              <li key={id} className="flex-1 text-center hover:text-white">
                <button
                  onClick={() => setActiveTab(id)}
                  className={`w-full xs:py-[20px] sm:py-[30px] lg:py-[30px] md:py-[20px] lg:text-lg font-medium outline-none border-none transition-all duration-500 ease-in-out bg-transparent rounded-xl cursor-pointer whitespace-nowrap tracking-wider ripple-container ${
                    activeTab === id
                      ? "w-fit h-fit font-semibold px-5 py-3 bg-gradient-to-br from-[#dee3e7] to-white shadow-shadowTwo dark:bg-gradient-to-tl dark:from-[#262a2e] dark:to-[#1f2022] dark:shadow-shadowOne rounded-xl bg-opacity-25 text-white"
                      : "text-lightText "
                    }`}
                  onMouseDown={createRipple}
                >
                  <span
                    className={`w-fit h-fit inline-block font-titleFont ${
                      activeTab === id
                        ? "bg-gradient-to-r from-[#46c28f] via-[#1aaabe] to-[#0584d9] dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] bg-clip-text text-transparent"
                        : "text-gray-500 dark:text-lightText"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {activeTab === "experience" && <Experience />}
        {activeTab === "skills" && <ProfessionalSkills />}
        {activeTab === "achievements" && <Achievement />}
        {activeTab === "certifications" && <Certifications />}
        {activeTab === "education" && <Education />}
      </div>
    </section>
  );
};

export default React.memo(Resume);