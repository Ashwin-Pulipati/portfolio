import { motion } from "framer-motion";
import React from "react";
import EmblaCarousel from "../../../global-components/embla-carousel-scale/EmblaCarousel";
import CertificationsCard from "./CertificationsCard";
import { certificationsData } from "../Resume.constants";

const OPTIONS = {
  loop: true,
  align: "center",
};

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

    <div className="hidden xs:block w-full">
      <EmblaCarousel options={OPTIONS}>
        {certificationsData.map((item) => (
          <CertificationsCard key={item.id} item={item} />
        ))}
      </EmblaCarousel>
    </div>
  </section>
);

export default React.memo(Certifications);
