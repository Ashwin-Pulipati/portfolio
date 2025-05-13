import { slugify } from "../../layouts/Utils";
import { allProjects } from "./ProjectsCardData";

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
    ...groupBy(allProjects, p => slugify(p.category)),
};
  
export const projectsBySubcategory = groupBy(
  allProjects.filter((p) => p.sub),
  (p) => `${slugify(p.category)}||${slugify(p.sub)}`
);

