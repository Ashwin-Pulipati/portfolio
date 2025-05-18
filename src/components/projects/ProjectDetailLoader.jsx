import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import { allProjectsList } from "./Projects.Utils";
import { slugify } from "../layouts/Utils";

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
