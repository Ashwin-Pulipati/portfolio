import { motion } from "framer-motion";
import React from "react";
import EmblaCarouselScale from "../../../global-components/embla-carousel-scale/EmblaCarousel";
import EmblaCarouselAutoScroll from "./embla-carousel-autoscroll/EmblaCarousel";
import CertificationsCard from "./CertificationsCard";
import { certificationsData } from "../Resume.constants";

const SCALE_OPTIONS = { align: "center", loop: true };
const AUTOSCROLL_OPTIONS = { loop: true };

const Certifications = () => (
  <section id="features" className="w-full px-4 py-12">
    <div className="pb-12 flex flex-col gap-4 font-titleFont">
      <p className="text-sm font-bodyFont font-semibold tracking-wide arrowIcon">
        2022 - {new Date().getFullYear()}
      </p>
      <motion.h2
        className="text-4xl font-bold "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
    </div>
    <div className="w-full">

  <div className="hidden md:block">
    <EmblaCarouselScale options={SCALE_OPTIONS}>
      {certificationsData.map((item) => (
        <CertificationsCard key={item.id} item={item} />
      ))}
    </EmblaCarouselScale>
  </div>

  <div className="block md:hidden">
    <EmblaCarouselAutoScroll options={AUTOSCROLL_OPTIONS}>
      {certificationsData.map((item) => (
        <CertificationsCard key={item.id} item={item} />
      ))}
    </EmblaCarouselAutoScroll>
  </div>
</div>
  </section>
);

export default React.memo(Certifications);
