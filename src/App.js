// import React, { useState, useEffect, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/dashboard/Dashboard";
// import ProjectsList from "./components/projects/ProjectsList";
// import ProjectDetailLoader from "./components/projects/ProjectDetailLoader";
// import Navbar from "./components/navbar/Navbar";
// import BottomNavbar from "./components/navbar/BottomNavbar";
// import Footer from "./components/footer/Footer";
// import ScrollTo from "./global-components/ScrollTo";
// const CursorEffect = React.lazy(() =>
//   import("./components/cursor/CustomCursor")
// );

// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 0);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const [isMobile, setIsMobile] = useState(null);
//   useEffect(() => {
//     const mql = window.matchMedia("(max-width: 768px)");
//     const update = () => setIsMobile(mql.matches);
//     mql.addEventListener("change", update);
//     update();
//     return () => mql.removeEventListener("change", update);
//   }, []);

//   return (
//     <Router basename="/portfolio">
//       {isMobile === false && (
//         <Suspense fallback={null}>
//           <CursorEffect />
//         </Suspense>
//       )}
//       <div
//         className={`sticky z-50 bg-[#ECF0F3]/25 dark:bg-bodyColor/25 backdrop-blur-lg transition-all duration-300 ${
//           isScrolled
//             ? "xs:top-4 xs:mx-5 xs:rounded-full md:top-0 md:mx-0 md:rounded-none"
//             : "top-0 mx-0 rounded-none"
//         }`}
//       >
//         <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />
//       </div>

//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route
//           path="/features/:category"
//           element={
//             <ProjectsList onSearch={setSearchQuery} searchQuery={searchQuery} />
//           }
//         />
//         <Route
//           path="/features/:category/projects/:title"
//           element={
//             <ProjectDetailLoader
//               onSearch={setSearchQuery}
//               searchQuery={searchQuery}
//             />
//           }
//         />
//       </Routes>

//       <div className="xs:py-6 xs:pt-12 lg:py-0 lg:pt-0 top-0 z-50 bg-bodyColorWhite dark:bg-bodyColor">
//         <Footer />
//       </div>
//       <div className="xs:static md:sticky top-0 z-50">
//         <ScrollTo />
//       </div>
//       <div className="xs:static md:sticky top-0 z-50">
//         <BottomNavbar />
//       </div>
//     </Router>
//   );
// }

// export default React.memo(App);



// App.js
import React, { useState, useEffect, Suspense, lazy } from "react"; // Make sure 'lazy' is imported
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/dashboard/Dashboard"; // REMOVE THIS
// import ProjectsList from "./components/projects/ProjectsList"; // REMOVE THIS
// import ProjectDetailLoader from "./components/projects/ProjectDetailLoader"; // REMOVE THIS
import Navbar from "./components/navbar/Navbar";
import BottomNavbar from "./components/navbar/BottomNavbar";
import Footer from "./components/footer/Footer";
import ScrollTo from "./global-components/ScrollTo";

const CursorEffect = lazy(() => import("./components/cursor/CustomCursor"));

// Lazy load your route components
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const ProjectsList = lazy(() => import("./components/projects/ProjectsList"));
const ProjectDetailLoader = lazy(() => import("./components/projects/ProjectDetailLoader"));

// A fallback for your routes while they load
const RouteLoadingFallback = () => <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading page...</div>;

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobile, setIsMobile] = useState(null); // Initialize to null to avoid rendering CursorEffect prematurely
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    mql.addEventListener("change", update);
    update(); // Call update initially
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <Router basename="/portfolio">
      {isMobile === false && ( // isMobile will be true or false after useEffect, not null
        <Suspense fallback={null}> {/* fallback={null} is fine if you don't want a loader for the cursor */}
          <CursorEffect />
        </Suspense>
      )}
      <div
        className={`sticky z-50 bg-[#ECF0F3]/25 dark:bg-bodyColor/25 backdrop-blulg transition-all duration-300 ${
          isScrolled
            ? "xs:top-4 xs:mx-5 xs:rounded-full md:top-0 md:mx-0 md:rounded-none"
            : "top-0 mx-0 rounded-none"
        }`}
      >
        <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />
      </div>

      {/* Add Suspense around your Routes */}
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/features/:category"
            element={
              <ProjectsList onSearch={setSearchQuery} searchQuery={searchQuery} />
            }
          />
          <Route
            path="/features/:category/projects/:title"
            element={
              <ProjectDetailLoader
                onSearch={setSearchQuery}
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </Suspense>

      <div className="xs:py-6 xs:pt-12 lg:py-0 lg:pt-0 top-0 z-50 bg-bodyColorWhite dark:bg-bodyColor">
        <Footer />
      </div>
      <div className="xs:static md:sticky top-0 z-50"> {/* Consider if these stickies are always needed or can be optimized */}
        <ScrollTo />
      </div>
      <div className="xs:static md:sticky top-0 z-50">
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default React.memo(App);