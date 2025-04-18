import "../assets/styles/Header.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import "../assets/styles/Contact.scss";
import ContactForm from "../components/ContactForm";

const ContactPl = () => {
  return (
    <>
      <div>
        <header>
          <h1>Kontakt</h1>
        </header>
        <p className="booking">🍻 nie prowadzimy rezerwacji miejsc 🍻 </p>
      </div>
      <section className="contact">
        <div className="adress">
          <div>
            <h2>Pub Propaganda</h2>
            <p>ul. Miodowa 20/3</p>
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
            <h2>Godziny otwarcia:</h2>
            <p className="colorBlue"> od poniedziałku do czwartku: </p>
            <p>od godz 17.00 do godz 02.00;</p>
            <p className="colorBlue">w piątek i sobotę: </p>
            <p>od godz 18.00 do godz 04.00;</p>
            <p className="colorBlue">niedziela: </p>
            <p>od godz 18.00 do godz 02.00.</p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactPl;
