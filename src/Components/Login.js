import React, { useState, useEffect } from "react";
import axios from "axios";
const Login = props => {
  const [loginFormParams, setLoginFormParam] = useState({
    email: "",
    password: ""
  });
  const [email,setEmail] = useState('')
  const [name, setName] = useState('')
  let [auth, setAuth] = useState(0)
  const handleChange = event => {
    setLoginFormParam({
      ...loginFormParams,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost/users/login", loginFormParams).then(res => {
    const {name} = res.data.user
    setAuth(1)
    setName(name)
    console.log(res)
    console.log(name)
    });
  };

  return (
    <div className="Login">
      {auth === 1 ? 'Welcome : ' + name : 'Please login'}
      
      <h1>Login Component</h1>
      <form method="POST" onSubmit={handleSubmit} action="/users/me">
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
