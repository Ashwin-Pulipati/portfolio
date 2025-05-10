import { slugify } from "../../layouts/Utils";
import { allProjects } from "./ProjectsCardData";

export const groupBy = (arr, keyFn) =>
  arr.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

export const allProjectsList = allProjects;

export const projectsByCategory = groupBy(allProjects, (p) =>
  slugify(p.category)
);

export const projectsBySubcategory = groupBy(
  allProjects.filter((p) => p.sub),
  (p) => `${slugify(p.category)}||${slugify(p.sub)}`
);

