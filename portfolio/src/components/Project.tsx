import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ProjectProps {
  title: string;
  description: JSX.Element;
  tools: string[];
  icon: JSX.Element;
  siteLink: string | undefined;
  sourceCode: string;
  imageURL: string;
}

export default function Project({
  title,
  description,
  tools,
  icon,
  siteLink,
  sourceCode,
  imageURL,
}: ProjectProps) {
  return (
    <div className="project">
      <div className="image-card">
        <img className="project-image" src={imageURL} alt="project image" />
        <span className="project-icon-container">{icon}</span>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-body">{description}</div>
        <div className="tools-list">
          {tools.map((val, key) => (
            <div key={`tool-${key}`} className="project-tool">
              {val}
            </div>
          ))}
        </div>
        <div className="button-group">
          {siteLink !== undefined && (
            <a
              id="view-site"
              className="project-link"
              href={siteLink}
              target="_blank"
            >
              View Site <ArrowForwardIosIcon fontSize="small" />
            </a>
          )}
          <a
            id="view-code"
            className="project-link"
            href={sourceCode}
            target="_blank"
          >
            View Source Code <ArrowForwardIosIcon fontSize="small" />
          </a>
        </div>
      </div>
    </div>
  );
}
