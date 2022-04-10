import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.email == "" || user.password == "") {
      alert("empty field");
    } else {
      const newLogin = { ...user, id: new Date().getTime().toString() };
      setUser({ email: "", password: "" });
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={handleLogin}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleLogin}
          ></input>
        </div>
        <div>
          <label>did not have a account? Register </label>
          <a href="/reg">here</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
