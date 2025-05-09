import { useState } from "react";
import '../assets/styles/Menu.scss'
import {shots, 
  draftBeer,
  bottleBeer,
  bottleWheatBeer,
  noAlcoBeer,
  strongAlco,
  wins,
  noAlco,
  coctails
} from '../assets/data/products';
import { OpenButton } from "../components/MenuPosition";

const MenuPage = () => {
  const [sectionsVisibility, setSectionsVisibility] = useState({
    draftBeer: false,
    bottleBeer: false,
    wheatBeer: false,
    noAlcoBeer: false,
    strongAlco: false,
    wins: false,
    noAlco: false,
    shots: false,
    coctails: false
  });

  const toggleSection = (section) => {
    setSectionsVisibility(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>  
      <header>
        <h1>Menu</h1>
      </header>
      <div className="menu">

        <button onClick={() => toggleSection('draftBeer')}>
          <p>Piwa lane</p>
        </button>
        <div>
          {sectionsVisibility.draftBeer
            ? draftBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('bottleBeer')}>
          <p>Piwa butelkowe</p>
        </button>
        <div>
          {sectionsVisibility.bottleBeer
            ? bottleBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('wheatBeer')}>
          <p> Piwa butelkowe pszeniczne</p>
        </button>
        <div>
          {sectionsVisibility.wheatBeer
            ? bottleWheatBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('noAlcoBeer')}>
          <p>Piwa butelkowe bezalkoholowe</p>
        </button>
        <div>
          {sectionsVisibility.noAlcoBeer
            ? noAlcoBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('shots')}>
          <p>Szoty</p>
        </button>
        <div>
          {sectionsVisibility.shots
            ? shots.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('coctails')}>
          <p>Koktaile</p>
        </button>
        <div>
          {sectionsVisibility.coctails
            ? coctails.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>    

        <button onClick={() => toggleSection('strongAlco')}>
          <p>Alkohole wysokoprocentowe</p>
        </button>
        <div>
          {sectionsVisibility.strongAlco
            ? strongAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('wins')}>
          <p>Wina i wermuty</p>
        </button>
        <div>
          {sectionsVisibility.wins
            ? wins.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('noAlco')}>
          <p>Napoje bezalkoholowe</p>
        </button>
        <div>
          {sectionsVisibility.noAlco
            ? noAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div> 
      </div>
    </>
  );
};

export default MenuPage;