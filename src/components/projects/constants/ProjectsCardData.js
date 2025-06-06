// // import projectOne from "../../../assets/images/Webp/projectOne.webp";
// // import projectThree from "../../../assets/images/Webp/projectThree.webp";
// // import projectTwo from "../../../assets/images/Webp/projectTwo.webp";
// import MultiplicationWorksheetGeneratorProjectDetail from "../../DB/Multiplication-Worksheet-Generator/MultiplicationWorksheetGeneratorProjectDetail";
// // import ProjectDetail from "../ProjectDetail";
// import MWGThumbnail from "../../../assets/images/DB Images/MWG/Thumbnail.png";
// import KeeperNotesDetail from "../../DB/Keeper-Notes/KeeperNotesDetail";
// import KNThumbnail from "../../../assets/images/DB Images/KN/Thumbnail.png";
// import TeachableMachineImageModelDetail from "../../DB/Teachable-Machine-Image-Model/TeachableMachineImageModelDetail";
// import TMIMThumbnail from "../../../assets/images/DB Images/TMIM/Thumbnail.png";
// import FacialLandmarkingDetail from "../../DB/Facial-Landmarking/FacialLandmarkingDetail";
// import FLThumbnail from "../../../assets/images/DB Images/FL/Thumbnail.png";
// import VirtualRLandingPageDetail from "../../DB/VirtualR-Landing-Page/VirtualRLandingPageDetail";
// import VRLPThumbnail from "../../../assets/images/DB Images/VRLP/Thumbnail.png";

// export const allProjects = [
//   // Frontend Development
//   {
//     id: "f1",
//     src: MWGThumbnail,
//     title: "Multiplication Worksheet Generator",
//     des: "A web app aimed at automating the process of generating multiplication worksheets, simplifying the workflow for educators and students.",
//     github:
//       "https://github.com/Ashwin-Pulipati/Multiplication-Worksheet-Generator",
//     website:
//       "https://ashwin-pulipati.github.io/Multiplication-Worksheet-Generator/",
//     demo: "https://github.com/Ashwin-Pulipati/Multiplication-Worksheet-Generator?tab=readme-ov-file#multiplication-worksheet-generator",
//     createdAt: "Jan 2024",
//     component: MultiplicationWorksheetGeneratorProjectDetail,
//     category: "frontend-development",
//     sub: null,
//   },
//   {
//     id: "f2",
//     src: KNThumbnail,
//     title: "Keeper Notes",
//     des: "A web app for real-time note-taking, designed to streamline personal organization with instant note creation, editing, and dynamic search highlighting.",
//     github: "https://github.com/Ashwin-Pulipati/Keeper-Notes",
//     website: "https://ashwin-pulipati.github.io/Keeper-Notes/",
//     demo: "https://github.com/Ashwin-Pulipati/Keeper-Notes?tab=readme-ov-file#keeper-notes",
//     createdAt: "Sep 2024",
//     component: KeeperNotesDetail,
//     category: "frontend-development",
//     sub: null,
//   },
//   {
//     id: "f3",
//     src: VRLPThumbnail,
//     title: "VirtualR Landing Page",
//     des: "A futuristic web app designed to showcase a suite of VR development tools, built to deliver a sleek and interactive landing page experience.",
//     github: "https://github.com/Ashwin-Pulipati/VirtualR-Landing-Page",
//     website: "https://ashwin-pulipati.github.io/VirtualR-Landing-Page/",
//     demo: "https://github.com/Ashwin-Pulipati/VirtualR-Landing-Page?tab=readme-ov-file#virtualr-landing-page",
//     createdAt: "Aug 2024",
//     component: VirtualRLandingPageDetail,
//     category: "frontend-development",
//     sub: null,
//   },

