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
        <h2 className="anime">Jeden z najstarszych pubów na krakowskim Kazimierzu</h2>
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
