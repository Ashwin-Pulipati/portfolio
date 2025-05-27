import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  // SiAngular,
  SiBootstrap,
  SiGraphql,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiJquery,
  SiRedux,
} from "react-icons/si";

import MaterialUI from "../../assets/images/SVG/materialui.svg";
import Tensorflow from "../../assets/images/SVG/tensorflow.svg";
import TeachableMachine from "../../assets/images/Webp/teachable-image.webp";
import RestAPI from "../../assets/images/Webp/rest-api.webp";
import VitePress from "../../assets/images/Webp/vitepress-logo-large.webp";
import Figma from "../../assets/images/SVG/figma.svg";
import Slack from "../../assets/images/SVG/slack.svg";
import OpenCV from "../../assets/images/SVG/opencv.svg";
import Python from "../../assets/images/SVG/python.svg";
import SQL from "../../assets/images/SVG/sql.svg";
import HuggingFace from "../../assets/images/SVG/hugging-face-icon.svg";
import MSOffice365 from "../../assets/images/SVG/microsoft365.svg";

import cybersecurity from "../../assets/images/Other Formats/cybersecurity.png";
import uiux  from "../../assets/images/Other Formats/ui-ux.png";
import huggingFace from "../../assets/images/Other Formats/hugging-face.png";
import outskill from "../../assets/images/Other Formats/outskill.png";
import webDevBootcamp from "../../assets/images/Other Formats/web-dev-bootcamp.png";
import { BiLogoZoom } from "react-icons/bi";

export const tabData = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Professional Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
];

export const LOCAL_STORAGE_KEY = "activeResumeTab";

