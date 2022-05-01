 import { useEffect, useRef, useState } from 'react';

  export const TIMER = ()=>{
         
    const [counter , setCounter] = useState(0);
    const [endcounter, setEndcounter] = useState(10);                     
    const counterRef = useRef(null);
    useEffect(() =>{
           counterRef.current = setInterval(()=>{
              setCounter((p)=> p+1);
            },1000);
    },[]);
       if(counter == endcounter){
        clearInterval(counterRef.current);
       }
   return (
     <div>
            <h1>Timer</h1>
           <h3> Start Time   {counter}</h3>
          <h3> End Time {endcounter}</h3>
        <button 
         onClick={()=>{
           clearInterval(counterRef.current);
         }}
           >
          Pause
        </button> 
 
         <button
          onClick={()=>{
           counterRef.current = setInterval(()=>{
             setCounter((p)=> p+1);
           },1000);
             }}
         >
           Start
         </button>
         <button 
          onClick={()=>{
           clearInterval(counterRef.current)
           setCounter(0);
          } }
         >Reset</button>
 
    
     </div>
   );
  }
     

//   TIMER 
  
// increment timer (I)
// create a simple component Timer
// it should take initial time (second) as prop
// it should take end time (second) as prop as well
// the time should be displayed and incremented every second
// on reaching end time, it should clear the interval
// write a cleanup function as well
