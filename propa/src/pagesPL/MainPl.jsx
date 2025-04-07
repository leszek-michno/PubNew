import "../assets/styles/MainPL.scss";
import {
  ContactLink,
  GalleryLink,
  MenuLink,
  NewsLink,
} from "../components/HomePagePl";
import { Helmet } from "react-helmet";

const MainPl = () => {
  return (
    <div className="main">
      <Helmet>
        <title>Pub Propaganda</title>
        <meta
          name="description"
          content="Pub Propaganda jeden z najstarszych pubów w Krakowie (dzielnica Kazimierz) z piwem i innymi gadżetami dla osób lubiących muzykę punk, ska, psychobilly i rockabilly."
        />
      </Helmet>
      <header>
        <h1>PUB PROPAGANDA</h1>
        <h2 className="anime">
          Jeden z najstarszych pubów na krakowskim Kazimierzu
        </h2>
        <h3>
          <a href={"https://featurable.com/widgets/db502093-11ff-4473-a6fb-eea9d3b75fc7"}
          target="_blank"
          rel="noopener noreferrer"
          >
          opinie o nas
          </a>
        </h3>
      </header>
      <div className="homeLinks">
        <NewsLink />
        <MenuLink />
        <ContactLink />
        <GalleryLink />
      </div>
    </div>
  );
};

export default MainPl;
