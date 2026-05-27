import React, { useState } from "react";
import './Project.css'

export default function StudentGradeSystem() {
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  const calculateGrade = () => {
    const score = Number(marks);

    if (score >= 90) {
      setGrade("A+");
    } else if (score >= 80) {
      setGrade("A");
    } else if (score >= 70) {
      setGrade("B");
    } else if (score >= 60) {
      setGrade("C");
    } else if (score >= 40) {
      setGrade("D");
    } else {
      setGrade("Fail");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Grade System</h1>

      <input
        type="number"
        placeholder="Enter marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateGrade} className="btn">
        Check 
      </button>

      <h2>Grade: {grade}</h2>
    </div>
  );
}