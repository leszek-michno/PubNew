import { useState } from "react";
import "../assets/styles/AboutUs.scss";
import imgMap from '../assets/images/mapa.png';
import imgPropa from '../assets/images/propa.png';


function AboutUs() {
  const [show, setShow] = useState(false);

  return (
    <div className="aboutUsContainer">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        <p>coś o nas i naszej dzielnicy</p> 
      </button>
      {show ? (
        <article>
          <p>
          Propaganda jest jednym z najstarszych działających pubów na Kazimierzu - dzielnicy Krakowa mającej długą i ciekawą historię.
          </p>
          <p>
            W średniowieczu Kazimierz był samodzielnym miastem założonym przez Króla Polski Kazimierza Wielkiego w pierwszej połowie XIV wieku. Pod koniec XV wieku król Jan Olbracht nakazał Żydom krakowskim przeprowadzić się do Kazimierza. W tej sposób w mieście tym powstała dzielnica żydowska, która od początku bardzo dynamicznie się rozwijała. Sprowadzali się do niej Żydzi z całej Europy. Powstawały synagogi, targowiska, szkoły talmudyczne. 
          </p>
          <p className="mapinfo">widok Krakowa i okolic z atlasu Civitates orbis terrarum Georga Brauna i Fransa Hogenberga z 1618 roku</p>
          <img src={imgMap} alt="map of old Krakow" />
          
          <p>Przeniesienie przez króla Zygmunta Wazę stolicy z Krakowa do Warszawy rozpoczęło upadek Kazimierza (brak królewskich zamówień). W rezultacie pod koniec XVIII wieku miasto Kazimierz stało się dzielnicą Krakowa. Ale nadal Kazimierz wyróżniał się odmienną kulturą związaną z dużą ilością wyznawców judaizmu mieszkających w tej części miasta. 
          </p>
          <p>Ta różnorodność zakończyła się w czasie drugiej wojny światowej. Niemieccy okupanci najpierw umieścili Żydów w getcie. Następnie przewieźli ich do obozów koncentracyjnych, gdzie ich wymordowali.  
          </p>
          <p>
          Po drugiej wojnie światowej (kiedy Polska była podporządkowana Związkowi Radzieckiemu), rządzący Polską nie lubili Krakowa ze względów na niechęć jego mieszkańców do komunistycznej władzy. Nie było więc zainteresowania także opustoszałą żydowską częścią Kazimierza. Przez kilkadziesiąt lat dzielnica ta popadała w ruinę. 
          </p>
          <p>Sytuacja się zmieniła, gdy pod koniec lat osiemdziesiątych Polska odzyskała niepodległość. W połowie lat 90-dziesiątych na Kazimierzu zaczęły się pojawiać nowe restauracje. Na początku tego wieku zaczęło się pojawiać coraz więcej pubów, galerii, hoteli, restauracji. Odbudowywane były kamienice, remontowane drogi.  
          </p>
          <img src={imgPropa} alt="Pub Propaganda" />
          <p>Pub Propaganda powstał pod koniec ubiegłego wieku i był jednym z pierwszych oznak nowego życia na Kazimierzu. Działamy do dzisiaj, choć według niektórych wyglądamy już jak antyk na tle nowoczesnego, kolorowego i pełnego życia Kazimierza. 
          </p>
        </article>
      ) : null}
    </div>
  );
}

export default AboutUs;
