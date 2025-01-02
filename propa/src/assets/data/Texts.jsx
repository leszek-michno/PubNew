import { NavLink } from "react-router-dom";


export const FirstPl = () => {
  return (
    <div>
      <p>
      Dzisiaj (01.01.2025) jesteśmy otwarci od godz. 18.00. 
      </p>
    </div>
  );
};


export const FirstEng = () => {
  return (
    <div>
      <p>
      Today (01.01.2025) we are open from 6:00 PM.
      </p>
    </div>
  );
};

export const ChristmesPl = () => {
  return (
    <div>
      <p>
      Jesteśmy otwarci w Wigilię i Święta! 24 grudnia od godz 18.00, a 25 - 26 grudnia od godz. 17.00.
      </p>
    </div>
  );
};
export const ChristmesEng = () => {
  return (
    <div>
      <p>
      We are open on Christmas Eve and Christmas Day! December 24th from 6:00 PM, and December 25th and 26th from 5:00 PM.
      </p>
    </div>
  );
};

export const NewYearPl = () => {
  return (
    <div>
      <p>
      Tego wieczoru jesteśmy otwarci dla wszystkich! Nie prowadzimy rezerwacji miejsc. Zaczynamy od godz. 20.00 🥳
      </p>
    </div>
  );
};
export const NewYearEng = () => {
  return (
    <div>
      <p>
      This evening we are open to everyone! We do not take reservations. We start at 8:00 PM 🥳
      </p>
    </div>
  );
};

export const Halloween = () => {
  return (
    <div>
      <p>
      Prawdopodobnie będzie trochę strasznie, ale na pewno będzie kolorowo. Zaczynamy w najbliższy czwartek (31.10.2024) od godz. 17.00.
      </p>
    </div>
  );
};
export const HalloweenEng = () => {
  return (
    <div>
      <p>
      It will probably be a little scary, but it will definitely be colorful. We start on Thursday (10/31/2024) at 5:00 p.m.
      </p>
    </div>
  );
};


export const Holiday = () => {
  return (
    <div>
      <p>
      W Święto Zmarłych (1 listopada) jesteśmy otwarci tak jak zawsze w piątki, czyli od godz. 18.00 do godz. 4.00. 
      </p>
    </div>
  );
};
export const HolidayEng = () => {
  return (
    <div>
      <p>
      On November 1st, we will be open as usual on Fridays, from 6:00 p.m. to 4:00 a.m.
      </p>
    </div>
  );
};



export const HbTwo = () => {
  return (
    <div>
      <p>
        W najbliższą sobotę (24 sierpnia) duet Handsome Boys zagra w Pubie
        Propaganda! Dużo fajnej muzyki w stylu rockabilly i psychobilly.
      </p>
    </div>
  );
};
export const HbTwoEng = () => {
  return (
    <div>
      <p>
        This Saturday (August 24) the Handsome Boys duo will play at Pub
        Propaganda! Lots of cool rockabilly and psychobilly music. Start at 8
        p.m.
      </p>
    </div>
  );
};



export const Booking = () => {
  return (
    <div>
      <ul>
        <li>
          <p>Płacić można gotówką, kartą lub mobilnie</p>
        </li>
        <li>
          <p>Nie prowadzimy rezerwacji stolików</p>
        </li>
      </ul>
    </div>
  );
};

export const BookingEng = () => {
  return (
    <div>
      <ul>
        <li>You can pay by cash, card or mobile</li>
        <li>We do not do table reservations </li>
      </ul>
    </div>
  );
};

export const Tshirt = () => {
  return (
    <div className="text">
      <p>
        Z powodu braku miejsca nie jesteśmy w stanie trzymać wszystkich
        t-shirtów w lokalu. Dlatego, jeżeli ktoś chcę nabyć nasz t-shirt to:
      </p>
      <p>
        {" "}
        1) prosimy o złożenie zamówienia (np. za pomocą messengera lub e-maila
        <NavLink className="link" to="/polish/contact">
          {" "}
          <em>kliknij tutaj</em>{" "}
        </NavLink>
        ). Wystarczy podać jakieś imię (byśmy przekazali towar odpowiedniej
        osobie), ilość i rozmiar zamawianych t-shirtów;
      </p>
      <p> 2) następnego dnia towar będzie do odbioru w Pubie Propaganda;</p>

      <p> 3) będzie tam czekał na zamawiającego przez tydzień; </p>
      <p>
        {" "}
        4) jeżeli nie zostanie w tym czasie odebrany, to zamówienie będzie
        automatycznie anulowane.
      </p>
      <p> Cena jednego t-shirta: 70 zł (płatne przy odbiorze).</p>
      <span> Obecnie mamy t-shirty: </span>
      <br />
      <span> - kobiece w rozmiarach L, M, S, XS;</span>
      <br />
      <span> - męskie w rozmiarach: XL, L, M, S.</span>
      <p>Uwaga! Nie prowadzimy sprzedaży wysyłkowej.</p>
    </div>
  );
};

export const JobOffer = () => {
  return (
    <div className="text">
      <br />
      <p>
        Szukamy osób z doświadczeniem barmańskim do pracy w naszym pubie. Praca
        jest ciężka (w godzinach popołudniowych i nocnych).{" "}
      </p>
      <p>
        Większość naszych klientów to turyści zagraniczni, dlatego wymagamy od
        barmanek/nów bardzo dobrej znajomości języka angielskiego (oprócz bardzo
        dobrej znajomości języka polskiego oczywiście).{" "}
      </p>
      <p>
        {" "}
        Zainteresowane osoby prosimy o przesłanie CV na adres{" "}
        <a href={"mailto:contact@pubpropaganda.eu"}>
          contact@pubpropaganda.eu{" "}
        </a>{" "}
        lub o pozostawienie swojego CV u nas w pubie.{" "}
      </p>
      <p>
        O warunkach pracy, wynagrodzeniu itp. porozmawiamy tylko z wybranymi
        osobami.
      </p>
    </div>
  );
};

export const TshirtEng = () => {
  return (
    <div className="text">
      <p>
        Because of lack of space, we are not able to store all the t-shirts in
        the pub. So, if someone wants to buy our t-shirt:
      </p>
      <p>
        1) please place the order (via messenger or e-mail
        <NavLink className="link" to="/english/contact_Eng">
          <em> click here </em>
        </NavLink>
        ). It is enough to enter a name (so that we can pass the goods to the
        appropriate person), the number and size of the ordered t-shirts;
      </p>
      <p>
        {" "}
        2) the next day the goods will be available for collection at the
        Propaganda Pub;{" "}
      </p>
      <p> 3) it will be waiting for you there for a week; </p>
      <p>
        {""}
        4) if it is not picked up within this time, the order will be
        automatically canceled.
      </p>
      <p> Price of one t-shirt: PLN 60 (payable upon delivery). </p>
      <span> We currently have t-shirts: </span>
      <br />
      <span> - for women in sizes L, M, S, XS; </span>
      <br />
      <span> - for men in sizes: XL, L, M, S. </span>
      <p> Please note, we do not sell by mail order. </p>
    </div>
  );
};
