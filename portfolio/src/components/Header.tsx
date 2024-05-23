import { useState } from "react";
import Navbar from "./Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="name">Alessandro Baldassarre</div>
      <Navbar />
      <div className="menu-dropdown">
        <span className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </span>
        {menuOpen && <Menu toggle={toggleMenu} />}
      </div>
    </header>
  );
}
