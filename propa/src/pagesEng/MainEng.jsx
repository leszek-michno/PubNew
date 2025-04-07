import { Helmet } from "react-helmet";
import "../assets/styles/MainPL.scss";
import {
  ContactLinkEng,
  GalleryLinkEng,
  MenuLinkEng,
  NewsLinkEng,
} from "../components/HomePageEng";

const MainEng = () => {
  return (
    <div>
      <Helmet>
        <title>Pub Propaganda</title>
        <meta
          name="description"
          content="Pub in Krakow (in the Kazimierz district) with beer and other goods for people who like punk, ska, psychobilly and rockabilly music."
        />
      </Helmet>
      <header>
        <h1>PUB PROPAGANDA</h1>
        <h2 className="anime">One of the oldest pubs in Krakow</h2>
        <h3>
          <a href={"https://featurable.com/widgets/db502093-11ff-4473-a6fb-eea9d3b75fc7"}
          target="_blank"
          rel="noopener noreferrer"
          >
          reviews about our pub
          </a>
        </h3>

      </header>
      <div className="homeLinks">
        <NewsLinkEng />
        <MenuLinkEng />
        <ContactLinkEng />
        <GalleryLinkEng />
      </div>
    </div>
  );
};
export default MainEng;
