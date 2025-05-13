// import React, { useMemo } from "react";
// import { useParams } from "react-router-dom";
// import { slugify } from "../layouts/Utils";
// import {projectsByCategory} from "./constants/ProjectDataUtils";

// const ProjectDetailLoader = React.memo(({ searchQuery, onSearch }) => {
//   const { category, title: titleSlug } = useParams();
//   const title = useMemo(() => decodeURIComponent(titleSlug), [titleSlug]);
//   const projects = useMemo(() => projectsByCategory[category] || [], [category]);
//   const project = useMemo(() => projects.find((proj) => slugify(proj.title) === title), [projects, title]);

//   if (!projects.length) return <div>Category "{category}" not found</div>;
//   if (!project) return <div>Project "{title}" not found</div>;

//   const DetailComponent = project.component;
//   return (
//     <DetailComponent
//       {...project}
//       searchQuery={searchQuery}
//       onSearch={onSearch}
//     />
//   );
// });

// export default React.memo(ProjectDetailLoader);


import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import { allProjectsList } from "./constants/ProjectDataUtils";
import { slugify } from "../layouts/Utils";

export default function ProjectDetailLoader({ onSearch, searchQuery }) {
  const { category, title } = useParams();
  const location = useLocation();
  const subParam = new URLSearchParams(location.search).get("sub") || "";

  // find project by slugified title
  const project = allProjectsList.find((p) => slugify(p.title) === title);

  if (!project) return <div>Project not found</div>;

  // map slug back to human label
  const humanize = (slug) =>
    slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  const defaultSub = category === "ai" ? "All AI" : "All Stacks";
  const subcategory = subParam ? humanize(subParam) : defaultSub;

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
