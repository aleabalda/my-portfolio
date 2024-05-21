import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer>
      <p id="footer-name" className="name">
        Alessandro Baldassarre
      </p>
      <Navbar />
      <div className="footer-socials">
        <a
          className="contact-icon"
          href="https://github.com/aleabalda"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a
          className="contact-icon"
          href="https://www.linkedin.com/in/aleabalda/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a
          className="contact-icon"
          href="https://www.instagram.com/codewithalee/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <button id="resume-button" className="button">
          Resume
        </button>
      </div>
    </footer>
  );
}
