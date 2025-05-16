// import React from "react";
// import Banner from "../banner/Banner";
// import Contact from "../contact/Contact";
// import Features from "../features/Features";
// import Resume from "../resume/Resume";
// import SocialIconsSidebar from "../../global-components/SocialIconsSidebar";


// const Dashboard = () => {
  
//   return (
//     <div className="w-full h-full bg-bodyColorWhite dark:bg-bodyColor text-gray-700 dark:text-white z-30 overflow-hidden">
//       <SocialIconsSidebar />
//       <Banner />
//       <Features id="features" />
//       <Resume id="resume" />
//       <Contact />
//     </div>
//   );
// };

// export default React.memo(Dashboard);


import React, { Suspense, useEffect, useState } from "react";
// import SocialIconsSidebar from "../../global-components/SocialIconsSidebar";
const Banner = React.lazy(() => import("../banner/Banner"));
const Features = React.lazy(() => import("../features/Features"));
const Resume = React.lazy(() => import("../resume/Resume"));
const Contact = React.lazy(() => import("../contact/Contact"));
const SocialIconsSidebar = React.lazy(() =>
  import("../../global-components/SocialIconsSidebar")
);

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(null);
    useEffect(() => {
      const mql = window.matchMedia("(max-width: 768px)");
      const update = () => setIsMobile(mql.matches);
      mql.addEventListener("change", update);
      update();
      return () => mql.removeEventListener("change", update);
    }, []);
  return (
    <div className="w-full h-full bg-bodyColorWhite dark:bg-bodyColor text-gray-700 dark:text-white z-30 overflow-hidden">
      {isMobile === false && (
        <Suspense fallback={null}>
          <SocialIconsSidebar />
        </Suspense>
      )}
      <Suspense fallback={<div style={{ height: 300 }}>Loading banner…</div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div style={{ height: 600 }}>Loading features…</div>}>
        <Features id="features" />
      </Suspense>
      <Suspense fallback={<div style={{ height: 600 }}>Loading features…</div>}>
        <Resume id="features" />
      </Suspense>
      <Suspense fallback={<div style={{ height: 300 }}>Loading banner…</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default React.memo(Dashboard);