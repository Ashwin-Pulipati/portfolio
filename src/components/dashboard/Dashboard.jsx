import React from "react";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Features from "../features/Features";
import Resume from "../resume/Resume";
import SocialIconsSidebar from "../../global-components/SocialIconsSidebar";


const Dashboard = () => {
  
  return (
    <div className="w-full h-full bg-bodyColorWhite dark:bg-bodyColor text-gray-700 dark:text-white z-30 overflow-hidden">
      <SocialIconsSidebar />
      <Banner />
      <Features id="features" />
      <Resume id="resume" />
      <Contact />
    </div>
  );
};

export default React.memo(Dashboard);