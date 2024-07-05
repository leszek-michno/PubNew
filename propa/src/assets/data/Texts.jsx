import { NavLink } from 'react-router-dom'


export const Booking =()=>{
  return (
    <div>
      <p>
      Nie prowadzimy rezerwacji stolików. 
      </p>
    </div>
  );
}

export const BookingEng =()=>{
  return (
    <div>
      <p>
      We are not booking tables. 
      </p>
    </div>
  );
}




export const Handsome = () => {
    return (
      <div>
        <p>
          W najbliższą sobotę (24 lutego) duet Handsome Boys zagra w Pubie
          Propaganda! Dużo fajnej muzyki w stylu rockabilly i psychobilly.
        </p>
        <p>Początek o godz. 20.00</p>
      </div>
    );
  };
  
  export const HandsomeEng = () => {
    return (
      <div className="text">
        <p>
          This Saturday (February 24) the Handsome Boys duo will play at Pub
          Propaganda! Lots of cool rockabilly and psychobilly music. Start at 8
          p.m.
        </p>
      </div>
    );
  };
  
  export const NewYear = () => {
    return (
      <div className="text">
        <p>
          As every year, we invite you to Propaganda for New Years Eve. The bar
          will be open from 8:00 p.m. to 5.00. IMPORTANT! We are not booking
          tables this evening.
        </p>
      </div>
    );
  };
  
  export const Sylwester = () => {
    return (
      <div className="text">
        <p>
          Jak co roku zapraszamy na Sylwestra do Propagandy. Bar będzie otwarty od
          godz. 20.00 do godz. 5.00. UWAGA! Nie rezerwujemy stolików tego
          wieczoru.
        </p>
      </div>
    );
  };
  
  export const Hallow = () => {
    return (
      <div className="text">
        <p>
          Halloweenowa noc w propagandzie - jedyna taka przerażająca noc. Przyjdź
          i zapoznaj się z naszym specjalnym, upiornym menu!
        </p>
        <p>Drzwi do upiorności otworzą się 31.10 o godz. 17.00</p>
      </div>
    );
  };
  
  export const HallowEng = () => {
    return (
      <div className="text">
        <p>
          Halloween Night at Propaganda - only one night as scary as this. Bring
          your costume and enjoy our special spooky drinks menu!
        </p>
        <p>The doors to horror will open on 31.10 at 5 p.m. </p>
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
  
  export const Est = () => {
    return (
      <div>
        <p>Lokal otwarty: </p>
        <p> - piątek (29 marca) od godz. 18.00 do godz. 4.00; </p>
        <p>
          {" "}
          - sobota (30 marca) od godz. 18.00 do godz. 2.00;{" "}
        </p>
        <p>
          {" "}
          - niedziela (31 marca) od godz 18.00 do godz. 2.00;
        </p>
        <p>
          {" "}
          - poniedziałek (1 kwietnia) od 17.00 do godz. 2.00.{" "}
        </p>
      </div>
    );
  };
  
  export const EstEng = () => {
    return (
      <div className="text">
        <br />
        <p>Pub is open:</p>
        <p>- Friday (March 29) from 6 pm to 4 am;</p>
        <p>- Saturday (March 30) from 6 pm to 2 am;</p>
        <p>- Sunday (March 31) from 6 pm to 2 am </p>
        <p>- Monday (April 1) from 5 pm to 2 am. </p>
      </div>
    );
  };
  