import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectsList from "./components/projects/ProjectsList";
import ProjectDetailLoader from "./components/projects/ProjectDetailLoader";
import Navbar from "./components/navbar/Navbar";
import CursorEffect from "./components/cursor/CustomCursor";
import BottomNavbar from "./components/navbar/BottomNavbar";
import Footer from "./components/footer/Footer";
import ScrollTo from "./global-components/ScrollTo";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router basename="/portfolio">
      <CursorEffect />
      <div
        className={`sticky z-50 bg-[#ECF0F3]/25 dark:bg-bodyColor/25 backdrop-blur-lg transition-all duration-300 ${
          isScrolled
            ? "xs:top-4 xs:mx-5 xs:rounded-full md:top-0 md:mx-0 md:rounded-none"
            : "top-0 mx-0 rounded-none"
        }`}
      >
        <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />
      </div>

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

      <div className="xs:py-6 xs:pt-12 lg:py-0 lg:pt-0 top-0 z-50 bg-bodyColorWhite dark:bg-bodyColor">
        <Footer />
      </div>
      <div className="xs:static md:sticky top-0 z-50">
        <ScrollTo />
      </div>
      <div className="xs:static md:sticky top-0 z-50">
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default React.memo(App);
