
import Photo_2 from '../images/hbpropa.jpg'
import Photo_3 from '../images/IMG_4212.webp'
import { Booking, BookingEng, HbTwo, HbTwoEng } from './Texts';


// Polish version

export const NewsPlList = [
  
  {
    id: 3,
    title: "Ważne",
    content: <Booking/>,
    img: Photo_3,
  },
  {
    id: 1,
    title: "Koncert Handsome Boys",
    content: <HbTwo/>,
    img: Photo_2,
  }, 
];

//English version
export const NewsListEng = [
  {
    id: 3,
    title: "Important",
    content: <BookingEng/>,
    img: Photo_3,
  },
  {
    id: 1,
    title: "Handsome Boys in Propaganda",
    content: <HbTwoEng/>,
    img: Photo_2,
  },
];

