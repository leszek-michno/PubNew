import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/NavBar.scss";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../assets/Icons";
// import Heads from '../assets/images/redHeads.png';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const list = [
    { name: "Strona główna", path: "/" },
    { name: "Aktualności", path: "Aktualności" },
    { name: "Menu", path: "Menu" },
    { name: "Kontakt", path: "Kontakt" },
    { name: "Galeria", path: "Galeria" },
  ];
  const menu = list.map((item) => (
    <li key={item.name} className="nav-item">
      <NavLink onClick={handleClick} to={item.path} className="nav-links">
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <span>Flaga</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>{menu}</ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
      {/* <img src={Heads} alt="Lenin" /> */}
    </>
  );
};

export default NavBar;
