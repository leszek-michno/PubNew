
import Photo_2 from '../images/hbpropa.jpg'
import Photo_3 from '../images/IMG_4212.webp'
import Photo_4 from '../images/swieto.jpeg'
import { Booking, BookingEng, HbTwo, HbTwoEng, Holiday, HolidayEng } from './Texts';


// Polish version

export const NewsPlList = [
  
  {
    id: 4,
    title: "Święto Zmarłych",
    content: <Holiday/>,
    img: Photo_4,
  },
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
    id: 4,
    title: "November 1st",
    content: <HolidayEng/>,
    img: Photo_4,
  },
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

