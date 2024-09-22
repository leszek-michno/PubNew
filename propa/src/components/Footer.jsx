import "../assets/styles/Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import MusicBG from "./MusicBG";

const Footer = () => {
  return (
    <>
      <div className="footer">
      <div> <MusicBG/> copyright@2024Lem-Son  </div>
        <div>
          <a href={"mailto:contact@pubpropaganda.eu"}>
            <p> contact@pubpropaganda.eu</p>
          </a>
          <div className="social-media">
          <a
            href={"https://www.facebook.com/propapub"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href={"https://www.instagram.com/pub_propaganda/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a href={"mailto:contact@pubpropaganda.eu"}>
            <AiOutlineMail />
          </a>
          </div>
        </div>
        <div>
          <p>Lem-Son Sp. z o.o.</p>
          <p>NIP 6762644868</p>
          <p>ul.Miodowa 20/3</p>
          <p>31-055 Kraków</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
