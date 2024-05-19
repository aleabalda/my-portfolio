import { Button } from "../components/ui/Button";
import WavingHand from "../assets/icons/WavingHand";
import pfp from "../assets/images/pfp.jpg";

export default function Hero() {
  return (
    <section id="hero-section" className="section-container">
      <div className="hero-text-container">
        <p className="hero-text">
          Hello there <WavingHand /> my name is
        </p>
        <p id="hero-name" className="name">
          Alessandro Baldassarre
        </p>
        <p id="role" className="hero-text">
          Full-Stack Developer
        </p>
        <p id="mini-info" className="hero-text">
          I am a third-year software engineering student at the University of
          Calgary passionate about full-stack development. Welcome to my
          website!
        </p>
        <div className="button-group">
          <Button ID="primary" text="View Resume" />
          <Button ID="secondary" text="Linktree" />
        </div>
      </div>
      <img className="pfp" alt="pfp" src={pfp} />
    </section>
  );
}
