import { useLocation, useParams } from "react-router-dom";
import { slugify } from "../layouts/Utils";
import ProjectDetail from "./ProjectDetail";
import { allProjectsList } from "./Projects.Utils";
import MultiplicationWorksheetGeneratorProjectDetail from "../DB/Multiplication-Worksheet-Generator/MultiplicationWorksheetGeneratorProjectDetail";
import KNProjectDetail from "../DB/Keeper-Notes/KeeperNotesDetail";
import TeachableMachineImageModelDetail from "../DB/Teachable-Machine-Image-Model/TeachableMachineImageModelDetail";
import FacialLandmarkingDetail from "../DB/Facial-Landmarking/FacialLandmarkingDetail";
import VirtualRLandingPageDetail from "../DB/VirtualR-Landing-Page/VirtualRLandingPageDetail";
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
    "keeper-notes": KNProjectDetail,
    "teachable-machine-image-model": TeachableMachineImageModelDetail,
    "multi-facial-landmarking-with-emotion-and-age-and-gender-detection": FacialLandmarkingDetail,
    "virtualr-landing-page": VirtualRLandingPageDetail,
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
