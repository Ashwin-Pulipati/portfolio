import React from "react";
import { motion } from "framer-motion";
import LeftBanner from "./components/LeftBanner";
import RightBanner from "./components/RightBanner";
import FairyAnimation from "../layouts/FairyAnimation";

const Banner = React.memo(() => {
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
      },
    ],
    []
  );

  return (
    <motion.section
      id="home"
      className="relative w-full py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-5 w-full sectionSeparator">
        <div className="lg:col-span-3 flex flex-col justify-center items-start order-2 xl:order-1 pt-0 md:pt-11 relative">
          <LeftBanner />
          <div className="absolute hidden md:block top-0 md:top-16 lg:top-[6.5rem] xl:top-16 left-0 z-0 md:left-[17rem] md:z-50">
            <FairyAnimation section="banner" messages={bannerMessages} />
          </div>
        </div>
        <div className="col-span-0 lg:col-span-2 flex justify-center items-center order-1 xl:order-2 relative">
          <RightBanner />
        </div>
      </div>
    </motion.section>
  );
});

export default React.memo(Banner);
