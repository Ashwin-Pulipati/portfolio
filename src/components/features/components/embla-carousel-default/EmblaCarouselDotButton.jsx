import React, { useCallback, useEffect, useState } from "react";
import { useDarkMode } from "../../../layouts/DarkMode";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const { scrollSnapList, selectedScrollSnap } = emblaApi;
    setScrollSnaps(scrollSnapList());
    setSelectedIndex(selectedScrollSnap());
    const reInitHandler = () => {
      setScrollSnaps(scrollSnapList());
      setSelectedIndex(selectedScrollSnap());
    };
    emblaApi.on("reInit", reInitHandler).on("select", () => setSelectedIndex(selectedScrollSnap()));
    return () => emblaApi.off("reInit", reInitHandler).off("select", () => setSelectedIndex(selectedScrollSnap()));
  }, [emblaApi]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export const DotButton = React.memo(({ active, onClick }) => {
  const isDarkMode = useDarkMode();
  const styles = {
    backgroundColor: isDarkMode
      ? active
        ? "#35BDFD"
        : "#23272b"
      : active
      ? "#1D4ED8"
      : "lightgray",
    boxShadow:
      "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset",
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center mx-2"
      type="button"
      aria-label="Go to slide"
    >
      <span
        className="w-[13px] h-[13px] rounded-full"
        style={styles}
      />
    </button>
  );
});
