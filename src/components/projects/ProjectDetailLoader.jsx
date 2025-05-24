// import React from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { allProjectsList } from "./Projects.Utils";
// import { slugify } from "../layouts/Utils";
// import ProjectDetail from "./ProjectDetail";

// export default function ProjectDetailLoader({ onSearch, searchQuery }) {
//   const { category, title } = useParams();
//   const location = useLocation();
//   const subParam = new URLSearchParams(location.search).get("sub") || "";

//   const project = allProjectsList.find((p) => slugify(p.title) === title);

//   if (!project) return <div>Project not found</div>;

//   const humanize = (slug) =>
//     slug
//       .split("-")
//       .map((w) => w[0].toUpperCase() + w.slice(1))
//       .join(" ");

//   const defaultSub = category === "ai" ? "All AI" : "All Stacks";
//   const subcategory = subParam ? humanize(subParam) : defaultSub;

//   return (
//     <ProjectDetail
//       {...project}
//       category={humanize(category)}
//       subcategory={subcategory}
//       onSearch={onSearch}
//       searchQuery={searchQuery}
//     />
//   );
// }

import { useLocation, useParams } from "react-router-dom";
import { slugify } from "../layouts/Utils";
import ProjectDetail from "./ProjectDetail";
import { allProjectsList } from "./Projects.Utils";
import MultiplicationWorksheetGeneratorProjectDetail from "../DB/Multiplication-Worksheet-Generator/MultiplicationWorksheetGeneratorProjectDetail";

export default function ProjectDetailLoader({ onSearch, searchQuery }) {
  const { category, title } = useParams();
  const location = useLocation();
  const subParam = new URLSearchParams(location.search).get("sub") || "";

  const project = allProjectsList.find((p) => slugify(p.title) === title);

  if (!project) return <div>Project not found</div>;

  const humanize = (slug) =>
    slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  const defaultSub = category === "ai" ? "All AI" : "All Stacks";
  const subcategory = subParam ? humanize(subParam) : defaultSub;

  const DBProjectComponents = {
    "multiplication-worksheet-generator":
      MultiplicationWorksheetGeneratorProjectDetail,
  };

  const ProjectComponent = DBProjectComponents[slugify(project.title)];

  if (ProjectComponent) {
    return (
      <ProjectComponent
        {...project}
        category={humanize(category)}
        subcategory={subcategory}
        onSearch={onSearch}
        searchQuery={searchQuery}
      />
    );
  }

  return (
    <ProjectDetail
      {...project}
      category={humanize(category)}
      subcategory={subcategory}
      onSearch={onSearch}
      searchQuery={searchQuery}
    />
  );
}
