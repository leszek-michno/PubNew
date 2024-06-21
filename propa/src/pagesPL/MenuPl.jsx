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
  const [isVisibleDraftBeer, setIsVisibleDraftBeer] = useState();
  const [isVisibleBottelBeer, setIsVisibleBottleBeer] = useState();
  const [isVisibleWheatBeer, setIsVisibleWheatBeer] = useState();
  const [isVisibleNoAlcoBeer, setIsVisibleNoAlcoBeer] = useState();
  const [isVisibleStrongAlco, setIsVisibleStrongAlco] = useState();
  const [isVisibleWins, setIsVisibleWins] = useState();
  const [isVisibleNoAlco, setIsVisibleNoAlco] = useState();
  const [isShots, setShots] = useState();
  const [isCoctails, setIsCoctails] = useState();


  return (
    <>  
    <header>
      <h1>Menu</h1>
    </header>
      <div className="menu">
      
      
      <button
          onClick={() => {
            setShots(!isShots);
          }}
        >
        Szoty
        </button>
        <div>
          {isShots
            ? shots.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button
          onClick={() => {
            setIsCoctails(!isCoctails);
          }}
        >
          Koktaile
        </button>
        <div>
          {isCoctails
            ? coctails.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>    

        <button
          onClick={() => {
            setIsVisibleDraftBeer(!isVisibleDraftBeer);
          }}
        >
        Piwo lane
        </button>
        <div>
          {isVisibleDraftBeer
            ? draftBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        
        <button
          onClick={() => {
            setIsVisibleBottleBeer(!isVisibleBottelBeer);
          }}
        >
        Piwa butelkowe
        </button>
        <div>
          {isVisibleBottelBeer
            ? bottleBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        
        <button
          onClick={() => {
            setIsVisibleWheatBeer(!isVisibleWheatBeer);
          }}
        >
        Piwa butelkowe pszeniczne
        </button>
        <div>
          {isVisibleWheatBeer
            ? bottleWheatBeer.map((item) => (
                <OpenButton key={item.id} {...item} />
              ))
            : null}
        </div>
        
        <button
          onClick={() => {
            setIsVisibleNoAlcoBeer(!isVisibleNoAlcoBeer);
          }}
        >
        Piwa butelkowe bezalkoholowe
        </button>
        <div>
          {isVisibleNoAlcoBeer
            ? noAlcoBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        
        <button
          onClick={() => {
            setIsVisibleStrongAlco(!isVisibleStrongAlco);
          }}
        >
        Alkohole wysokoprocentowe
        </button>
        <div>
          {isVisibleStrongAlco
            ? strongAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        

        <button
          onClick={() => {
            setIsVisibleWins(!isVisibleWins);
          }}
        >
        Wina i wermuty
        </button>
        <div>
          {isVisibleWins
            ? wins.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        

        <button
          onClick={() => {
            setIsVisibleNoAlco(!isVisibleNoAlco);
          }}
        >
        Napoje bezalkoholowe
        </button>
        <div>
          {isVisibleNoAlco
            ? noAlco.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div> 
      </div>
    </>
  );
};

export default MenuPage;
