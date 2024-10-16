import "../assets/styles/Header.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import "../assets/styles/Contact.scss";
import ContactFormEng from "../components/ContactFormEng";


const ContactPl = () => {
  return (
    <>
      <div>
        <header>
          <h1>Contact</h1>
        </header>
      </div>
      <section className="contact">
      <div className="adress">
        <div>
        <h2>Pub Propaganda</h2>
          <p>Miodowa str. 20/3</p>
          <p>31-055 Kraków</p>
          <iframe
            title="Propaganda"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.789085723698!2d19.941604715608353!3d50.052782223819655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6afe1cf8bf%3A0xc565cb891f25209f!2sPUB%20Propaganda!5e0!3m2!1spl!2spl!4v1662061083170!5m2!1spl!2spl"
          ></iframe>
        </div>
        <div>
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
        <div className="hours">
        <h2>Opening hours:</h2>
          <p className="colorBlue"> from Monday to Thursday: </p>
          <p>from 5 pm to 2 am;</p>
          <p className="colorBlue">on Friday and Saturday: </p>
          <p>from 6 pm to 4 am;</p>
          <p className="colorBlue">on Suday: </p>
          <p>from 6 pm to 2 am.</p>
        </div>
      </div>
      <div><ContactFormEng/></div>
      </section>
      
      
    </>
  );
};

export default ContactPl;


