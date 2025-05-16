import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const displayName = { email: "Email", linkedin: "LinkedIn", github: "GitHub" };

export const items = [
  {
    type: "email",
    icon: <FaEnvelope className="w-6 h-6 text-red-600 dark:text-red-300" />,
    action: () => navigator.clipboard.writeText("ashwinpulipati@gmail.com"),
  },
  {
    type: "linkedin",
    icon: <FaLinkedinIn className="w-6 h-6 text-blue-700 dark:text-blue-300" />,
    href: "https://www.linkedin.com/in/ashwinpulipati",
  },
  {
    type: "github",
    icon: <FaGithub className="w-6 h-6 text-black dark:text-white" />,
    href: "https://github.com/Ashwin-Pulipati",
  },
];
