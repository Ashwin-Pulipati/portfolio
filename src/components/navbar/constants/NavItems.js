import React from "react";
import { BiHomeSmile, BiSolidHomeSmile } from "react-icons/bi";
import { MdOutlineLocalPhone, MdLocalPhone } from "react-icons/md";
import { HiOutlineSquares2X2, HiSquares2X2 } from "react-icons/hi2";
import { IoDocuments, IoDocumentsOutline} from "react-icons/io5";

export const navItems = [
  {
    id: 1001,
    title: "HOME",
    bottomNavTitle: "Home",
    link: "home",
    activeIcon: <BiSolidHomeSmile className="w-5 h-5 mb-0.5" />,
    inactiveIcon: <BiHomeSmile className="w-5 h-5 mb-0.5" />,
    color: "text-pink-600 dark:text-pink-400",
    backgroundActive:
      "bg-pink-100 text-pink-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-pink-800 dark:text-pink-100",
    iconActive: "text-pink-800 dark:text-pink-100",
  },
  {
    id: 1002,
    title: "FEATURES",
    bottomNavTitle: "Features",
    link: "features",
    activeIcon: <HiSquares2X2 className="w-5 h-5 mb-0.5" />,
    inactiveIcon: <HiOutlineSquares2X2 className="w-5 h-5 mb-0.5" />,
    color: "text-purple-600 dark:text-purple-400",
    backgroundActive:
      "bg-purple-100 text-purple-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-purple-800 dark:text-purple-100",
    iconActive: "text-purple-800 dark:text-purple-100",
  },
  {
    id: 1003,
    title: "RESUME",
    bottomNavTitle: "Resume",
    link: "resume",
    activeIcon: <IoDocuments className="w-5 h-5 mb-0.5" />,
    inactiveIcon: <IoDocumentsOutline className="w-5 h-5 mb-0.5" />,
    color: "text-yellow-600 dark:text-yellow-400",
    backgroundActive:
      "bg-yellow-100 text-yellow-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-yellow-800 dark:text-yellow-100",
    iconActive: "text-yellow-800 dark:text-yellow-100",
  },
  {
    id: 1004,
    title: "CONTACT",
    bottomNavTitle: "Contact",
    link: "contact",
    activeIcon: <MdLocalPhone className="w-5 h-5" />,
    inactiveIcon: <MdOutlineLocalPhone className="w-5 h-5" />,
    color: "text-green-600 dark:text-green-400",
    backgroundActive:
      "bg-green-100 text-green-800 rounded-full xs:px-7 xs:pt-3.5 xs:pb-2.5 sm:px-8 sm:pt-4 sm:pb-3 md:p-2 md:pr-4 md:pl-4 dark:bg-green-800 dark:text-green-100",
    iconActive: "text-green-800 dark:text-green-100",
  },
];

export const cardGradientMap = {
  "all-categories": "linear-gradient(to bottom right, #a0f0f4, #b78fff)",
  "frontend-development": `linear-gradient(to bottom right, #ff9aad 0%, #f9f586 100%)`,
  "machine-learning":
    "linear-gradient(to bottom right, #ffbfa7 0%, #f9f586 100%)",
  "mern-stack-development":
    "linear-gradient(to bottom right, #96fbc4 0%, #f9f586 100%)",
  "ui-ux": "linear-gradient(to bottom right, #b78fff 0%, #f9f586 100%)",
  ai: "linear-gradient(to bottom right, #a0f0f4 0%, #f9f586 100%)",
};

export const darkModeCardGradientMap = {
  "all-categories": "linear-gradient(to bottom right, #0d7998, #4f2a7a)",
  "frontend-development": "linear-gradient(to bottom right, #6e0c19 0%, #453a94 100%)",
  "machine-learning": "linear-gradient(to bottom right, #7e6c10  0%, #6a0d4b 100%)",
  "mern-stack-development": "linear-gradient(to bottom right, #226346 0%, #6b5b1d 100%)",
  "ui-ux": "linear-gradient(to bottom right, #66009a 0%, #0d7998 100%)",
  ai: "linear-gradient(to bottom right, #0d7998 0%, #66009a 100%)",
};
