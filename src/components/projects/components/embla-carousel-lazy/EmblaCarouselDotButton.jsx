import React from "react";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const updateState = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateState();
    emblaApi.on("select", updateState).on("reInit", updateState);
    return () => emblaApi.off("select", updateState).off("reInit", updateState);
  }, [emblaApi]);

  const onDotClick = React.useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  return { selectedIndex, scrollSnaps, onDotClick };
};

export const DotButton = React.memo(({ onClick, isSelected, isDarkMode }) => {
  const styles = {
    background: isDarkMode
      ? isSelected
        ? "#35BDFD"
        : "#23272b"
      : isSelected
      ? "#1D4ED8"
      : "lightGray",
    boxShadow:
      "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset",
  };

  return (
    <div className="relative flex items-center justify-center group">
      {/* Hover‑gradient halo */}
      <div
        className="absolute w-[18px] h-[18px] rounded-full 
                      appGradient
                      opacity-30 scale-0 transition-all duration-300
                      group-hover:opacity-100 group-hover:scale-100"
      />
      {/* Actual dot */}
      <button
        onClick={onClick}
        className="relative w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full cursor-pointer transition-all duration-300 focus:outline-none"
        style={styles}
      />
    </div>
  );
});
