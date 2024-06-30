
import Photo_1 from '../images/sepia.jpeg'
import Photo_2 from '../images/handsome-boys2.png'
import { Est, EstEng, Handsome, HandsomeEng } from './Texts';


// Polish version

export const NewsPlList = [
  {
    id: 2,
    title: "Wielkanoc 2024",
    content: <Est/>,
    img: Photo_1,
  },
  {
    id: 1,
    title: "Koncert Handsome Boys",
    content:
      <Handsome/>,
    img: Photo_2
  },
 
];

//English version
export const NewsPlListEng = [
  {
    id: 2,
    title: "Easter in Propaganda",
    content: <EstEng/>,
    img: Photo_1,
  },
  {
    id: 1,
    title: "Live Show in Propaganda",
    content:
      <HandsomeEng/>,
    img: Photo_2
  },
 
];

