import React, { useState } from "react";
import Slider from "react-slick";
import {
  certificationsData,
} from "../constants/CertificationsData";
import CertificationsCard from "./CertificationsCard";
import UnifiedArrow from "../../layouts/UnifiedArrow";

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
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-30 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
        <div
          className={`relative w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
            i === dotActive ? 'bg-[#35BDFD]' : 'bg-[#23272b]'
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
          <p className="text-sm text-blue-700 dark:text-designColor tracking-[2px]">
            2022 - {new Date().getFullYear()}
          </p>
          <h2 className="text-4xl font-bold" data-aos="fade-up">
            Certifications
          </h2>
        </div>

        <div className="hidden xs:block w-full">
          <Slider {...settings}>
            {certificationsData.map((item) => (
              <div
                key={item.id}
                className="xs:px-0 md:px-4 lg:px-6 xs:py-4 lg:py-6"
                data-aos="zoom-in"
              >
                <CertificationsCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Certifications);
