// ContactBanner.jsx

import React, { useState, useCallback, useMemo } from "react";
import ContactMe from "../../../assets/images/Webp/contact-left.webp";
import { createRipple } from "../../layouts/RippleEffect";
import { motion } from "framer-motion";
import { contactMethods } from "../Contact.constants";
import { FaCheckCircle } from "react-icons/fa";

const ContactLeft = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = useCallback(
    (text, type) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(type);
        setTimeout(() => setCopied(""), 2000);
      });
    },
    []
  );

  // Memoize the mapped contact buttons
  const renderedButtons = useMemo(
    () =>
      contactMethods.map(
        ({ id, label, icon, href, copyText, external, copiedColor }) => (
          <button
            key={id}
            className="flex flex-col gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleCopy(copyText, id);
              if (external) window.open(href, "_blank", "noopener,noreferrer");
            }}
            aria-label="Contact Me"
          >
            <div
              className="bannerIcon zoomIcon group-hover:shadow-none ripple-container"
              onMouseDown={createRipple}
            >
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {icon}
              </a>
            </div>
            {copied === id && (
              <div
                className={`text-xs flex items-center gap-1 mt-1 ${copiedColor}`}
              >
                <FaCheckCircle />
                <span>Copied!</span>
              </div>
            )}
          </button>
        )
      ),
    [copied, handleCopy]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false }}
      className="w-full xl:w-[35%] h-full p-6 md:p-10 lg:p-8 xl:p-9 flex flex-col gap-8 justify-center 
        group hover:bg-gradient-to-br hover:from-[#a0f0f4] hover:via-[#b78fff] hover:to-[#ff9aad] 
        dark:hover:bg-gradient-to-br dark:hover:from-[#0d7998] dark:hover:via-[#4f2a7a] dark:hover:to-[#8a3a48] 
        cardView rounded-lg"
    >
      <div className="w-full h-4/5 overflow-hidden rounded-lg">
        <img
          className="w-full h-44 md:h-64 object-cover hover:scale-105 duration-300 cursor-pointer"
          src={ContactMe}
          width="500"
          height="300"
          alt="contactImg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <span
          className="pt-3 md:pt-0 lg:pt-0 xs:block md:inline text-3xl md:text-5xl lg:text-4xl xl:text-5xl px-1 w-fit h-fit 
          textGradient group-hover:text-black dark:group-hover:text-white capitalize font-nameFont shadow-textShadow"
        >
          Ashwin Pulipati
        </span>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-text-gray-300">
          Full Stack Software Engineer
        </p>
        <p className="text-md font-normal text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-gray-300">
          Reach out to me effortlessly through the preferred communication
          channels below. I value clear and seamless connections, ensuring every
          interaction is straightforward and efficient.
        </p>
      </div>
      <div className="flex flex-col gap-4 group">
        <h2 className="text-base uppercase font-titleFont mb-4 tracking-[2px] group-hover:text-black dark:group-hover:text-gray-300">
          REACH ME OUT
        </h2>
        <div className="flex gap-6">{renderedButtons}</div>
      </div>
    </motion.div>
  );
};

export default React.memo(ContactLeft);
