// EmblaCarouselAutoScroll.jsx

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const EmblaCarouselAutoScroll = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    [AutoScroll({ playOnInit: true })]
  );

  const syncAutoScroll = useCallback(() => {
    // no-op function to keep lifecycle in sync
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const plugin = emblaApi.plugins().autoScroll;
    if (!plugin) return;
    emblaApi.on("autoScroll:play", syncAutoScroll);
    emblaApi.on("autoScroll:stop", syncAutoScroll);
    emblaApi.on("reInit", syncAutoScroll);
    return () => {
      emblaApi.off("autoScroll:play", syncAutoScroll);
      emblaApi.off("autoScroll:stop", syncAutoScroll);
      emblaApi.off("reInit", syncAutoScroll);
    };
  }, [emblaApi, syncAutoScroll]);

  const stopScroll = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const playScroll = useCallback(() => {
    emblaApi?.plugins()?.autoScroll?.play();
  }, [emblaApi]);

  const slides = React.useMemo(
    () =>
      React.Children.map(children, (child, idx) => (
        <div className="flex-none w-full min-w-0 pl-4" key={idx}>
          {child}
        </div>
      )),
    [children]
  );

  return (
    <div className="max-w-[48rem] mx-auto">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        onPointerDown={stopScroll}
        onPointerUp={playScroll}
        onPointerLeave={playScroll}
      >
        <div className="flex -ml-4 touch-pan-y [touch-action:pan-y_pin‍ch-zoom]">
          {slides}
        </div>
      </div>
    </div>
  );
};

export default React.memo(EmblaCarouselAutoScroll);
