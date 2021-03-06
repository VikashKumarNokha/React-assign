import React from "react";

import { useState } from "react";

import Todolist from "./Todolist"

const Todo =({getData})=>{
    const [text , setText] = useState("")

    const handleChange =(el)=>{
        setText(el.target.value)
    }


    return(
        <div className="todomain">
        <div className="todoinput">
        <input type="text" className="fom" onChange={handleChange} placeholder="Add Todo"/>
        <button className="btn" type="button" onClick={()=>{
            getData(text);
        }}>Add Todo</button>
        </div>
        </div>
    )
}

export default Todo;