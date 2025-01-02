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
      
        <div>
        <MusicBG/>
          <a href={"mailto:contact@pubpropaganda.eu"}>
            <p> contact@pubpropaganda.eu</p>
          </a>
          <div className="social-media">
          <a
            href={"https://www.facebook.com/propapub"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href={"https://www.instagram.com/pub_propaganda/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <AiOutlineInstagram />
          </a>
          <a 
          href={"mailto:contact@pubpropaganda.eu"}
          aria-label="Send message to us"
          >
          
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
        <div> copyright@2024Lem-Son  </div>
      </div>
    </>
  );
};

export default Footer;
