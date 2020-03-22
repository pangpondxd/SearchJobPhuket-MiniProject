import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Login = props => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getUser = async () => {
        await axios.post('http://localhost:3000/users/', params);
        setEmail(email)
        setPassword(password)
    }
    useEffect(() => {
        getUser()
    }, [])
  
    return(
        <div className="Login">
            <h1>Login Component</h1>
            <form  method="post" action="/api/users/login">
            Email: <input 
            className="input"
            type="email" 
            name="input" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            Password: <input 
            className="input"
            type="password" 
            name="password" 
            value= {password}
            onChange= {(e)=> setPassword(e.target.value)}
            />
            <button type="submit" onClick="">login</button>
            </form>
        </div>
    )
}
export default Login