import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { slugify } from "../layouts/Utils";
import ProjectDetail from "./ProjectDetail";
import { allProjectsList } from "./Projects.Utils";
import MultiplicationWorksheetGeneratorProjectDetail from "../DB/Multiplication-Worksheet-Generator/MultiplicationWorksheetGeneratorProjectDetail";
import KNProjectDetail from "../DB/Keeper-Notes/KeeperNotesDetail";
import TeachableMachineImageModelDetail from "../DB/Teachable-Machine-Image-Model/TeachableMachineImageModelDetail";
import FacialLandmarkingDetail from "../DB/Facial-Landmarking/FacialLandmarkingDetail";
import VirtualRLandingPageDetail from "../DB/VirtualR-Landing-Page/VirtualRLandingPageDetail";
import ProjectNotFoundOctacat from "../../assets/images/Other Formats/project-not-found-octacat.png";

export default function ProjectDetailLoader({ onSearch, searchQuery }) {
  const { category, title } = useParams();
  const location = useLocation();
  const subParam = new URLSearchParams(location.search).get("sub") || "";

  const humanize = React.useCallback(
    (slug) =>
      slug
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" "),
    []
  );

  const project = allProjectsList.find((p) => slugify(p.title) === title);

  

  const DBProjectComponents = React.useMemo(
    () => ({
      "multiplication-worksheet-generator":
        MultiplicationWorksheetGeneratorProjectDetail,
      "keeper-notes": KNProjectDetail,
      "teachable-machine-image-model": TeachableMachineImageModelDetail,
      "multi-facial-landmarking-with-emotion-and-age-and-gender-detection":
        FacialLandmarkingDetail,
      "virtualr-landing-page": VirtualRLandingPageDetail,
    }),
    []
  );

  if (!project)
    return (
      <div className="col-span-full flex flex-col justify-center items-center min-h-[calc(100vh-15rem)] text-2xl text-gray-500 dark:text-gray-500 font-titleFont">
        <>
          <img
            src={ProjectNotFoundOctacat}
            alt="Project Not Found OctaCat"
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
          />
          Project Not Found
        </>
      </div>
    );

  const defaultSub = category === "ai" ? "All AI" : "All Stacks";
  const subcategory = subParam ? humanize(subParam) : defaultSub;

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