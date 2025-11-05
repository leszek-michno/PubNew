import { useState } from "react";
import '../assets/styles/Menu.scss'
import { 
  draftBeerEng,
  bottleBeer,
  bottleWheatBeer,
  noAlcoBeer,
  strongAlco,
  wins,
  noAlcoEng,
  shotsEng,
  coctailsEng,
} from '../assets/data/products';
import { OpenButton } from "../components/MenuPosition";

const ManuEng = () => {
  const [sectionsVisibility, setSectionsVisibility] = useState({
    draftBeer: false,
    bottleBeer: false,
    wheatBeer: false,
    noAlcoBeer: false,
    strongAlco: false,
    wins: false,
    noAlco: false,
    shots: false,
    coctails: false,
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
          <p>Draft beer</p>
        </button>
        <div>
          {sectionsVisibility.draftBeer
            ? draftBeerEng.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('bottleBeer')}>
          <p>Bottled beer</p>
        </button>
        <div>
          {sectionsVisibility.bottleBeer
            ? bottleBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('wheatBeer')}>
          <p>Wheat beer</p>
        </button>
        <div>
          {sectionsVisibility.wheatBeer
            ? bottleWheatBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('noAlcoBeer')}>
          <p>Alcohol-free beer</p>
        </button>
        <div>
          {sectionsVisibility.noAlcoBeer
            ? noAlcoBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('shots')}>
          <p>Shots</p>
        </button>
        <div>
          {sectionsVisibility.shots
            ? shotsEng.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('coctails')}>
          <p>Coctails</p>
        </button>
        <div>
          {sectionsVisibility.coctails
            ? coctailsEng.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('strongAlco')}>
          <p>Strong alcohol</p>
        </button>
        <div>
          {sectionsVisibility.strongAlco
            ? strongAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('wins')}>
          <p>Wine and vermouth</p>
        </button>
        <div>
          {sectionsVisibility.wins
            ? wins.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button onClick={() => toggleSection('noAlco')}>
          <p>Alcohol-free beverages</p>
        </button>
        <div>
          {sectionsVisibility.noAlco
            ? noAlcoEng.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

      </div>
    </>
  );
};

export default ManuEng;