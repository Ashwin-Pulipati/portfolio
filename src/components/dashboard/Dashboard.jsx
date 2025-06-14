// Dashboard.jsx

import React, { Suspense, useMemo } from "react";
import SocialIconsSidebar from "../../global-components/SocialIconsSidebar";
import {
  BannerSkeleton,
  ContactFormSkeleton,
  FeaturesSectionSkeleton,
  ResumeSkeleton,
} from "../../global-components/SkeletonComponents";
const Banner = React.lazy(() => import("../banner/Banner"));
const Features = React.lazy(() => import("../features/Features"));
const Resume = React.lazy(() => import("../resume/Resume"));
const Contact = React.lazy(() => import("../contact/Contact"));

const Dashboard = () => {
  // Memoize the Suspense fallbacks so they aren’t re-created each render
  const BannerFallback = useMemo(() => <BannerSkeleton />, []);
  const FeaturesFallback = useMemo(() => <FeaturesSectionSkeleton />, []);
  const ResumeFallback = useMemo(() => <ResumeSkeleton />, []);
  const ContactFallback = useMemo(() => <ContactFormSkeleton />, []);

  return (
    <div className="w-full h-full bg-bodyColorWhite dark:bg-bodyColor text-gray-700 dark:text-white z-30 overflow-hidden">
      <SocialIconsSidebar />
      <Suspense fallback={BannerFallback}>
        <Banner />
      </Suspense>
      <Suspense fallback={FeaturesFallback}>
        <Features id="features" />
      </Suspense>
      <Suspense fallback={ResumeFallback}>
        <Resume id="features" />
      </Suspense>
      <Suspense fallback={ContactFallback}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default React.memo(Dashboard);
