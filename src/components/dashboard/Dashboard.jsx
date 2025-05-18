import React, { Suspense } from "react";
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
  
  return (
    <div className="w-full h-full bg-bodyColorWhite dark:bg-bodyColor text-gray-700 dark:text-white z-30 overflow-hidden">
          <SocialIconsSidebar />
      <Suspense fallback={<BannerSkeleton/>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<FeaturesSectionSkeleton/>}>
        <Features id="features" />
      </Suspense>
      <Suspense fallback={<ResumeSkeleton />}>
        <Resume id="features" />
      </Suspense>
      <Suspense fallback={<ContactFormSkeleton/>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default React.memo(Dashboard);