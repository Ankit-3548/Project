import React, { useState } from "react";
import './Project.css'
export default function Project() {
    const[value,setValue]=useState("");
    const [result,setResult]=useState("");

    const handleClick =(e) =>{
      setValue(value+e.target.value);
    }

    const calculate =() =>{
      setResult(eval(value))
    }

    const clear =()=>{
      setValue("");
      setResult("");
    }

  return (
    <div className="head">
      <h1>Calculator</h1>
      <input type="text" name="name" value={value} />
      <h3>Result:{result}</h3>
    <div className="allbtn">
        <div className="btn1">
        <button value="+" className="btn"onClick={handleClick}>+</button>
        <button value="-" className="btn"onClick={handleClick}>-</button>
        <button value="*" className="btn"onClick={handleClick}>*</button>
        <button value="/" className="btn"onClick={handleClick}>/</button>
        <button value="1" className="btn"onClick={handleClick}>1</button>
        <button value="2" className="btn"onClick={handleClick}>2</button>
        <button value="3" className="btn"onClick={handleClick}>3</button>
        <button value="4" className="btn"onClick={handleClick}>4</button>
        <button value="5" className="btn"onClick={handleClick}>5</button>
        <button value="6" className="btn"onClick={handleClick}>6</button>
        <button value="7" className="btn"onClick={handleClick}>7</button>
        <button value="8" className="btn"onClick={handleClick}>8</button>
        <button value="9" className="btn"onClick={handleClick}>9</button>
        <button value="0" className="btn"onClick={handleClick}>0</button>
        <button  className="btn"onClick={calculate}>=</button>
        <button  className="btn"onClick={clear}>AC</button>
      </div>
    </div>
    </div>
  );
}
