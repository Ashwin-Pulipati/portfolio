import React from "react";
import Github from "./Github";
import Likes from "./Likes";
import Rating from "./Rating";
import Website from "./Website";

const ProjectsInterest = ({ projectId, github, website}) => (
  <div
    className="flex items-center gap-2 md:gap-2 flex-wrap"
  >
    <Github github={github} temporary={true} />
    <Website website={website} temporary={true} />
    <Likes
      projectId={projectId}
      temporary={true}
    />
    <Rating
      projectId={projectId}
      temporary={true}
    />
  </div>
);

export default React.memo(ProjectsInterest);
