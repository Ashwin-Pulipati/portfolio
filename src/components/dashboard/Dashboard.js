import React from "react";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Features from "../features/Features";
import Resume from "../resume/Resume";
import SocialIconsSidebar from "./SocialIconsSidebar";


const Dashboard = () => {
  
  return (
    <div className="w-full h-full bg-[#ECF0F3] text-gray-700 dark:bg-bodyColor dark:text-white z-30 overflow-hidden">
      <SocialIconsSidebar />
      <Banner />
      <Features id="features" />
      <Resume id="resume" />
      <Contact />
    </div>
  );
};

export default React.memo(Dashboard);
