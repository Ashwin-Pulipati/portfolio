// Features.jsx

import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./components/embla-carousel-default/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "./components//embla-carousel-default/EmblaCarouselDotButton";
import Card from "./components/FeaturesCard";
import { featuresData } from "./Features.constants";

// split features into chunks of 4
const chunkData = (data, size) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += size) {
    chunks.push(data.slice(i, i + size));
  }
  return chunks;
};

const Features = () => {
  // Memoize chunks
  const featureChunks = useMemo(() => chunkData(featuresData, 4), []);

  const [emblaRef, emblaApi] = useEmblaCarousel({});
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // Memoize small-screen list
  const smallScreenList = useMemo(
    () =>
      featuresData.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <Card item={item} />
        </motion.div>
      )),
    []
  );

  // Memoize carousel slides
  const carouselSlides = useMemo(
    () =>
      featureChunks.map((chunk, idx) => (
        <div key={idx} className="flex-none w-full pl-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-10 p-6">
            {chunk.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: false }}
              >
                <Card item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      )),
    [featureChunks]
  );

  // Memoize dot buttons
  const dotButtons = useMemo(
    () =>
      scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          active={index === selectedIndex}
          onClick={() => onDotButtonClick(index)}
        />
      )),
    [scrollSnaps, selectedIndex, onDotButtonClick]
  );

  return (
    <section
      id="features"
      className="w-full px-4 md:px-6 lg:px-16 xl:px-20 py-14"
    >
      <div className="border-b border-gray-400 dark:border-black pb-24">
        <div className="mb-8 px-6 md:px-0">
          <Title title="Features" des="What I Do" />
        </div>

        {/* simple list on small screens */}
        <div className="flex flex-col gap-6 md:hidden px-4">
          {smallScreenList}
        </div>

        {/* Embla carousel for md+ screens */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Slides viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex -ml-4">{carouselSlides}</div>
            </div>

            {/* Arrows centered vertically at ends */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <div className="pointer-events-auto">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <div className="pointer-events-auto">
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>

          {/* Dots centered below */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">{dotButtons}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);
