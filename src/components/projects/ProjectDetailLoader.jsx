import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "./constants/ProjectsCardData";
import { slugify } from "../layouts/Utils";

const ProjectDetailLoader = ({ searchQuery, onSearch }) => {
  const { category, title } = useParams();

  // Lookup the project data
  const categoryDataObj = useMemo(
    () => projectsData.find((catObj) => Object.keys(catObj)[0] === category),
    [category]
  );

  const projectsArray = useMemo(
    () => categoryDataObj && categoryDataObj[category],
    [categoryDataObj, category]
  );

  const project = useMemo(
    () =>
      projectsArray &&
      projectsArray.find((proj) => slugify(proj.title) === title),
    [projectsArray, title]
  );

  if (!categoryDataObj) return <div>Category not found</div>;
  if (!project) return <div>Project not found</div>;

  const DetailComponent = project.component;
  return (
    <DetailComponent
      {...project}
      searchQuery={searchQuery}
      onSearch={onSearch} // forward the onSearch prop here
    />
  );
};

export default React.memo(ProjectDetailLoader);
