export const OpenButton = (item) => {
  
  return (   
    <div className="text_menu" key={item.id}>
     <div><p className="p_left">{item.name}</p>
     <p className="p_leftTwo">{item.composition}</p>
     
     </div>
     <div><p>{item.price} zł</p></div>
    </div>

    );
}
