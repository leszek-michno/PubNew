import Photo_2 from "../images/hbpropa.jpg";
import Photo_3 from "../images/IMG_4212.webp";
import Photo_4 from "../images/swieto.jpeg";
import Photo_5 from "../images/halloween.jpg";
import Photo_6 from "../images/NewYearPropa.jpg";
import Photo_7 from "../images/Christ.jpg";
import Photo_8 from "../images/1st.jpeg";
import Photo_9 from "../images/pubEaster.jpg";
import Photo_10 from "../images/hbswpropa.jpg"; 
import {
  Booking,
  BookingEng,
  ChristmesEng,
  ChristmesPl,
  FirstEng,
  FirstPl,
  Halloween,
  HalloweenEng,
  HbTwo,
  HbTwoEng,
  Holiday,
  HolidayEng,
  NewYearEng,
  NewYearPl,
  EasterPL,
  EasterEng,
  HbsGig,
  HbsGigEng
} from "./Texts";

// Polish version

export const NewsPlList = [
  {
    id: 0,
    title: "Świąteczne rockendrollowanie",
    content: <HbsGig />,
    img: Photo_10,

  },
  {
    id: 1,
    title: "Święta Wielkanocne",
    content: <EasterPL />,
    img: Photo_9,
  },
  {
    id: 2,
    title: "Ważne",
    content: <Booking />,
    img: Photo_3,
  },
  {
    id: 3,
    title: "1 stycznia 2025",
    content: <FirstPl />,
    img: Photo_8,
  },
  {
    id: 4,
    title: "Sylwester w Propagandzie",
    content: <NewYearPl />,
    img: Photo_6,
  },
  {
    id: 5,
    title: "Wigilia i Święta",
    content: <ChristmesPl />,
    img: Photo_7,
  },

  {
    id: 6,
    title: "Halloween",
    content: <Halloween />,
    img: Photo_5,
  },
  {
    id: 7,
    title: "Święto Zmarłych",
    content: <Holiday />,
    img: Photo_4,
  },
  {
    id: 8,
    title: "Koncert Handsome Boys",
    content: <HbTwo />,
    img: Photo_2,
  },
];

//English version

export const NewsListEng = [
  
  {
    id: 0,
    title: "Easter Gig",
    content: <HbsGigEng />,
    img: Photo_10,
  },
  {
    id: 1,
    title: "Easter Holidays",
    content: <EasterEng />,
    img: Photo_9,
  },
  {
    id: 2,
    title: "Important",
    content: <BookingEng />,
    img: Photo_3,
  },
  {
    id: 3,
    title: "January 1st",
    content: <FirstEng />,
    img: Photo_8,
  },

  {
    id: 4,
    title: "New Year Eve Party",
    content: <NewYearEng />,
    img: Photo_6,
  },
  {
    id: 5,
    title: "Christmas",
    content: <ChristmesEng />,
    img: Photo_7,
  },
  {
    id: 6,
    title: "Halloween",
    content: <HalloweenEng />,
    img: Photo_5,
  },
  {
    id: 7,
    title: "November 1st",
    content: <HolidayEng />,
    img: Photo_4,
  },
  {
    id: 8,
    title: "Handsome Boys in Propaganda",
    content: <HbTwoEng />,
    img: Photo_2,
  },
];
