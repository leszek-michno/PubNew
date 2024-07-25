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
        <header>
          <h1>PUB PROPAGANDA</h1>
          <h2>One of the oldest pubs in Krakow</h2>
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
export default MainEng