//   // Full Stack Development, sub = mern-stack, mean-stack, pern-stack, python, java
//   // {
//   //   id: "mern1",
//   //   src: projectTwo,
//   //   title: "MERN Task Manager",
//   //   des: "A MERN stack app with user auth, CRUD operations, and task tracking.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://mern-task-manager.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "full-stack-development",
//   //   sub: "mern-stack",
//   // },
//   // {
//   //   id: "mean1",
//   //   src: projectOne,
//   //   title: "MEAN Expense Tracker",
//   //   des: "Track expenses using a MEAN stack app with real-time updates.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://mean-expense-tracker.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "full-stack-development",
//   //   sub: "mean-stack",
//   // },
//   // {
//   //   id: "pern1",
//   //   src: projectThree,
//   //   title: "PERN Blog Engine",
//   //   des: "Create and edit blogs in this full-stack PERN platform with PostgreSQL.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://pern-blog-engine.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "full-stack-development",
//   //   sub: "pern-stack",
//   // },
//   // {
//   //   id: "py1",
//   //   src: projectTwo,
//   //   title: "Flask Job Board",
//   //   des: "Job listing platform built with Flask and SQLAlchemy.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://flask-job-board.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "full-stack-development",
//   //   sub: "python",
//   // },
//   // {
//   //   id: "java1",
//   //   src: projectOne,
//   //   title: "Spring Boot E-commerce",
//   //   des: "Full-featured shopping site using Spring Boot and Thymeleaf.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://spring-boot-ecommerce.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "full-stack-development",
//   //   sub: "java",
//   // },

//   // Machine Learning
//   {
//     id: "ml1",
//     src: TMIMThumbnail,
//     title: "Teachable Machine Image Model",
//     des: "A real-time image classification web app using Teachable Machine and TensorFlow.js to detect and label objects through a webcam, streamlining visual recognition tasks.",
//     github: "https://github.com/Ashwin-Pulipati/teachable-machine-image-model",
//     website: "https://ashwin-pulipati.github.io/teachable-machine-image-model/",
//     demo: "https://github.com/Ashwin-Pulipati/teachable-machine-image-model/tree/main?tab=readme-ov-file#teachable-machine-image-model",
//     createdAt: "Apr 2024",
//     component: TeachableMachineImageModelDetail,
//     category: "machine-learning",
//     sub: null,
//   },
//   {
//     id: "ml2",
//     src: FLThumbnail,
//     title: "Multi Facial Landmarking with Emotion and Age and Gender Detection",
//     des: "A real-time facial analysis tool used to detect facial landmarks, classify expressions, and estimate age and gender from live webcam input.",
//     github:
//       "https://github.com/Ashwin-Pulipati/multi-face-emotion-age-gender-detection",
//     website:
//       "https://ashwin-pulipati.github.io/multi-face-emotion-age-gender-detection/",
//     demo: "https://github.com/Ashwin-Pulipati/multi-face-emotion-age-gender-detection/tree/main?tab=readme-ov-file#multi-facial-landmarking-with-emotion-age-and-gender-detection",
//     createdAt: "May 2024",
//     component: FacialLandmarkingDetail,
//     category: "machine-learning",
//     sub: null,
//   },

//   // UI/UX
//   // {
//   //   id: "u1",
//   //   src: projectThree,
//   //   title: "Mobile Banking App UI",
//   //   des: "A conceptual UI/UX design for a mobile banking app with smooth animations and accessibility features.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://banking-app-ui.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "ui-ux",
//   //   sub: null,
//   // },
//   // {
//   //   id: "u2",
//   //   src: projectOne,
//   //   title: "Travel Booking App UI",
//   //   des: "A travel booking app prototype with intuitive navigation and an engaging user experience.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://travel-booking-ui.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "ui-ux",
//   //   sub: null,
//   // },

//   // AI, sub = no-code | code-based
//   // {
//   //   id: "nc1",
//   //   src: projectTwo,
//   //   title: "Automation YouTube",
//   //   des: "A no-code AI automation demo.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://automation-demo.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "ai",
//   //   sub: "no-code",
//   // },
//   // {
//   //   id: "cb1",
//   //   src: projectOne,
//   //   title: "Hugging Face Gradio",
//   //   des: "A code-based AI demo with Hugging Face + Gradio.",
//   //   github: "https://github.com/Ashwin-Pulipati",
//   //   website: "https://huggingface-gradio.netlify.app/",
//   //   createdAt: new Date().toISOString(),
//   //   component: ProjectDetail,
//   //   category: "ai",
//   //   sub: "code-based",
//   // },
// ];



