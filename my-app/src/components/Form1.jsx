import React, { useState } from "react";

export default function Form1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleData = (e) => {
    e.preventDefault();
    return setSubmittedData(formData);
  };
  const handleChange=(e) =>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleData}>
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value="formData.name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value="formData.email"
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="phone no."
          value="formData.phone"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {SubmittedData &&
      (
        <div>
          Submitted Data
          <p>Name : {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone no. {submittedData.phone}</p>
        </div>
      )}
    </div>
  );
}
