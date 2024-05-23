interface MenuProps {
  toggle: () => void;
}

export const Menu = ({ toggle }: MenuProps) => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a href="#projects-section" className="menu-link" onClick={toggle}>
          Projects
        </a>
      </li>
      <li className="menu-item">
        <a href="#skills-section" className="menu-link" onClick={toggle}>
          Skills
        </a>
      </li>
      <li className="menu-item">
        <a href="#about-section" className="menu-link" onClick={toggle}>
          About
        </a>
      </li>
      <li className="menu-item">
        <a href="#contact-section" className="menu-link" onClick={toggle}>
          Contact
        </a>
      </li>
    </ul>
  );
};
