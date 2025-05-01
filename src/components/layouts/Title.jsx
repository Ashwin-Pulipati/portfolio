import React from "react";
import Tooltip from "./Tooltip";
import ExternalLinkIcon from "../../assets/images/SVG/external-link.svg";
import FairyAnimation from "./FairyAnimation";

const leftLineMap = {
  "My Resume":
    "bg-gradient-to-r from-transparent to-yellow-600 dark:to-yellow-400",
  "Contact Me":
    "bg-gradient-to-r from-transparent to-green-600 dark:to-green-400",
};

const rightLineMap = {
  "What I Do":
    "bg-gradient-to-l from-transparent to-purple-600 dark:to-purple-400",
  "My Resume":
    "bg-gradient-to-l from-transparent to-yellow-600 dark:to-yellow-400",
  "Contact Me":
    "bg-gradient-to-l from-transparent to-green-600 dark:to-green-400",
};

const titleStyleMap = {
  Features:
    "text-purple-900 bg-purple-100 dark:text-purple-100 dark:bg-purple-800",
  "4 YEARS OF EXPERIENCE":
    "text-yellow-900 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-800",
  CONTACT: "text-green-900 bg-green-100 dark:text-green-100 dark:bg-green-800",
};

const commonTitleClasses =
  "tracking-[1.5px] uppercase text-sm font-medium font-titleFont w-fit h-fit rounded-full p-2 pr-4 pl-4 shadow-shadowTwo dark:shadow-shadowOne";

const Title = ({ title, des }) => {
  const isFeatures = title === "Features";
  const renderTitle = () => {
    const titleClasses = titleStyleMap[title];
    return titleClasses ? (
      <h3 className={`${commonTitleClasses} ${titleClasses}`}>{title}</h3>
    ) : null;
  };

  const titleMessages = {
    Features: [
      {
        message:
          "Sleek social sidebar inspired by Cristian Mihai’s Portfolio on their YouTube channel!",
        shockTitle: "Seen This Before?",
      },
      {
        message: "Sparkly, starry cursor inspired from JavaScript Mastery!",
        shockTitle: "A Bit of Magic?",
      },
      {
        message:
          "Elegant, animated ribbons and buttons inspired by Tubeguruji, Coding2GO, InVideo AI and Interview Coder!",
        shockTitle: "Stylish Ribbons?",
      },
      {
        message:
          "Shadowy buttons inspired from WrathChaos's react-native-floating-action-button Github repo!",
        shockTitle: "Elegant Project buttons?",
      },
    ],
    "4 YEARS OF EXPERIENCE": [
      {
        message:
          "Sleek timeline dots inspired by CodeBucks' Portfolio on their YouTube channel!",
        shockTitle: "Neat & Tidy!",
      },
      {
        message: "Bottom nav bar inspired by Cristian Mihai’s YouTube channel!",
        shockTitle: "Convenient Navigation!",
      },
      {
        message: "Glassy icons inspired by Icons8 for a modern, sleek effect!",
        shockTitle: "Frosty & Fancy!",
      },
      {
        message: "Inspired from Play Store's Candy Crush app!",
        shockTitle: "Cinematic Effect?",
      },
    ],
    CONTACT: [
      {
        message: "Smooth scrolling inspired by ChatGPT and Inbio portfolio!",
        shockTitle: "Easy Navigation?",
      },
      {
        message: "Adorable footer kitty inspired by Johan Mouchet’s CodePen!",
        shockTitle: "A Furry Surprise?",
      },
      {
        message: "Inspired from MongoDB!",
        shockTitle: "Shape-Shifting Smoothness?",
      },
    ],
  };

  const messagesForThisTitle = titleMessages[title] || [
    { message: "Default title message", shockTitle: "Did you know?" },
  ];

  return (
    <div
      className={`flex flex-col gap-4 font-titleFont mb-12 ${
        isFeatures ? "text-left items-start mb-8" : "text-center items-center"
      }`}
    >
      <div className="relative">
        {renderTitle()}
        <div className="absolute hidden md:block md:top-4 md:-right-[7.5rem] md:z-50">
          <FairyAnimation section={title} messages={messagesForThisTitle} />
        </div>
      </div>

      <div
        className="flex items-center w-full justify-center gap-4"
        data-aos="fade-up"
      >
        {leftLineMap[des] && (
          <div className={`mt-3 flex-1 h-[2px] ${leftLineMap[des]}`}></div>
        )}

        <div className="text-4xl md:text-5xl text-gray-700 dark:text-gray-300 font-bold capitalize pl-0 pr-2">
          {des === "My Resume" ? (
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 group cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-800"
            >
              My Resume
              <img
                src={ExternalLinkIcon}
                alt="External Link"
                className="w-8 h-8 mt-3"
              />
              <Tooltip text="View resume" />
            </a>
          ) : (
            des
          )}
        </div>

        {rightLineMap[des] && (
          <div className={`mt-3 flex-1 h-[2px] ${rightLineMap[des]}`}></div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Title);
