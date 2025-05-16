import React from "react";
import Demo from "./Demo";
import Github from "./Github";
import Likes from "./Likes";
import StarRating from "./Rating";
import Website from "./Website";

const ProjectDetailInterest = ({ projectId, github, website, demo }) => (
  <div className="flex flex-col mt-6 gap-6">
    <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
      <Github github={github} temporary={false} />
      <Website website={website} temporary={false} />
      <Demo demo={demo} temporary={false} />
    </div>
    <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
      <Likes projectId={projectId} temporary={false} />
      <StarRating projectId={projectId} temporary={false} />
    </div>
  </div>
);

export default React.memo(ProjectDetailInterest);
