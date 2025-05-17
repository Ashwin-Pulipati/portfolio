import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LazyLoadImage } from "./EmblaCarouselLazyLoadImage";
import { PrevButton, NextButton } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { useDarkMode } from "../../../layouts/DarkMode"; 

const EmblaCarousel = ({ slides, options }) => {
  const isDarkMode = useDarkMode(); // get dark/light
  const [viewportRef, emblaApi] = useEmblaCarousel(options);
  const [inView, setInView] = useState([]);

  const { selectedIndex, scrollSnaps, onDotClick } = useDotButton(emblaApi);

  const updateInView = useCallback((api) => {
    setInView((prev) => {
      const newly = api.slidesInView().filter((i) => !prev.includes(i));
      return prev.concat(newly);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    updateInView(emblaApi);
    emblaApi.on("slidesInView", updateInView);
    emblaApi.on("reInit", updateInView);
  }, [emblaApi, updateInView]);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Carousel viewport */}
      <div
        ref={viewportRef}
        className="overflow-hidden h-[12rem] sm:h-[16rem] md:h-[23rem] lg:h-[28rem] xl:h-[23rem]"
      >
        <div className="flex -ml-4">
          {slides.map((src, idx) => (
            <LazyLoadImage
              key={idx}
              index={idx}
              imgSrc={src}
              inView={inView.includes(idx)}
            />
          ))}
        </div>
      </div>

      {/* Arrows overlay */}
      <div className="absolute left-0 right-0 top-[36%] sm:top-[38%] lg:top-[40%] flex items-center justify-between px-0 pointer-events-none">
        <div className="pointer-events-auto">
          <PrevButton emblaApi={emblaApi} />
        </div>
        <div className="pointer-events-auto">
          <NextButton emblaApi={emblaApi} />
        </div>
      </div>

      {/* Dots centered below */}
      <div className="mt-4 flex justify-center gap-6">
        {scrollSnaps.map((_, idx) => (
          <DotButton
            key={idx}
            onClick={() => onDotClick(idx)}
            isSelected={idx === selectedIndex}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
