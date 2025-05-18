import React, { useCallback, useEffect, useState } from "react";
import { useDarkMode } from "../../../layouts/DarkMode";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onInit = useCallback((api) => setScrollSnaps(api.scrollSnapList()), []);
  const onSelect = useCallback(
    (api) => setSelectedIndex(api.selectedScrollSnap()),
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export const DotButton = ({ active, onClick }) => {
  const isDarkMode = useDarkMode();
  // Determine background color
  const backgroundColor = isDarkMode
    ? active
      ? "#35BDFD"
      : "#23272b"
    : active
    ? "#1D4ED8"
    : "lightgray";
  // Shared inset shadows
  const boxShadow =
    "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset";

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center mx-2"
      type="button"
    >
      <span
        className="w-[13px] h-[13px] rounded-full "
        style={{ backgroundColor, boxShadow }}
      />
    </button>
  );
};
