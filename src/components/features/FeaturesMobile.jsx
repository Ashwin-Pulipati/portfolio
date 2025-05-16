import React from "react";
import Card from "./components/FeaturesCard";
import { featuresData } from "./constants/featuresData";
import Title from "../layouts/Title";
import { motion } from "framer-motion";

const FeaturesMobile = ({ id = "features" }) => (
  <section id={id} className="w-full px-4 py-14 space-y-6">
    <Title title="Features" des="What I Do" />
    <div className="grid grid-cols-1 gap-4">
      {featuresData.map((item) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false }}
          key={item.id}
          className="p-6"
        >
          <Card item={item} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default React.memo(FeaturesMobile);
