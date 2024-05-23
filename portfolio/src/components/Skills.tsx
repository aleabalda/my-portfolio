import { useEffect, useState } from "react";
import { LogoData } from "./LogoData";

export default function Skills() {
  const [noPreference, setNoPreference] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setNoPreference(false);
    }
  }, [setNoPreference]);

  return (
    <section id="skills-section" className="section-container">
      <h2 className="skills-heading">Skills</h2>
      <p className="skills-text">
        My constantly expanding set of tools and technologies
      </p>
      <div data-animated={noPreference} className="scroller">
        <div className="inner-scroller">
          {LogoData.map((val, key) => (
            <div key={`logo-${key}`} className="logo">
              <img className="logo-image" src={val.logoURL} alt={val.name} />
              <div className="tooltip">{val.name}</div>
            </div>
          ))}
          {LogoData.map((val, key) => (
            <div key={`logo-${key}`} className="logo dupe" aria-hidden="true">
              <img className="logo-image" src={val.logoURL} alt={val.name} />
              <div className="tooltip">{val.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
