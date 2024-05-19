import { ProjectData } from "./ProjectData";
import Project from "./Project";
import memoji from "../assets/images/memoji-laptop.png";

export default function Projects() {
  return (
    <section id="projects-section" className="section-container">
      <div className="section-heading">
        <h2 id="projects-h2">Projects</h2>
        <img
          id="about-memoji"
          className="memoji"
          src={memoji}
          alt="memoji laptop"
        />
      </div>
      {ProjectData.map((val, key) => (
        <Project
          key={`project-${key}`}
          title={val.name}
          description={val.description}
          tools={val.tools}
          icon={val.icon}
          siteLink={val.siteLink}
          sourceCode={val.sourceCode}
          imageURL={val.imageURL}
        />
      ))}
    </section>
  );
}
