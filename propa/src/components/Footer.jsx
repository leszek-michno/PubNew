import "../assets/styles/Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <p>Lem-Son Sp. z o.o.</p>
          <p>NIP 6762644868</p>
          <p>ul.Miodowa 20/3</p>
          <p>31-055 Kraków</p>
        </div>
        <div>
          <NavLink to="Kontakt"> Kontakt: </NavLink>
          <a href={"mailto:contact@pubpropaganda.eu"}>
            <p> contact@pubpropaganda.eu</p>
          </a>
        </div>
        <div>copyright@2024Lem-Son</div>
      </div>
    </>
  );
};

export default Footer;
