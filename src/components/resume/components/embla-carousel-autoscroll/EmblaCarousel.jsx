import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const EmblaCarouselAutoScroll = ({ options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    [AutoScroll({ playOnInit: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const plugin = emblaApi.plugins().autoScroll;
    if (!plugin) return;
    const sync = () => plugin.isPlaying(); // Still syncs with lifecycle
    emblaApi.on("autoScroll:play", sync);
    emblaApi.on("autoScroll:stop", sync);
    emblaApi.on("reInit", sync);
    return () => {
      emblaApi.off("autoScroll:play", sync);
      emblaApi.off("autoScroll:stop", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  const stopScroll = () => emblaApi?.plugins()?.autoScroll?.stop();
  const playScroll = () => emblaApi?.plugins()?.autoScroll?.play();

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
          {React.Children.map(children, (child, idx) => (
            <div className="flex-none w-full min-w-0 pl-4" key={idx}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselAutoScroll;