import React, { useState, useCallback, useEffect } from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaCheckCircle,
  FaGithub,
} from "react-icons/fa";
import ContactMe from "../../../assets/images/Webp/contact-left.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { createRipple } from "../../layouts/RippleEffect";

const ContactLeft = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = useCallback(
    (text, type) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(type);
        setTimeout(() => setCopied(""), 2000);
      });
    },
    [setCopied]
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      className="w-full xl:w-[35%] h-full xs:p-6 xl:p-9 lg:p-8 md:p-10 sm:p-6 rounded-lg shadow-shadowTwo dark:shadow-shadowOne flex flex-col gap-8 justify-center 
             bg-boxBgWhite bg-gradient-to-br  group
             hover:bg-gradient-to-br hover:from-[#a0f0f4] hover:via-[#b78fff] hover:to-[#ff9aad] 
             dark:bg-boxBg dark:bg-gradient-to-tl from-[#dee3e7] to-white dark:from-[#262a2e] dark:to-[#1f2022] 
             dark:hover:bg-gradient-to-br dark:hover:from-[#0d7998] dark:hover:via-[#4f2a7a] dark:hover:to-[#8a3a48] 
             transition-colors duration-100"
      data-aos="zoom-in"
    >
      <div className="w-full h-4/5 overflow-hidden rounded-lg">
        <img
          className="w-full xs:h-44 md:h-64 object-cover hover:scale-105 duration-300 cursor-pointer"
          src={ContactMe}
          width="500"
          height="300"
          alt="contactImg"
        />
      </div>
      <div className="flex flex-col gap-4">
        <span
          className="xs:pt-3 sm:pt-3 md:pt-0 lg:pt-0 xl:pt-0 xs:block sm:block md:inline lg:inline xl:inline xs:text-3xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl px-1 w-fit h-fit bg-gradient-to-r from-[#46c28f] via-[#1aaabe] to-[#0584d9] group-hover:text-black dark:group-hover:text-white dark:from-[#58eba6] dark:via-[#1fc8de] dark:to-[#0584d9] bg-clip-text text-transparent capitalize font-nameFont"
          style={{ textShadow: "6px 6px 2px rgba(0, 0, 0, 0.1)" }}
        >
          Ashwin Pulipati
        </span>
        <p className="text-xl font-normal text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
          MERN Stack Developer
        </p>
        <p className="text-md font-normal text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
          Reach out to me effortlessly through the preferred communication
          channels below. I value clear and seamless connections, ensuring every
          interaction is straightforward and efficient.
        </p>
      </div>
      <div className="flex flex-col gap-4 group">
        <h2 className="text-base uppercase font-titleFont mb-4">
          REACH ME OUT
        </h2>
        <div className="flex gap-6">
          {/* Email */}
          <div
            className="flex flex-col gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleCopy("ashwinpulipati@gmail.com", "email");
            }}
          >
            <span
              className="bannerIcon zoomIcon group-hover:shadow-none ripple-container"
              onMouseDown={createRipple}
            >
              <a
                href="mailto:ashwinpulipati@gmail.com"
                aria-label="Email Ashwin Pulipati"
                title="Email Ashwin Pulipati"
              >
                <FaEnvelope style={{ color: "#EA4335" }} />
              </a>
            </span>
            {copied === "email" && (
              <div className="text-xs text-[#EA4335] flex items-center gap-1 mt-1">
                <FaCheckCircle />
                <span>Copied!</span>
              </div>
            )}
          </div>
          {/* LinkedIn */}
          <div
            className="flex flex-col gap-3 "
            onClick={(e) => {
              e.preventDefault();
              handleCopy(
                "https://www.linkedin.com/in/ashwinpulipati",
                "linkedin"
              );
              window.open(
                "https://www.linkedin.com/in/ashwinpulipati",
                "_blank"
              );
            }}
          >
            <span
              className="bannerIcon zoomIcon group-hover:shadow-none ripple-container"
              onMouseDown={createRipple}
            >
              <a
                href="https://www.linkedin.com/in/ashwinpulipati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile of Ashwin Pulipati"
                title="Visit LinkedIn profile of Ashwin Pulipati"
              >
                <FaLinkedinIn style={{ color: "#0A66C2" }} />
              </a>
            </span>
            {copied === "linkedin" && (
              <div className="text-xs text-[#0A66C2] flex items-center gap-1 mt-1">
                <FaCheckCircle />
                <span>Copied!</span>
              </div>
            )}
          </div>

          {/* Github */}
          <div
            className="flex flex-col gap-3 "
            onClick={(e) => {
              e.preventDefault();
              handleCopy("https://github.com/Ashwin-Pulipati", "github");
              window.open("https://github.com/Ashwin-Pulipati", "_blank");
            }}
          >
            <span
              className="bannerIcon zoomIcon group-hover:shadow-none ripple-container"
              onMouseDown={createRipple}
            >
              <a
                href="https://www.linkedin.com/in/ashwinpulipati"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile of Ashwin Pulipati"
                title="Visit LinkedIn profile of Ashwin Pulipati"
              >
                <FaGithub className="text-black dark:text-white" />
              </a>
            </span>
            {copied === "github" && (
              <div className="text-xs flex items-center gap-1 mt-1">
                <FaCheckCircle />
                <span>Copied!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactLeft);

