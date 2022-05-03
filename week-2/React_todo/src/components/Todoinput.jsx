
import { useState } from 'react';
import './Todoinput.css';

function Todoinput({getdata}) {
    
    const [text , setText] = useState("")

    return (
      <div className="Todoinput">
      <input className="box" onChange={(e) =>{
        //  console.log(e.target.value)
         setText(e.target.value)
       }} 
       type="text"
       placeholder="Add a To-Do...." 
       />
      <button className="add" onClick={() => {
           getdata(text)
       }}>Add Todo</button>
      </div>
    );
  }

  
  export {Todoinput} ;
  