export const achievementData = [
  {
    title: "Software Engineer",
    subTitle: "Lean Innovation Labs LLC (Oct 2024 - Apr 2025)",
    result: "Success",
    des: "",
    points: [
      "Automated 200+ weekly data entries by replacing manual workflows, cutting processing time by 70%.",
      "Boosted user efficiency by 25% and reduced support tickets by 30% through new UI features and REST API enhancements.",
      "Increased form completion rates by 20% and halved load times, improving UX across devices.",
      "Reduced new-user onboarding time by 35% with simplified navigation and embedded documentation.",
      "Caught 15% more bugs pre-release via 30+ code reviews; halved new hire ramp-up time with a comprehensive developer guide.",
    ],
  },
  {
    title: "Product Manager",
    subTitle: "Phygtl. (Feb 2025 - Mar 2025)",
    result: "Success",
    points: [
      "Uncovered key UX issues that led to improved tooltip help and email validation processes.",
      "Decreased user-reported issues by 20% through data-driven UX enhancements.",
      "Improved onboarding efficiency by 15% by addressing key user pain points.",
      "Lowered new user drop-off rates by 15% through redesigning Discord navigation and onboarding flow.",
      "Reduced user friction and accelerated account activations by integrating SSO with SMS backup and troubleshooting.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   subTitle: "HTOH Solutions LLC (Feb 2023 - Mar 2024)",
  //   result: "Coming Soon...",
  //   points: [
  //     "Enabled 85% cross-device functionality and reduced new-page build time by 30%, speeding project delivery.",
  //     "Improved navigation speed by 50ms and enhanced consistent user experience across devices.",
  //     "Optimized user experience with real-time inventory updates, achieving average fetch times under 200ms and 93% CORS success.",
  //     "Accelerated initial load time by 0.5 seconds while meeting WCAG AA accessibility standards with dark/light themes.",
  //     "Reduced build errors by 40% through automated Privacy & Terms documentation generation and CI/CD pipeline improvements.",
  //   ],
  // },
  {
    title: "Full Stack Web Developer",
    subTitle: "JS Associates (May 2020 - May 2022)",
    result: "Success",
    des: "",
    points: [
      "Reduced page load time by 10% and increased session duration by 12% through code refactoring.",
      "Cut bounce rate by 15% and achieved 95% WCAG compliance via responsive UI and GraphQL integration.",
      "Accelerated feature delivery by 15% and deployment speed by 20% with 30+ reusable components and CI/CD pipelines.",
      "Reduced downtime by 10% and cut regressions by 10% by resolving production issues quickly and implementing automated testing.",
      "Boosted team sprint velocity by 5% through Agile workshops and mentorship.",
    ],
  },
];

// export const certificationsData = [
//   {
//     id: 1,
//     image: huggingFace,
//     title: "Hugging Face Bootcamp",
//     platform: "Udemy, May 2025",
//     // link: "https://example.com/certification1",
//   },
//   {
//     id: 2,
//     image: outskill,
//     title: "Generative AI Masterminds",
//     platform: "OutSkill, Apr 2025",
//     // link: "https://example.com/certification2",
//   },
//   {
//     id: 3,
//     image: uiux,
//     title: "Complete Web & Mobile Designer",
//     platform: "Udemy, Aug 2024",
//     // link: "https://example.com/certification3",
//   },
//   {
//     id: 4,
//     image: webDevBootcamp,
//     title: "Web Development Bootcamp",
//     platform: "Udemy, Aug 2024",
//     // link: "https://example.com/certification3",
//   },
//   {
//     id: 5,
//     image: cybersecurity,
//     title: "Google Cybersecurity Professional Certificate",
//     platform: "Udemy, May 2024",
//     // link: "https://example.com/certification3",
//   },
// ];

export const certificationsData = [
  {
    id: 1,
    image: huggingFace,
    title: "Hugging Face Bootcamp",
    platform: "Udemy, May 2025",
    points: [
      "Mastered the Hugging Face platform: models, datasets, spaces, and tokens.",
      "Set up AI development environments on Hugging Face and Google Colab.",
      "Applied Transformers for text classification, entity recognition, and text generation.",
      "Developed and fine‑tuned image generation pipelines using the Diffusers library.",
      "Explored video and audio generation models for dynamic media creation.",
      "Built interactive ML applications with Gradio for user‑friendly demos.",
      "Implemented advanced LLM techniques and prompt engineering strategies.",
      "Initiated, managed, and deployed end‑to‑end machine learning projects.",
    ],
  },
  {
    id: 2,
    image: outskill,
    title: "Generative AI Masterminds",
    platform: "OutSkill, Apr 2025",
    points: [
      "Analyzed the AI industry landscape and emerging career roles in AI generalism.",
      "Defined and applied generative AI principles across text, image, video, and audio.",
      "Practiced structured prompt engineering: zero‑shot, few‑shot, Chain‑of‑Thought, and GRWC framework.",
      "Created and refined custom GPT agents, including a Retrieval‑Augmented AI mentor.",
      "Integrated Eleven Labs API for voice‑enabled AI interactions.",
      "Designed and deployed Make.com automation workflows for onboarding and content posting.",
      "Developed monetization strategies: service offerings, consulting, and community branding.",
      "Worked with low‑code/no‑code tools to prototype AI‑powered applications rapidly.",
    ],
  },
  {
    id: 3,
    image: uiux,
    title: "Complete Web & Mobile Designer",
    platform: "Udemy, Aug 2024",
    points: [
      "Mastered design principles from sketching and wireframing to hi‑fi prototypes in Figma.",
      "Created responsive web and mobile layouts using auto layout, grids, and breakpoints.",
      "Applied UI/UX best practices and accessibility guidelines throughout the workflow.",
      "Built and managed comprehensive design systems with components, variants, and assets.",
      "Converted Figma designs into live HTML5/CSS3 websites and interactive prototypes.",
      "Designed logos, branding elements, and visual assets with industry‑standard tools.",
      "Tested and iterated designs through usability feedback and prototyping sessions.",
    ],
  },
  {
    id: 4,
    image: webDevBootcamp,
    title: "Web Development Bootcamp",
    platform: "Udemy, Aug 2024",
    points: [
      "Built 16 real‑world web projects covering both frontend and backend stacks.",
      "Mastered JavaScript ES6+, React.js with hooks, and state management.",
      "Developed RESTful APIs using Node.js, Express.js, and MongoDB/PostgreSQL.",
      "Implemented user authentication and authorization with JWT and OAuth.",
      "Deployed full‑stack applications and Web3 demos with blockchain and smart contracts.",
      "Automated development workflows using Git, GitHub, and continuous deployment tools.",
    ],
  },
  {
    id: 5,
    image: cybersecurity,
    title: "Google Cybersecurity Professional Certificate",
    platform: "Coursera, May 2024",
    points: [
      "Gained proficiency in Python, Linux, and SQL for automated security tasks.",
      "Configured SIEM tools and intrusion detection systems to monitor threats.",
      "Conducted vulnerability assessments and system hardening with Kali Linux.",
      "Developed incident response playbooks and managed security incidents.",
      "Analyzed cyber threat intelligence and implemented threat mitigation strategies.",
      "Simulated real‑world cybersecurity scenarios in hands‑on labs and projects.",
    ],
  },
];

export const certificationsGradientMap = {
  "hugging-face-bootcamp": {
    light: "linear-gradient(to bottom right, #f062a3, #f9f586)",
    dark: "linear-gradient(to bottom right, #7d2352, #7a732f)",
  },
  "generative-ai-masterminds": {
    light: "linear-gradient(to bottom right, #61d4a3, #b78fff)",
    dark: "linear-gradient(to bottom right, #4db27a, #4f2a7a)",
  },
  "complete-web-&-mobile-designer": {
    light: "linear-gradient(to bottom right, #73d5e2, #96fbc4)",
    dark: "linear-gradient(to bottom right, #1d5ea4, #226346)",
  },
  "web-development-bootcamp": {
    light: "linear-gradient(to bottom right, #f1e15e, #96fbc4)",
    dark: "linear-gradient(to bottom right, #8e8f4c, #226346)",
  },
  "google-cybersecurity-professional-certificate": {
    light: "linear-gradient(to bottom right, #ff7f92, #fff98f)",
    dark: "linear-gradient(to bottom right, #6e0c19, #453a94)",
  },
};


export const experienceData = [
  {
    title: "Software Engineer",
    subTitle: "Lean Innovation Labs LLC (Oct 2024 - Apr 2025)",
    result: "USA",
    points: [
      "Developed two web apps to automate data entry workflows, replacing manual Google Forms and Excel processes.",
      "Implemented UI features like password toggles, resizable tables, and REST endpoints for app configuration.",
      "Redesigned responsive App Info Forms for mobile and desktop to improve usability and performance.",
      "Streamlined navigation by adding embedded documentation and improving user flows.",
      "Led bi-weekly code reviews and authored developer guides to accelerate new hire onboarding.",
    ],
  },
  {
    title: "Product Manager",
    subTitle: "Phygtl. (Feb 2025 - Mar 2025)",
    result: "USA",
    points: [
      "Conducted UX research through surveys and live user observation to identify onboarding pain points.",
      "Worked with cross-functional teams to analyze user feedback and implement product improvements.",
      "Collaborated on optimizing user flows, tooltips, and validation processes for better engagement.",
      "Redesigned community support structure through Discord, improving clarity and guidance for new users.",
      "Supported verification and account setup improvements including SSO and backup mechanisms.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   subTitle: "HTOH Solutions LLC (Feb 2023 - Feb 2024)",
  //   result: "USA",
  //   points: [
  //     "Developed modular UI components using React and Tailwind CSS for a responsive frontend framework.",
  //     "Implemented client-side routing with React Router and smooth scrolling via React-Scroll in a single-page app.",
  //     "Designed and deployed backend integrations using AWS API Gateway for real-time data updates.",
  //     "Created adaptive layouts and themes using CSS Grid, Flexbox, and theming techniques.",
  //     "Established automated documentation generation and standardized CI/CD pipelines to improve build reliability.",
  //   ],
  // },
  {
    title: "Full Stack Web Developer",
    subTitle: "JS Associates (May 2020 - May 2022)",
    result: "IN",
    points: [
      "Developed and maintained full-stack web applications using React, Material-UI, and JavaScript (ES6+).",
      "Worked with backend technologies and services to build and integrate REST/GraphQL APIs.",
      "Utilized AWS and Docker to support scalable deployment and infrastructure management.",
      "Created modular frontend components and microservices to support product features.",
      "Engaged in Agile ceremonies and contributed to ongoing team development practices.",
    ],
  },
];

export const experienceGradientMap = {
  "product-manager": {
    light: "linear-gradient(to bottom right, #ff9aad, #b78fff)",
    dark: "linear-gradient(to bottom right, #8a3a48, #4f2a7a)",
  },
  // "frontend-developer": {
  //   light: "linear-gradient(to bottom right, #ffd97a, #b78fff)",
  //   dark: "linear-gradient(to bottom right, #8a3a48, #4f2a7a)",
  // },
  "software-engineer": {
    light: "linear-gradient(to bottom right, #a0f0f4, #b78fff)",
    dark: "linear-gradient(to bottom right, #0d7998, #4f2a7a)",
  },
  "full-stack-web-developer": {
    light: "linear-gradient(to bottom right, #96fbc4, #b78fff)",
    dark: "linear-gradient(to bottom right, #226346, #4f2a7a)",
  },
  "masters-in-computer-science": {
    light: "linear-gradient(to bottom right, #ffbfa7, #b78fff)",
    dark: "linear-gradient(to bottom right, #8a4637, #4f2a7a)",
  },
  "bachelors-in-electronics-and-instrumentation-engineering": {
    light: "linear-gradient(to bottom right, #f9f586, #b78fff)",
    dark: "linear-gradient(to bottom right, #7a732f, #4f2a7a)",
  },
};
  
  

export const skillsData = [
  {
    category: "Programming & Scripting",
    subCategories: [
      {
        title: "Languages",
        items: [
          { type: "icon", component: FaHtml5, color: "#E34F26" },
          { type: "icon", component: FaCss3Alt, color: "#1572B6" },
          { type: "icon", component: FaJs, color: "#F0DB4F" },
          {
            type: "icon",
            component: SiTypescript,
            color: "#007ACC",
            className: "w-10 h-10",
          },
          { type: "image", src: Python, alt: "Python", className: "w-11 h-11" },
          { type: "image", src: SQL, alt: "SQL", className: "w-11 h-11" },
        ],
      },
    ],
  },
  {
    category: "Development",
    subCategories: [
      {
        title: "Frontend",
        items: [
          {
            type: "icon",
            component: SiJquery,
            color: "#0769AD",
          },
          { type: "icon", component: FaReact, color: "#61DAFB" },
          { type: "icon", component: SiRedux, color: "#764ABC" },
          { type: "icon", component: SiNextdotjs, color: "#ffffff" },
          // { type: "icon", component: SiAngular, color: "#DD0031" },
          { type: "icon", component: SiBootstrap, color: "#7952B3" },
          { type: "icon", component: SiTailwindcss, color: "#38B2AC" },
          {
            type: "image",
            src: MaterialUI,
            alt: "Material UI",
            color: "#0081CB",
            className: "w-12 h-12",
          },
          {
            type: "icon",
            component: SiWebgl,
            color: "#FFFFFF",
            className: "w-14 h-14",
          },
          { type: "image", src: OpenCV, alt: "OpenCV", className: "w-11 h-11" },
        ],
      },
      {
        title: "Backend & Databases",
        items: [
          { type: "icon", component: SiNestjs, color: "#E0234E" },
          { type: "icon", component: SiMysql, color: "#4479A1" },
          { type: "icon", component: SiPostgresql, color: "#336791" },
          { type: "icon", component: FaNodeJs, color: "#539E43" },
          { type: "icon", component: SiMongodb, color: "#47A248" },
          {
            type: "image",
            src: RestAPI,
            alt: "REST API",
            className: "w-14 h-12",
          },
          { type: "icon", component: SiGraphql, color: "#E10098" },
          { type: "icon", component: FaGitAlt, color: "#F05032" },
        ],
      },
    ],
  },
  {
    category: "AI",
    subCategories: [
      {
        title: "Machine Learning",
        items: [
          {
            type: "image",
            src: Tensorflow,
            alt: "Tensorflow",
            className: "w-12 h-12",
          },
          {
            type: "image",
            src: TeachableMachine,
            alt: "Teachable Machine",
            className: "w-12 h-12",
          },
          {
            type: "image",
            src: HuggingFace,
            alt: "Hugging Face",
            className: "w-14 h-14",
          },
        ],
      },
    ],
  },
  {
    category: "Design",
    subCategories: [
      {
        title: "UI/UX",
        items: [
          { type: "image", src: Figma, alt: "Figma", className: "w-11 h-11" },
          { type: "icon", component: SiAdobephotoshop, color: "#31A8FF" },
          { type: "icon", component: SiAdobeillustrator, color: "#FF9A00" },
          { type: "icon", component: SiAdobeindesign, color: "#FF3366" },
        ],
      },
    ],
  },
  {
    category: "Productivity",
    subCategories: [
      {
        title: "Tools",
        items: [
          {
            type: "image",
            src: MSOffice365,
            alt: "MS Office 365",
            className: "w-12 h-12",
          },
          {
            type: "image",
            src: VitePress,
            alt: "VitePress",
            className: "w-14 h-14",
          },
          {
            type: "icon",
            component: SiMarkdown,
            color: "#ffffff",
          },
          { type: "image", src: Slack, alt: "Slack", className: "w-11 h-11" },
          {
            type: "icon",
            component: SiNotion,
            color: "#ffffff",
          },
          {
            type: "icon",
            component: BiLogoZoom,
            color: "#0B5CFF",
          },
        ],
      },
    ],
  },
];