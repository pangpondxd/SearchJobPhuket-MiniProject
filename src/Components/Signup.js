import React, {useState} from 'react'
import axios from "axios";
const Signup = props => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [signupFormParams, setSignupFormParams] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = event => {
        setSignupFormParams({
            ...signupFormParams,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost/users/", signupFormParams).then(res => {
            console.log(res)
        });
      };

    return(
        <div className="Login" >
            name: {name}
            Email : {email} 
            <form method="POST" onSubmit={handleSubmit} action="/users">
            <h1>Signup Component</h1>
            Name: {" "}
            <input 
            className="input"
            type="text"
            name="name"
            value = {signupFormParams.name}
            onChange={handleChange}
            />
            Email: {" "} 
            <input 
            className="input"
            type="email" 
            name="email" 
            value = {signupFormParams.email}
            onChange={handleChange}
            />
            Password: {" "}
            <input 
            className="input"
            type="password" 
            name="password" 
            value = {signupFormParams.password}
            onChange={(e) => handleChange(e)}
            />
            <button type="submit">login</button>
            </form>
        </div>
    )
}
export default Signup