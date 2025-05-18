// SkeletonComponents.jsx
import React from "react";

// 1. LeftBannerSkeleton
export const LeftBannerSkeleton = () => (
  <div className="animate-pulse flex flex-col gap-8 md:gap-10 lg:gap-12 w-full md:w-11/12">
    <div className="flex flex-col gap-4 md:gap-5">
      <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      <div className="w-3/4 h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="w-1/2 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded mt-2"></div>
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
    <div className="flex flex-col gap-16 lg:gap-20">
      <div className="flex items-center gap-4">
        <div className="w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
      <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
);

// 2. MediaSkeleton
export const MediaSkeleton = () => (
  <div className="animate-pulse flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-14 xl:gap-48 pt-8">
    <div className="flex flex-col gap-4">
      <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="flex gap-6">
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
    <div className="flex flex-col gap-4 mt-10 lg:mt-0">
      <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="flex gap-6 flex-wrap">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  </div>
);

// 3. RightBannerSkeleton
export const RightBannerSkeleton = () => (
  <div className="relative flex justify-center items-center w-full md:w-[57%] lg:w-[50%] ml-0 lg:ml-7">
    <div className="w-full max-w-sm lg:max-w-lg h-[19rem] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    <div className="absolute inset-x-0 h-4/5 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-lg -translate-y-[9%]"></div>
    <div className="absolute inset-x-0 h-4/5 right-5 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-md -z-20 translate-x-[7%] -translate-y-[12%]"></div>
    <div className="absolute inset-x-0 h-3/5 right-6 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-md -z-20 -translate-y-[12%] translate-x-[-1%]"></div>
  </div>
);

// 4. BannerSkeleton (composed)
export const BannerSkeleton = () => (
  <section className="relative w-full py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-center">
    <div className="grid grid-cols-1 xl:grid-cols-5 w-full">
      <div className="lg:col-span-3 order-2 xl:order-1 pt-0 md:pt-11 relative">
        <LeftBannerSkeleton />
        <div className="absolute hidden md:block top-0 md:top-16 lg:top-[6.5rem] xl:top-16 left-0 z-0 md:left-[16rem] md:z-50">
          <div className="w-48 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
      </div>
      <div className="col-span-0 lg:col-span-2 order-1 xl:order-2 relative">
        <RightBannerSkeleton />
      </div>
    </div>
  </section>
);


export const FeaturesCardSkeleton = () => (
  <div className="w-full p-6 md:p-8 lg:p-10 rounded-lg flex items-center cardView animate-pulse">
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {/* Icon placeholder */}
        <div className="w-16 h-16 rounded-xl bg-gray-200 dark:bg-gray-700"></div>
        {/* Title placeholder */}
        <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
        {/* Tags placeholder row */}
        <div className="flex flex-wrap gap-2">
          <div className="w-16 h-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="w-16 h-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
        {/* Description placeholder */}
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-4/6 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        {/* Arrow placeholder */}
        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full self-start"></div>
      </div>
    </div>
  </div>
);

