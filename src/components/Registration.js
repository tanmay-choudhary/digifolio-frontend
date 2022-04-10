import React, { useState } from "react";
import validateInfo from "./ValidateInfo";

function Registration() {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleRegistration = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user);
    const error = validateInfo(user);
    setErrors(error);
    console.log(errors);
    if (error.length === 0) {
      console.log(user);
      const newRecord = { ...user, id: new Date().getTime().toString() };
      //  console.log(records);
      setRecords([...records, newRecord]);
      // console.log(records);
      setUser({ username: "", phone: "", email: "", password: "" });
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleRegistration}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={user.phone}
            onChange={handleRegistration}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleRegistration}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleRegistration}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>already have a account? login </label>
          <a href="/login">here</a>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Registration;
