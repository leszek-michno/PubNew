import { useState } from "react";
import "../assets/styles/AboutUs.scss";

function AboutUs() {
  const [show, setShow] = useState(false);

  return (
    <div className="aboutUsContainer">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Coś o nas i naszej dzielnicy
      </button>
      {show ? (
        <div>
          <p>
            Nasza knajpa znajduje się w sercu Poznania, w dzielnicy Jeżyce. To
            miejsce, gdzie spotykają się pasjonaci piwa i dobrej zabawy.
            Oferujemy szeroki wybór piw rzemieślniczych oraz pyszne jedzenie,
            które zadowoli każdego.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default AboutUs;
