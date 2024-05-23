export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <a className="nav-link" href="#projects-section">
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#skills-section">
            Skills
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#about-section">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#contact-section">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
