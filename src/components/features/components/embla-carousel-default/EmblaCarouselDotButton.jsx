// import React, { useCallback, useEffect, useState } from "react";
// import { useDarkMode } from "../../../layouts/DarkMode";

// export const useDotButton = (emblaApi) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState([]);

//   const onDotButtonClick = useCallback(
//     (index) => emblaApi?.scrollTo(index),
//     [emblaApi]
//   );

//   useEffect(() => {
//     if (!emblaApi) return;
//     const { scrollSnapList, selectedScrollSnap } = emblaApi;
//     setScrollSnaps(scrollSnapList());
//     setSelectedIndex(selectedScrollSnap());
//     const reInitHandler = () => {
//       setScrollSnaps(scrollSnapList());
//       setSelectedIndex(selectedScrollSnap());
//     };
//     emblaApi.on("reInit", reInitHandler).on("select", () => setSelectedIndex(selectedScrollSnap()));
//     return () => emblaApi.off("reInit", reInitHandler).off("select", () => setSelectedIndex(selectedScrollSnap()));
//   }, [emblaApi]);

//   return { selectedIndex, scrollSnaps, onDotButtonClick };
// };

// export const DotButton = React.memo(({ active, onClick }) => {
//   const isDarkMode = useDarkMode();
//   const styles = {
//     backgroundColor: isDarkMode
//       ? active
//         ? "#35BDFD"
//         : "#23272b"
//       : active
//       ? "#1D4ED8"
//       : "lightgray",
//     boxShadow:
//       "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center mx-2"
//       type="button"
//       aria-label="Go to slide"
//     >
//       <span
//         className={active? "w-[20px] h-[10px] rounded-lg": "w-[13px] h-[13px] rounded-full" }
//         style={styles}
//       />
//     </button>
//   );
// });


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

    const onSelect = () => setSelectedIndex(selectedScrollSnap());

    emblaApi.on("reInit", reInitHandler).on("select", onSelect);
    return () => {
      emblaApi.off("reInit", reInitHandler).off("select", onSelect);
    };
  }, [emblaApi]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export const DotButton = React.memo(({ active, onClick }) => {
  const isDarkMode = useDarkMode();

  const dotColor = isDarkMode
    ? active
      ? "#35BDFD"
      : "#23272b"
    : active
    ? "#1D4ED8"
    : "lightgray";

  const dotShadow =
    "1px 4px 2px -3px rgba(0,0,0,0.7) inset, -1px -3px 3px -2px rgba(255,255,255,0.2) inset";

  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Go to slide"
      className="relative flex items-center justify-center mx-2 group transition-all duration-300"
    >
      {/* Hover halo */}
      <div
        className={`absolute w-[18px] h-[18px] ${
          active ? "w-[25px] h-[10px] rounded-lg" : "rounded-full"
        } 
                   appGradient opacity-30 scale-0 transition-all duration-300
                   group-hover:opacity-100 group-hover:scale-100`}
      />
      {/* Dot itself */}
      <span
        className={`relative transition-all duration-300 ${
          active
            ? "w-[20px] h-[10px] rounded-lg"
            : "w-[13px] h-[13px] rounded-full"
        }`}
        style={{
          backgroundColor: dotColor,
          boxShadow: dotShadow,
        }}
      />
    </button>
  );
});

