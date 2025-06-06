// import React from "react";

// export const useDotButton = (emblaApi) => {
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   const [scrollSnaps, setScrollSnaps] = React.useState([]);

//   React.useEffect(() => {
//     if (!emblaApi) return;

//     const updateState = () => {
//       setScrollSnaps(emblaApi.scrollSnapList());
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };

//     updateState();
//     emblaApi.on("select", updateState).on("reInit", updateState);
//     return () => emblaApi.off("select", updateState).off("reInit", updateState);
//   }, [emblaApi]);

//   const onDotClick = React.useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

//   return { selectedIndex, scrollSnaps, onDotClick };
// };

// export const DotButton = React.memo(({ onClick, isSelected, isDarkMode }) => {
//   const styles = {
//     background: isDarkMode
//       ? isSelected
//         ? "#35BDFD"
//         : "#23272b"
//       : isSelected
//       ? "#1D4ED8"
//       : "lightGray",
//     boxShadow:
//       "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset",
//   };

//   return (
//     <div className="relative flex items-center justify-center group">
//       {/* Hover‑gradient halo */}
//       <div
//         className="absolute w-[18px] h-[18px] rounded-full
//                       appGradient
//                       opacity-30 scale-0 transition-all duration-300
//                       group-hover:opacity-100 group-hover:scale-100"
//       />
//       {/* Actual dot */}
//       <button
//         onClick={onClick}
//         className="relative w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full cursor-pointer transition-all duration-300 focus:outline-none"
//         style={styles}
//         aria-label="Go to slide"
//       />
//     </div>
//   );
// });


// import React from "react";

// export const useDotButton = (emblaApi) => {
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   const [scrollSnaps, setScrollSnaps] = React.useState([]);

//   React.useEffect(() => {
//     if (!emblaApi) return;

//     const updateState = () => {
//       setScrollSnaps(emblaApi.scrollSnapList());
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//     };

//     updateState();
//     emblaApi.on("select", updateState).on("reInit", updateState);
//     return () => emblaApi.off("select", updateState).off("reInit", updateState);
//   }, [emblaApi]);

//   const onDotClick = React.useCallback(
//     (i) => emblaApi?.scrollTo(i),
//     [emblaApi]
//   );

//   return { selectedIndex, scrollSnaps, onDotClick };
// };

// export const DotButton = React.memo(({ onClick, isSelected, isDarkMode }) => {
//   const baseBg = isDarkMode
//     ? isSelected
//       ? "#35BDFD"
//       : "#23272b"
//     : isSelected
//     ? "#1D4ED8"
//     : "lightGray";

//   const baseShadow =
//     "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset";

//   const selectedStyles = "w-[25px] h-[11px] rounded-lg"; // active
//   const unselectedStyles =
//     "w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full"; // inactive

//   // Halo styles change based on active state
//   const haloClasses = isSelected
//     ? "w-[30px] h-[18px] rounded-lg"
//     : "w-[18px] h-[18px] rounded-full";

//   return (
//     <div className="relative flex items-center justify-center group">
//       {/* Hover-gradient halo */}
//       <div
//         className={`absolute appGradient opacity-30 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ${haloClasses}`}
//       />
//       {/* Dot Button */}
//       <button
//         onClick={onClick}
//         className={`relative cursor-pointer transition-all duration-300 focus:outline-none ${
//           isSelected ? selectedStyles : unselectedStyles
//         }`}
//         style={{
//           background: baseBg,
//           boxShadow: baseShadow,
//         }}
//         aria-label="Go to slide"
//       />
//     </div>
//   );
// });


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
    return () => {
      emblaApi.off("select", updateState).off("reInit", updateState);
    };
  }, [emblaApi]);

  const onDotClick = React.useCallback(
    (i) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  return { selectedIndex, scrollSnaps, onDotClick };
};

export const DotButton = React.memo(function DotButton({
  onClick,
  isSelected,
  isDarkMode,
}) {
  const baseBg = React.useMemo(() => {
    if (isDarkMode) {
      return isSelected ? "#35BDFD" : "#23272b";
    }
    return isSelected ? "#1D4ED8" : "lightGray";
  }, [isSelected, isDarkMode]);

  const baseShadow =
    "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset";

  const selectedStyles = "w-[25px] h-[11px] rounded-lg";
  const unselectedStyles =
    "w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-full";

  const haloClasses = React.useMemo(
    () =>
      isSelected
        ? "w-[30px] h-[18px] rounded-lg"
        : "w-[18px] h-[18px] rounded-full",
    [isSelected]
  );

  return (
    <div className="relative flex items-center justify-center group">
      <div
        className={`absolute appGradient opacity-30 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ${haloClasses}`}
      />
      <button
        onClick={onClick}
        className={`relative cursor-pointer transition-all duration-300 focus:outline-none ${
          isSelected ? selectedStyles : unselectedStyles
        }`}
        style={{
          background: baseBg,
          boxShadow: baseShadow,
        }}
        aria-label="Go to slide"
      />
    </div>
  );
});
