import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 20,
  });
    // Create add and remove functions here that changes the
       const Books = (value)=>{
            console.log(inv.books + value);
            setInv (inv.books + value);
            console.log(inv.books);
              }

              const Notebooks = (value)=>{
                setInv(inv.notebooks + value);
                  }

                  const Pens = (value)=>{
                    setInv(inv.pens + value);
                      }
                 
                      const Inkpens = (value)=>{
                        setInv(inv.inkpens + value);
                          }
            
    
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>Books(1)}>+</button>
        <button className="circlularButton" onClick={()=>Books(-1)} >-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>Notebooks(1)}>+</button>
        <button className="circlularButton" onClick={()=>Notebooks(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>Pens(1)}>+</button>
        <button className="circlularButton" onClick={()=>Pens(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>Inkpens(1)}>+</button>
        <button className="circlularButton" onClick={()=>Inkpens(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};
