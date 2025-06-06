import { slugify } from "../layouts/Utils";
import { allProjects } from "./constants/ProjectsCardData";

export const groupBy = (arr, keyFn) => {
  const acc = new Map();
  for (const item of arr) {
    const key = keyFn(item);
    if (!acc.has(key)) acc.set(key, []);
    acc.get(key).push(item);
  }
  return Object.fromEntries(acc);
};

export const allProjectsList = allProjects;

export const projectsByCategory = {
  "all-categories": allProjectsList,
  ...groupBy(allProjects, (p) => slugify(p.category)),
};

export const projectsBySubcategory = groupBy(
  allProjects.filter((p) => p.sub),
  (p) => `${slugify(p.category)}||${slugify(p.sub)}`
);

export const getProjectAgeText = (createdAt) => {
  const projectDate = new Date(createdAt);
  const diffTime = Date.now() - projectDate.getTime();
  const seconds = Math.floor(diffTime / 1000);

  if (seconds < 60) return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
  if (seconds < 3600)
    return `${Math.floor(seconds / 60)} min${
      Math.floor(seconds / 60) !== 1 ? "s" : ""
    } ago`;
  if (seconds < 86400)
    return `${Math.floor(seconds / 3600)} hr${
      Math.floor(seconds / 3600) !== 1 ? "s" : ""
    } ago`;

  const days = Math.floor(seconds / 86400);

  if (days < 14) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  return projectDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};