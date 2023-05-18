import React, { useState } from "react";
import styles from "./StudentForm.module.css";

function StudentForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    homeroom: "",
    studentID: "",
    lunchOp: "",
  });
  function handleChange(e) {
    const key = e.target.id;
    setData((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  }

  function handleSubmit(e) {
    const result = document.getElementById("result");
    result.removeAttribute("hidden");
    console.log("event obj", e.target);
    e.preventDefault();
  }
  console.log("data", data);

  return (
    <>
      <form onSubmit={handleSubmit} id="studentAdminForm">
        <label for="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <label for="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
        <label for="age">Age: </label>
        <input
          type="number"
          id="age"
          value={data.age}
          onChange={handleChange}
        />
        <label for="address">Address: </label>
        <input
          type="text"
          id="address"
          value={data.address}
          onChange={handleChange}
        />
        <label for="homeroom">Homeroom: </label>
        <input
          type="number"
          id="homeroom"
          value={data.homeroom}
          onChange={handleChange}
        />
        <label for="studentID">Student ID: </label>
        <input
          type="text"
          id="studentID"
          value={data.studentID}
          onChange={handleChange}
        />

        <fieldset>
          <legend>Select a lunch item:</legend>
          <input
            type="radio"
            name="lunchOp"
            id="lunchOp"
            value="fish"
            onChange={handleChange}
          />
          <label for="fish">Fish</label>
          <input
            type="radio"
            name="lunchOp"
            id="lunchOp"
            value="beef"
            onChange={handleChange}
          />
          <label for="beef">Beef</label>
        </fieldset>
        <input type="submit" id="submit" value="Submit" />
      </form>

      <section>
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Age: {data.age}</p>
        <p>Address: {data.address}</p>
        <p>Homeroom: {data.homeroom}</p>
        <p>Student ID: {data.studentID}</p>
        <p>Lunch Item: {data.lunchOp}</p>
      </section>
      <section id="result" hidden>
        <h1>{JSON.stringify(data)}</h1>
      </section>
    </>
  );
}

export default StudentForm;
