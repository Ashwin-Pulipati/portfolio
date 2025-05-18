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
  if (!createdAt) return null;

  const projectDate = new Date(createdAt);
  const currentDate = Date.now();
  const diffTime = (currentDate - projectDate.getTime()) / 1000;

  if (diffTime < 60)
    return `${Math.floor(diffTime)} sec${diffTime > 1 ? "s" : ""} ago`;
  if (diffTime < 3600)
    return `${Math.floor(diffTime / 60)} min${
      Math.floor(diffTime / 60) > 1 ? "s" : ""
    } ago`;
  if (diffTime < 86400)
    return `${Math.floor(diffTime / 3600)} hr${
      Math.floor(diffTime / 3600) > 1 ? "s" : ""
    } ago`;

  const days = Math.floor(diffTime / 86400);
  if (days % 7 === 0) {
    const weeks = days / 7;
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }

  return `${days} day${days > 1 ? "s" : ""} ago`;
};
