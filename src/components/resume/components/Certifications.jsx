import { motion } from "framer-motion";
import React, { useState } from "react";
import Slider from "react-slick";
import UnifiedArrow from "../../layouts/UnifiedArrow";
import { certificationsData } from "../Resume.constants";
import CertificationsCard from "./CertificationsCard";

const Certifications = ({ onNext, onPrev, nextDisabled, prevDisabled }) => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
    arrows: true,
    nextArrow: (
      <UnifiedArrow
        variant="features"
        direction="next"
        onClick={onNext}
        disabled={nextDisabled}
      />
    ),
    prevArrow: (
      <UnifiedArrow
        variant="features"
        direction="prev"
        onClick={onPrev}
        disabled={prevDisabled}
      />
    ),
    beforeChange: (_, next) => setDotActive(next),
    appendDots: (dots) => (
      <div className="relative mt-8">
        <ul className="flex gap-4 justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="relative flex items-center justify-center group">
        <div className="absolute -bottom-[1.5px] w-4 h-4 rounded-full appGradient opacity-30 scale-0 transition-all duration-300 
        group-hover:opacity-100 group-hover:scale-100"></div>
        <div
          className={`relative mt-8 w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
            i === dotActive ? "bg-blue-700 dark:bg-cyan-400" : "bg-gray-300"
          }`}
          style={{
            boxShadow:
              "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset",
          }}
        />
      </div>
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: "unslick",
      },
    ],
  };

  return (
    <section id="features" className="w-full px-1 py-12">
      <div>
        <div className="pb-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm arrowIcon font-bodyFont font-semibold tracking-[2px]">
            2022 - {new Date().getFullYear()}
          </p>
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>
        </div>

        <div className="hidden xs:block w-full">
          <Slider {...settings}>
            {certificationsData.map((item) => (
              <motion.div
                key={item.id}
                className="px-0 md:px-4 lg:px-6 xs:py-4 lg:py-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <CertificationsCard item={item} />
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Certifications);
