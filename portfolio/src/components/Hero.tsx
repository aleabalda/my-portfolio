import { Button } from "../components/ui/Button";
import WavingHand from "../assets/icons/WavingHand";
import pfp from "../assets/images/pfp.jpg";
import { TypeAnimation } from "react-type-animation";
import Resume from "../assets/Resume.pdf";

export default function Hero() {
  return (
    <section id="hero-section" className="section-container">
      <div id="hero-content" className="section-container">
        <div className="hero-text-container">
          <p className="hero-text">
            Hello there, <WavingHand /> my name is
          </p>
          <p id="hero-name" className="hero-title">
            Alessandro Baldassarre
          </p>
          <p id="role" className="hero-title">
            <TypeAnimation
              sequence={[
                "Aspiring Full-Stack Developer",
                1000,
                "Software Engineering Student",
                1000,
              ]}
              repeat={Infinity}
            />
          </p>
          <p id="mini-info" className="hero-text">
            I am a third-year software engineering student at the University of
            Calgary passionate about full-stack development. Welcome to my
            website!
          </p>
          <div className="button-group">
            <Button ID="primary" text="View Resume" link={Resume} />
            <Button
              ID="secondary"
              text="Linktree"
              link="https://linktr.ee/aleabalda"
            />
          </div>
        </div>
        <img className="pfp" alt="pfp" src={pfp} />
      </div>
    </section>
  );
}
