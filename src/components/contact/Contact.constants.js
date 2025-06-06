// import {
//   FaEnvelope,
//   FaLinkedinIn,
//   FaGithub,
// } from "react-icons/fa";

// export const contactMethods = [
//   {
//     id: "email",
//     label: "Email Ashwin Pulipati",
//     icon: <FaEnvelope className="text-red-600 dark:text-red-500" />,
//     href: "mailto:ashwinpulipati@gmail.com",
//     copyText: "ashwinpulipati@gmail.com",
//     external: false,
//     copiedColor: "text-red-600 dark:text-red-500",
//   },
//   {
//     id: "linkedin",
//     label: "Visit LinkedIn profile of Ashwin Pulipati",
//     icon: <FaLinkedinIn className="text-blue-600" />,
//     href: "https://www.linkedin.com/in/ashwinpulipati",
//     copyText: "https://www.linkedin.com/in/ashwinpulipati",
//     external: true,
//     copiedColor: "text-blue-600",
//   },
//   {
//     id: "github",
//     label: "Visit GitHub profile of Ashwin Pulipati",
//     icon: <FaGithub className="text-black dark:text-white" />,
//     href: "https://github.com/Ashwin-Pulipati",
//     copyText: "https://github.com/Ashwin-Pulipati",
//     external: true,
//     copiedColor: "",
//   },
// ];


// export const groupedInputs = [
//   {
//     groupClass: "flex flex-wrap gap-6 xs:flex-col sm:flex-col md:flex-row",
//     fields: [
//       { label: "Your Name", name: "username", id: "username", type: "text" },
//       {
//         label: "Phone Number",
//         name: "phoneNumber",
//         id: "phoneNumber",
//         type: "text",
//       },
//     ],
//   },
//   {
//     groupClass: "flex flex-col gap-4 font-titleFont",
//     fields: [{ label: "Email", name: "email", id: "email", type: "email" }],
//   },
//   {
//     groupClass: "flex flex-col gap-4 font-titleFont",
//     fields: [
//       { label: "Subject", name: "subject", id: "subject", type: "text" },
//     ],
//   },
//   {
//     groupClass: "flex flex-col gap-4 font-titleFont",
//     fields: [
//       {
//         label: "Message",
//         name: "message",
//         id: "message",
//         type: "textarea",
//         rows: 6,
//       },
//     ],
//   },
// ];
  


// Contact.constants.js

import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const contactMethods = [
  {
    id: "email",
    label: "Email Ashwin Pulipati",
    icon: <FaEnvelope className="text-red-600 dark:text-red-500" />,
    href: "mailto:ashwinpulipati@gmail.com",
    copyText: "ashwinpulipati@gmail.com",
    external: false,
    copiedColor: "text-red-600 dark:text-red-500",
  },
  {
    id: "linkedin",
    label: "Visit LinkedIn profile of Ashwin Pulipati",
    icon: <FaLinkedinIn className="text-blue-600" />,
    href: "https://www.linkedin.com/in/ashwinpulipati",
    copyText: "https://www.linkedin.com/in/ashwinpulipati",
    external: true,
    copiedColor: "text-blue-600",
  },
  {
    id: "github",
    label: "Visit GitHub profile of Ashwin Pulipati",
    icon: <FaGithub className="text-black dark:text-white" />,
    href: "https://github.com/Ashwin-Pulipati",
    copyText: "https://github.com/Ashwin-Pulipati",
    external: true,
    copiedColor: "",
  },
];

export const groupedInputs = [
  {
    groupClass: "flex flex-wrap gap-6 xs:flex-col sm:flex-col md:flex-row",
    fields: [
      { label: "Your Name", name: "username", id: "username", type: "text" },
      {
        label: "Phone Number",
        name: "phoneNumber",
        id: "phoneNumber",
        type: "text",
      },
    ],
  },
  {
    groupClass: "flex flex-col gap-4 font-titleFont",
    fields: [{ label: "Email", name: "email", id: "email", type: "email" }],
  },
  {
    groupClass: "flex flex-col gap-4 font-titleFont",
    fields: [
      { label: "Subject", name: "subject", id: "subject", type: "text" },
    ],
  },
  {
    groupClass: "flex flex-col gap-4 font-titleFont",
    fields: [
      {
        label: "Message",
        name: "message",
        id: "message",
        type: "textarea",
        rows: 6,
      },
    ],
  },
];
