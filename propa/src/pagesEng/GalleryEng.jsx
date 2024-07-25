import { ArrayGallery } from "../assets/data/ArrayGallery";
import "../assets/styles/Gallery.scss";

const GalleryEng = () => {
  return (
    <>
      <header>
        <h1>Photo gallery</h1>
      </header>
      <div className="slider-container">
        {ArrayGallery.map((item) => (
          <div key={item.id}>
            <img src={item.image} loading="lazy" className="slider-image" alt="propaphoto"/>
          </div>
        ))}
      </div>
    </>
  );
};
export default GalleryEng;
