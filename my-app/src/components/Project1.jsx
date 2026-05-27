import React, { useState } from "react";
import './Project.css'

export default function Project1() {
  // Random number between 1 to 10
  const [randomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkGuess = () => {
    if (Number(guess) === randomNumber) {
      setMessage(" Correct Guess!");
    } else if (Number(guess) > randomNumber) {
      setMessage(" Too High!");
    } else {
      setMessage("Too Low!");
    }
  };

  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h3>Number Guess Game</h3>

      <h3>Guess a number between 1 to 10</h3>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter number"
      />

      <br /><br />

      <button onClick={checkGuess} className="btn">
        Check
      </button>

      <h3>{message}</h3>
    </div>
  );
}