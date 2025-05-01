import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Title from "../layouts/Title";
import UnifiedArrow from "../layouts/UnifiedArrow";
import Card from "./components/FeaturesCard";
import { featuresData } from "./constants/featuresData";
import { useDarkMode } from "../layouts/DarkMode";

const Features = ({ onNext, onPrev, nextDisabled, prevDisabled }) => {
  const [dotActive, setDotActive] = useState(0);

  const isDarkMode = useDarkMode();

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: (
      <UnifiedArrow
        variant={"features"}
        direction="next"
        onClick={onNext}
        disabled={nextDisabled}
      />
    ),
    prevArrow: (
      <UnifiedArrow
        variant={"features"}
        direction="prev"
        onClick={onPrev}
        disabled={prevDisabled}
      />
    ),
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div style={{ position: "relative", marginTop: "30px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="relative flex items-center justify-center group">
        <div className="absolute w-[17px] h-[17px] rounded-full bg-gradient-to-r from-[#58eba6] via-[#1fc8de] to-[#0584d9] opacity-30 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
        <div
          className="relative w-[11px] h-[11px] rounded-full cursor-pointer transition-all duration-300"
          style={{
            background: isDarkMode
              ? i === dotActive
                ? "#35BDFD"
                : "#23272b"
              : i === dotActive
              ? "#1D4ED8"
              : "lightGray",
            boxShadow:
              "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset"
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section
      id="features"
      className="w-full xl:px-20 lg:px-16 md:px-6 sm:px-2 py-14"
    >
      <div className="border-b border-b-gray-400 dark:border-b-black pb-24">
        <div className="px-6 md:px-0 md:mr-4">
          <Title title="Features" des="What I Do" />
        </div>

        <div className="hidden sm:block w-full">
          <Slider {...settings}>
            {featuresData.map((item) => (
              <div key={item.id} className="p-6" data-aos="zoom-in">
                <Card item={item} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="block sm:hidden">
          {featuresData.map((item) => (
            <div key={item.id} className="px-6 py-4" data-aos="zoom-in">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);
