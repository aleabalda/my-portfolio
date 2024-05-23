import memojiPeace from "../assets/images/memoji-peace.png";
import { AboutCard } from "./AboutCard";
import { AboutData } from "./AboutData";

export default function About() {
  return (
    <section id="about-section" className="section-container">
      <div className="section-heading">
        <h2>About Me</h2>
        <img
          id="about-memoji"
          className="memoji"
          src={memojiPeace}
          alt="memoji laptop"
        />
      </div>
      <div className="bento-grid">
        {AboutData.map((val, key) => (
          <AboutCard
            key={`about-card-${key}`}
            id={val.id}
            image={val.image}
            title={val.title}
            text={val.text}
            reference={val.reference}
          />
        ))}
      </div>
    </section>
  );
}
