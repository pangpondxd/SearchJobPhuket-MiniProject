import React, { useState, useEffect } from "react";
import axios from "axios";
const Login = props => {
  const [loginFormParams, setLoginFormParam] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    setLoginFormParam({
      ...loginFormParams,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost/users/login", loginFormParams).then(res => {
      console.log("ress", res);
    });
  };

  return (
    <div className="Login">
      <h1>Loginxx Component</h1>
      <form method="post" onSubmit={handleSubmit}>
        Email:{" "}
        <input
          className="input"
          type="email"
          name="email"
          value={loginFormParams.email}
          onChange={handleChange}
        />
        Password:{" "}
        <input
          className="input"
          type="password"
          name="password"
          value={loginFormParams.password}
          onChange={e => handleChange(e)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};
export default Login;
