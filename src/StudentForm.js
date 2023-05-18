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
            <section>
                <h1>Basic React form example: Student Admin</h1>
                <form onSubmit={handleSubmit} id="studentAdminForm" className={styles}>
                    <label for="firstName">First Name: {data.firstName}</label>
                    <input
                        type="text"
                        id="firstName"
                        value={data.firstName}
                        onChange={handleChange}
                    />
                    <label for="lastName">Last Name: {data.lastName}</label>
                    <input
                        type="text"
                        id="lastName"
                        value={data.lastName}
                        onChange={handleChange}
                    />
                    <label for="age">Age: {data.age}</label>
                    <input
                        type="number"
                        id="age"
                        value={data.age}
                        onChange={handleChange}
                    />
                    <label for="address">Address: {data.address}</label>
                    <input
                        type="text"
                        id="address"
                        value={data.address}
                        onChange={handleChange}
                    />
                    <label for="homeroom">Homeroom: {data.homeroom}</label>
                    <input
                        type="number"
                        id="homeroom"
                        value={data.homeroom}
                        onChange={handleChange}
                    />
                    <label for="studentID">Student ID: {data.studentID}</label>
                    <input
                        type="text"
                        id="studentID"
                        value={data.studentID}
                        onChange={handleChange}
                    />

                    <fieldset>
                        <legend>Lunch Preference: {data.lunchOp}</legend>
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
            </section>
           
            <section id="result" hidden>
                {/* <h1>{JSON.stringify(data)}</h1> */}
                <p>Student info for {data.firstName} {data.lastName} received.</p>
                <p>Thank You</p>
            </section>
        </>
    );
}

export default StudentForm;
