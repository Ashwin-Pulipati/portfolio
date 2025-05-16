export const getClassName = (type) => {
  if (type === "email") {
    return "text-red-600 dark:text-red-100 bg-red-100 border-red-800 dark:bg-red-800 dark:border-red-100";
  } else if (type === "linkedin") {
    return "text-blue-700 dark:text-blue-100 bg-blue-100 border-blue-800 dark:bg-blue-800 dark:border-blue-100";
  } else {
    return "bg-white border-black dark:bg-black dark:border-white";
  }
};

export const getTriangleClassName = (type) => {
  if (type === "email") {
    return "bg-red-100 border-r border-b border-red-800 dark:bg-red-800 dark:border-red-100";
  } else if (type === "linkedin") {
    return "bg-blue-100 border-r border-b border-blue-800 dark:bg-blue-800 dark:border-blue-100";
  } else {
    return "bg-white border-r border-b border-black dark:bg-black dark:border-white";
  }
};


export const displayName = {
  email: "Email",
  linkedin: "LinkedIn",
  github: "GitHub",
};
