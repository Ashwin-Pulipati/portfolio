// import React from "react";
// import Banner from "../banner/Banner";
// import Contact from "../contact/Contact";
// import Features from "../features/Features";
// import Resume from "../resume/Resume";
// import SocialIconsSidebar from "./SocialIconsSidebar";


// const Dashboard = () => {
  
//   return (
//     <div className="w-full h-full bg-[#ECF0F3] text-gray-700 dark:bg-bodyColor dark:text-white z-30 overflow-hidden">
//       <SocialIconsSidebar />
//       <Banner />
//       <Features id="features" />
//       <Resume id="resume" />
//       <Contact />
//     </div>
//   );
// };

// export default React.memo(Dashboard);



// Dashboard.js
import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Banner from "../banner/Banner";
import SocialIconsSidebar from "./SocialIconsSidebar";

const Features  = React.lazy(() => import("../features/Features"));
const Resume    = React.lazy(() => import("../resume/Resume"));
const Contact   = React.lazy(() => import("../contact/Contact"));

function Dashboard() {
  const [refF, inViewF] = useInView({ triggerOnce: true, rootMargin: "0px 0px -200px 0px" });
  const [refR, inViewR] = useInView({ triggerOnce: true, rootMargin: "0px 0px -200px 0px" });

  return (
    <div>
      <SocialIconsSidebar />
      <Banner />

      <div ref={refF}>
        {inViewF && (
          <Suspense fallback={<div className="h-64 bg-gray-200 animate-pulse" />}>
            <Features id="features" />
          </Suspense>
        )}
      </div>

      <div ref={refR}>
        {inViewR && (
          <Suspense fallback={<div className="h-64 bg-gray-200 animate-pulse" />}>
            <Resume id="resume" />
          </Suspense>
        )}
      </div>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>
  );
}
export default React.memo(Dashboard);