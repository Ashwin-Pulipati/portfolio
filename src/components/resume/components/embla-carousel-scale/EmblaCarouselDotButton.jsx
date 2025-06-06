// import React from "react";

// export const DotButton = ({ className = "", style = {}, ...props }) => (
//   <button type="button" className={className} style={style} {...props} />
// );

// export const useDotButton = (emblaApi) => {
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   const [scrollSnaps, setScrollSnaps] = React.useState([]);

//   const onDotButtonClick = React.useCallback(
//     (index) => emblaApi?.scrollTo(index),
//     [emblaApi]
//   );

//   React.useEffect(() => {
//     if (!emblaApi) return;

//     setScrollSnaps(emblaApi.scrollSnapList());
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//     const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
//     emblaApi.on("select", onSelect);
//     return () => emblaApi.off("select", onSelect);
//   }, [emblaApi]);

//   return {
//     selectedIndex,
//     scrollSnaps,
//     onDotButtonClick,
//   };
// };



// EmblaCarouselDotButton.jsx

import React from "react";

export const DotButton = React.memo(({ className = "", style = {}, ...props }) => (
  <button type="button" className={className} style={style} {...props} />
));

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const onDotButtonClick = React.useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
