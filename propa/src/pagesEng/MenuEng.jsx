
import { useState } from "react";
import '../assets/styles/Menu.scss'
import { 
  draftBeer,
  bottleBeer,
  bottleWheatBeer,
  noAlcoBeer,
  strongAlco,
  wins,
  noAlco,
  shotsEng,
  coctailsEng,
} from '../assets/data/products';
import { OpenButton } from "../components/MenuPosition";

const ManuEng = () => {
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
            setIsVisibleDraftBeer(!isVisibleDraftBeer);
          }}
        >
      <p>Draft beer</p>
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
        <p>Bottled beer</p>
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
       <p>Wheat beer</p>
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
        <p>Alcohol-free beer</p>
        </button>
        <div>
          {isVisibleNoAlcoBeer
            ? noAlcoBeer.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>
        
        <button
          onClick={() => {
            setShots(!isShots);
          }}
        >
        <p>Shots</p>  
        </button>
        <div>
          {isShots
            ? shotsEng.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>

        <button
          onClick={() => {
            setIsCoctails(!isCoctails);
          }}
        >
          <p>Coctails</p>
        </button>
        <div>
          {isCoctails
            ? coctailsEng.map((item) => <OpenButton key={item.id} {...item} />)
            : null}
        </div>    

        <button
          onClick={() => {
            setIsVisibleStrongAlco(!isVisibleStrongAlco);
          }}
        >
        <p>Strong alcohol</p>
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
        <p>Wine and vermouth</p>
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
        <p> Alcohol-free  beverages </p>
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

export default ManuEng