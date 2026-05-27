import React, { useState } from "react";

export default function Forms() {
  // const [name,setname]=useState("")
  // const [email,setemail]=useState("")
  // const [phone,setphone]=useState("")

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleData}>
        <input
          type="text"
          placeholder="Enter the name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="number"
          placeholder="Enter phone no."
          value={formData.phone}
          onChange={handleChange}
          name="phone"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
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
