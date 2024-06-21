// import Heads from '../assets/images/redHeads.png'
// import BarPhoto from '../assets/images/IMG5.webp'
import "../assets/styles/MainPL.scss";
import {
  ContactLink,
  GalleryLink,
  MenuLink,
  NewsLink,
} from "../components/HomePagePl";

const MainPl = () => {
  return (
    <div>
      <header>
        <h1>PUB PROPAGANDA</h1>
        <h2>Jeden z najstarszych pubów na krakowskim Kazimierzu</h2>
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
