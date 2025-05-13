import React, { useEffect } from "react";
import LeftBanner from "./components/LeftBanner";
import RightBanner from "./components/RightBanner";
import FairyAnimation from "../layouts/FairyAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = React.memo(() => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
    return () => {
      AOS.refresh();
    };
  }, []);


  const bannerMessages = React.useMemo(
    () => [
      {
        message: `I'm created from Ted McDonald's CodePen to bring magical messages to life!`,
        shockTitle: "Meet Inspiry!",
      },
      {
        message:
          "Built with inspiration from the Inbio portfolio — minimal and modern!",
        shockTitle: "Recognize the Style?",
      },
      {
        message:
          "Inspired by WhatsApp, Play Store, Material UI ripple-effect buttons, and Slack for a seamless experience!",
        shockTitle: "Familiar Touch?",
      }
    ],
    []
  );

  return (
    <section
      id="home"
      className="relative w-full py-10 xs:px-6 sm:px-8 xl:px-20 lg:px-16 md:px-12 flex items-center justify-center"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 xl:grid-cols-5 w-full border-b border-b-gray-400 dark:border-b-black pb-24">
        <div className="lg:col-span-3 flex flex-col justify-center items-start order-2 xl:order-1 md:pt-11 relative">
          <LeftBanner />
          <div className="absolute hidden md:block md:top-16 lg:top-[6.5rem] xl:top-16 md:left-[16rem] md:z-50 ">
            <FairyAnimation section="banner" messages={bannerMessages} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center order-1 xl:order-2 relative">
          <RightBanner />
        </div>
      </div>
    </section>
  );
});

export default React.memo(Banner);
