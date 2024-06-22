import { ArrayGallery } from "../assets/data/ArrayGallery";
import "../assets/styles/Gallery.scss";

const Gallery = () => {
  return (
    <>
      <header>
        <h1>Galeria</h1>
      </header>
      <div className="slider-container">
        {ArrayGallery.map((item) => (
          <div key={item.id}>
            <img src={item.image} loading="lazy" className="slider-image" />
          </div>
        ))}
      </div>
    </>
  );
};
export default Gallery;
