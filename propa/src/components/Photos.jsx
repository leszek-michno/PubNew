

import '../assets/styles/Gallery.scss'
import { ArrayGallery } from '../assets/data/ArrayGallery';


const Photos = () => {

  return (
    <div className="slider-container">
        {ArrayGallery.map((item) => (
          <div key={item.id}>
            <img src={item.image} className="slider-image" />
          </div>
        ))}
    </div>
  );
};

export default Photos;
