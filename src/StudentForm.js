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
        const result = document.getElementById("confirmation");
        result.removeAttribute("hidden");
        e.preventDefault();
    }

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

            <section id="confirmation" hidden>
                <h3>Student info received:</h3>
                <p>First Name: {data.firstName}</p>
                <p>Last Name: {data.lastName}</p>
                <p>Age: {data.age}</p>
                <p>Address: {data.address}</p>
                <p>Homeroom: {data.homeroom}</p>
                <p>Student ID: {data.studentID}</p>
                <p>Lunch Preference: {data.lunchOp}</p>
                <p style={{ textAlign: "right" }}><em>Thank You!</em></p>
            </section>
        </>
    );
}

export default StudentForm;