export const FeaturesSectionSkeleton = () => (
  <section className="w-full px-2 md:px-6 lg:px-16 xl:px-20 py-14">
    {/* Header skeleton */}
    <div className="border-b border-b-gray-400 dark:border-b-black pb-24 mb-8 animate-pulse">
      <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>

    {/* Small screens: vertical list skeletons */}
    <div className="flex flex-col gap-6 md:hidden">
      {[...Array(4)].map((_, idx) => (
        <FeaturesCardSkeleton key={idx} />
      ))}
    </div>

    {/* Carousel skeleton for md+ screens */}
    <div className="hidden md:block">
      <div className="relative">
        <div className="overflow-hidden animate-pulse">
          <div className="flex space-x-4 -ml-4">
            <div className="flex-none w-full pl-4">
              <div className="grid grid-cols-2 grid-rows-2 gap-10 p-6">
                <FeaturesCardSkeleton />
                <FeaturesCardSkeleton />
                <FeaturesCardSkeleton />
                <FeaturesCardSkeleton />
              </div>
            </div>
          </div>
        </div>
        {/* Arrow skeletons */}
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
      {/* Dots skeletons */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </div>
    </div>
  </section>
);


export const ContactBannerSkeleton = () => (
  <div className="animate-pulse w-full xl:w-[35%] h-full p-6 md:p-10 lg:p-8 xl:p-9 flex flex-col gap-8 justify-center cardView rounded-lg">
    {/* Image Placeholder */}
    <div className="w-full h-44 md:h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
    {/* Name Placeholder */}
    <div className="w-1/2 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
    {/* Role Placeholder */}
    <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
    {/* Description Placeholder lines */}
    <div className="space-y-2 mb-4">
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
    {/* Contact Methods Placeholder */}
    <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
    </div>
  </div>
);

// 8. ContactFormSkeleton for Contact form (Contact.jsx)
export const ContactFormSkeleton = () => (
  <section className="w-full py-14 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 animate-pulse">
    <div className="border-b border-b-gray-400 dark:border-b-black pb-20 mb-8">
      <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Banner Skeleton */}
        <ContactBannerSkeleton />
        {/* Form Skeleton */}
        <div className="w-full xl:w-[60%] h-auto py-10 px-8 sm:px-6 md:px-10 xl:px-8 xl:py-8 flex flex-col gap-6 cardView rounded-lg">
          {/* Fields grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          {/* Message textarea skeleton */}
          <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
          {/* Submit button skeleton */}
          <div className="w-1/3 h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  </section>
);

export const TimelineSectionSkeleton = () => (
  <div className="py-12 px-1 animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1: date + heading */}
      <div className="flex flex-col gap-2 font-titleFont">
        <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      {/* Column 2–3: spine + cards */}
      <div className="md:col-span-2 flex flex-col gap-6">
        {/* spine placeholder */}
        <div className="w-1 bg-gray-200 dark:bg-gray-700 h-full absolute left-4"></div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"
          />
        ))}
      </div>
    </div>
  </div>
);

export const SkillsSkeleton = () => (
  <div className="w-full flex flex-col gap-4 px-1 pb-12 animate-pulse">
    {/* For each category */}
    {[...Array(2)].map((_, cat) => (
      <div key={cat}>
        <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="flex flex-wrap gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-11 h-11 bg-gray-200 dark:bg-gray-700 rounded-full"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);
export const CertificationsSkeleton = () => (
  <section className="w-full px-4 py-12 animate-pulse">
    {/* Heading */}
    <div className="w-40 h-6 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
    {/* Grid fallback for md+ */}
    <div className="hidden md:grid md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl"
        />
      ))}
    </div>
    {/* Single‑slide fallback for mobile */}
    <div className="block md:hidden">
      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl" />
    </div>
  </section>
);


export const ResumeCardSkeleton = () => (
  <div className="w-full group flex animate-pulse">
    {/* Timeline dot hidden on xs */}
    <div className="hidden md:flex flex-col items-center gap-2.5">
      <div className="w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      <div className="w-4 h-[4px] bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div className="w-full rounded-lg p-6 bg-gray-100 dark:bg-gray-800">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      {/* Bullets */}
      <ul className="list-disc ml-6 space-y-2">
        {[...Array(3)].map((_, i) => (
          <li
            key={i}
            className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"
          />
        ))}
      </ul>
    </div>
  </div>
);


export const ResumeSkeleton = () => (
  <section className="w-full xs:px-6 xl:px-20 lg:px-16 md:px-12 sm:px-8 py-8 animate-pulse">
    {/* Title */}
    <div className="w-1/3 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
    {/* Tabs */}
    <ul className="flex flex-col xl:flex-row gap-4 mb-8">
      {[...Array(5)].map((_, i) => (
        <li key={i} className="flex-1">
          <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </li>
      ))}
    </ul>
    {/* Active panel */}
    <div className="w-full">
      {/* Just one big placeholder: exact height depends on which pane */}
      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  </section>
);

