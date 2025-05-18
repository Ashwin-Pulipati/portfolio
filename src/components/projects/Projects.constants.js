import { FaBrain, FaChartLine } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { BiTargetLock } from "react-icons/bi";

export const gradients = [
  {
    light: "linear-gradient(to bottom right, #ff9aad 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #6e0c19 0%, #453a94 100%)",
  },
  {
    light: "linear-gradient(to bottom right, #ffbfa7 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #7e6c10 0%, #6a0d4b 100%)",
  },
  {
    light: "linear-gradient(to bottom right, #96fbc4 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #226346 0%, #6b5b1d 100%)",
  },
  {
    light: "linear-gradient(to bottom right, #b78fff 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #66009a 0%, #0d7998 100%)",
  },
  {
    light: "linear-gradient(to bottom right, #a0f0f4 0%, #f9f586 100%)",
    dark: "linear-gradient(to bottom right, #0d7998 0%, #66009a 100%)",
  },
  {
    light: "linear-gradient(to bottom right, #ff9aad, #b78fff)",
    dark: "linear-gradient(to bottom right, #8a3a48, #4f2a7a)",
  },
  {
    light: "linear-gradient(to bottom right, #a0f0f4, #b78fff)",
    dark: "linear-gradient(to bottom right, #0d7998, #4f2a7a)",
  },
  {
    light: "linear-gradient(to bottom right, #96fbc4, #b78fff)",
    dark: "linear-gradient(to bottom right, #226346, #4f2a7a)",
  },
  {
    light: "linear-gradient(to bottom right, #ffbfa7, #b78fff)",
    dark: "linear-gradient(to bottom right, #8a4637, #4f2a7a)",
  },
];


export const typeStyles = {
  Overview: {
    bg: "bg-emerald-100 dark:bg-emerald-800",
    border: "border-emerald-700 dark:border-emerald-200",
    text: "text-emerald-700 dark:text-emerald-200",
    hover:
      "hover:bg-emerald-100 hover:border-emerald-800 dark:hover:bg-emerald-800 dark:hover:border-emerald-100",
  },
  Challenges: {
    bg: "bg-indigo-100 dark:bg-indigo-800",
    border: "border-indigo-700 dark:border-indigo-200",
    text: "text-indigo-700 dark:text-indigo-200",
    hover:
      "hover:bg-indigo-100 hover:border-indigo-800 dark:hover:bg-indigo-800 dark:hover:border-indigo-100",
  },
  Methodology: {
    bg: "bg-fuchsia-100 dark:bg-fuchsia-800",
    border: "border-fuchsia-700 dark:border-fuchsia-200",
    text: "text-fuchsia-700 dark:text-fuchsia-200",
    hover:
      "hover:bg-fuchsia-100 hover:border-fuchsia-800 dark:hover:bg-fuchsia-800 dark:hover:border-fuchsia-100",
  },
  Results: {
    bg: "bg-rose-100 dark:bg-rose-800",
    border: "border-rose-700 dark:border-rose-200",
    text: "text-rose-700 dark:text-rose-200",
    hover:
      "hover:bg-rose-100 hover:border-rose-800 dark:hover:bg-rose-800 dark:hover:border-rose-100",
  },
  Reflections: {
    bg: "bg-amber-100 dark:bg-amber-800",
    border: "border-amber-700 dark:border-amber-200",
    text: "text-amber-700 dark:text-amber-200",
    hover:
      "hover:bg-amber-100 hover:border-amber-800 dark:hover:bg-amber-800 dark:hover:border-amber-100",
  },
};


export const sections = [
  {
    id: "overview-section",
    displayName: "Overview",
    icon: (
      <VscPreview className="w-6 lg:w-8 h-8 text-emerald-700 dark:text-emerald-300" />
    ),
    type: "Overview",
  },
  {
    id: "challenges-section",
    displayName: "Challenges",
    icon: (
      <BiTargetLock className="w-7 lg:w-8 h-8 text-indigo-700 dark:text-indigo-300" />
    ),
    type: "Challenges",
  },
  {
    id: "methodology-section",
    displayName: "Methodology",
    icon: (
      <FaDiagramProject className="w-6 lg:w-7 h-7 text-fuchsia-700 dark:text-fuchsia-300" />
    ),
    type: "Methodology",
  },
  {
    id: "results-section",
    displayName: "Results",
    icon: (
      <FaChartLine className="w-6 lg:w-7 h-7 text-rose-700 dark:text-rose-300" />
    ),
    type: "Results",
  },
  {
    id: "learnings-section",
    displayName: "Reflections",
    icon: (
      <FaBrain className="w-6 lg:w-7 h-7 text-amber-700 dark:text-amber-300" />
    ),
    type: "Reflections",
  },
];