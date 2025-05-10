import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { slugify } from "../layouts/Utils";
import {projectsByCategory} from "./constants/ProjectDataUtils";

const ProjectDetailLoader = ({ searchQuery, onSearch }) => {
  const { category, title } = useParams();
  const projectsArray = useMemo(
    () => projectsByCategory[category] || [],
    [category]
  );
  const project = useMemo(
    () => projectsArray.find((proj) => slugify(proj.title) === title),
    [projectsArray, title]
  );

  if (!projectsArray.length) return <div>Category “{category}” not found</div>;
  if (!project) return <div>Project “{title}” not found</div>;

  const DetailComponent = project.component;
  return (
    <DetailComponent
      {...project}
      searchQuery={searchQuery}
      onSearch={onSearch}
    />
  );
};

export default React.memo(ProjectDetailLoader);
