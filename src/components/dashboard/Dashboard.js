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



import React, { lazy, Suspense, useRef, useState, useEffect } from "react";
import SocialIconsSidebar from "./SocialIconsSidebar";

// Lazy imports
const Banner = lazy(() => import("../banner/Banner"));
const Features = lazy(() => import("../features/Features"));
const Resume = lazy(() => import("../resume/Resume"));
const Contact = lazy(() => import("../contact/Contact"));

// IntersectionObserver wrapper to defer below‐the‐fold
function LazyOnView({ Component, id }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { root: null, rootMargin: "0px", threshold: 0.1, initialRender: false }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={ref}>
      {show && <Component id={id} />}
    </div>
  );
}

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-[#ECF0F3] text-gray-700 dark:bg-bodyColor dark:text-white overflow-hidden">
      <SocialIconsSidebar />

      <Suspense
        fallback={<div className="h-96 flex-center">Loading banner…</div>}
      >
        <Banner />
      </Suspense>

      {/* Below‐the‐fold sections */}
      <Suspense fallback={null}>
        <LazyOnView Component={Features} id="features" />
        <LazyOnView Component={Resume} id="resume" />
        <LazyOnView Component={Contact} />
      </Suspense>
    </div>
  );
};

export default React.memo(Dashboard);