import MultiplicationWorksheetGeneratorProjectDetail from "../../DB/Multiplication-Worksheet-Generator/MultiplicationWorksheetGeneratorProjectDetail";
import MWGThumbnail from "../../../assets/images/DB Images/MWG/Thumbnail.png";
import KeeperNotesDetail from "../../DB/Keeper-Notes/KeeperNotesDetail";
import KNThumbnail from "../../../assets/images/DB Images/KN/Thumbnail.png";
import TeachableMachineImageModelDetail from "../../DB/Teachable-Machine-Image-Model/TeachableMachineImageModelDetail";
import TMIMThumbnail from "../../../assets/images/DB Images/TMIM/Thumbnail.png";
import FacialLandmarkingDetail from "../../DB/Facial-Landmarking/FacialLandmarkingDetail";
import FLThumbnail from "../../../assets/images/DB Images/FL/Thumbnail.png";
import VirtualRLandingPageDetail from "../../DB/VirtualR-Landing-Page/VirtualRLandingPageDetail";
import VRLPThumbnail from "../../../assets/images/DB Images/VRLP/Thumbnail.png";

export const allProjects = [
  {
    id: "f1",
    src: MWGThumbnail,
    title: "Multiplication Worksheet Generator",
    des: "A web app aimed at automating the process of generating multiplication worksheets, simplifying the workflow for educators and students.",
    github:
      "https://github.com/Ashwin-Pulipati/Multiplication-Worksheet-Generator",
    website:
      "https://ashwin-pulipati.github.io/Multiplication-Worksheet-Generator/",
    demo: "https://github.com/Ashwin-Pulipati/Multiplication-Worksheet-Generator?tab=readme-ov-file#multiplication-worksheet-generator",
    createdAt: "Jan 2024",
    component: MultiplicationWorksheetGeneratorProjectDetail,
    category: "frontend-development",
    sub: null,
  },
  {
    id: "f2",
    src: KNThumbnail,
    title: "Keeper Notes",
    des: "A web app for real-time note-taking, designed to streamline personal organization with instant note creation, editing, and dynamic search highlighting.",
    github: "https://github.com/Ashwin-Pulipati/Keeper-Notes",
    website: "https://ashwin-pulipati.github.io/Keeper-Notes/",
    demo: "https://github.com/Ashwin-Pulipati/Keeper-Notes?tab=readme-ov-file#keeper-notes",
    createdAt: "Sep 2024",
    component: KeeperNotesDetail,
    category: "frontend-development",
    sub: null,
  },
  {
    id: "f3",
    src: VRLPThumbnail,
    title: "VirtualR Landing Page",
    des: "A futuristic web app designed to showcase a suite of VR development tools, built to deliver a sleek and interactive landing page experience.",
    github: "https://github.com/Ashwin-Pulipati/VirtualR-Landing-Page",
    website: "https://ashwin-pulipati.github.io/VirtualR-Landing-Page/",
    demo: "https://github.com/Ashwin-Pulipati/VirtualR-Landing-Page?tab=readme-ov-file#virtualr-landing-page",
    createdAt: "Aug 2024",
    component: VirtualRLandingPageDetail,
    category: "frontend-development",
    sub: null,
  },
  {
    id: "ml1",
    src: TMIMThumbnail,
    title: "Teachable Machine Image Model",
    des: "A real-time image classification web app using Teachable Machine and TensorFlow.js to detect and label objects through a webcam, streamlining visual recognition tasks.",
    github: "https://github.com/Ashwin-Pulipati/teachable-machine-image-model",
    website: "https://ashwin-pulipati.github.io/teachable-machine-image-model/",
    demo: "https://github.com/Ashwin-Pulipati/teachable-machine-image-model/tree/main?tab=readme-ov-file#teachable-machine-image-model",
    createdAt: "Apr 2024",
    component: TeachableMachineImageModelDetail,
    category: "machine-learning",
    sub: null,
  },
  {
    id: "ml2",
    src: FLThumbnail,
    title: "Multi Facial Landmarking with Emotion and Age and Gender Detection",
    des: "A real-time facial analysis tool used to detect facial landmarks, classify expressions, and estimate age and gender from live webcam input.",
    github:
      "https://github.com/Ashwin-Pulipati/multi-face-emotion-age-gender-detection",
    website:
      "https://ashwin-pulipati.github.io/multi-face-emotion-age-gender-detection/",
    demo: "https://github.com/Ashwin-Pulipati/multi-face-emotion-age-gender-detection/tree/main?tab=readme-ov-file#multi-facial-landmarking-with-emotion-age-and-gender-detection",
    createdAt: "May 2024",
    component: FacialLandmarkingDetail,
    category: "machine-learning",
    sub: null,
  },
];
