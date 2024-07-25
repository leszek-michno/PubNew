
// import Photo_1 from '../images/sepia.webp'
import Photo_2 from '../images/handsome-boys2.webp'
import Photo_3 from '../images/IMG_4212.webp'
import { Booking, BookingEng, Handsome, HandsomeEng } from './Texts';


// Polish version

export const NewsPlList = [
  {
    id: 3,
    title: "Ważne",
    content: <Booking/>,
    img: Photo_3,
  },
  // {
  //   id: 2,
  //   title: "Wielkanoc 2024",
  //   content: <Est/>,
  //   img: Photo_1,
  // },
  {
    id: 1,
    title: "Koncert Handsome Boys",
    content:
      <Handsome/>,
    img: Photo_2
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
  // {
  //   id: 2,
  //   title: "Easter in Propaganda",
  //   content: <EstEng/>,
  //   img: Photo_1,
  // },
  {
    id: 1,
    title: "Live Show in Propaganda",
    content:
      <HandsomeEng/>,
    img: Photo_2
  },
 
];

