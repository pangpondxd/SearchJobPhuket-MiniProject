import React, {useState} from 'react'
import axios from 'axios'
const Login = props => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getJobs = async () => {
        const result = await axios.get(`http://localhost/users`)
    }
  
    return(
        <div className="Login">
            <h1>Login Component</h1>
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
        </div>
    )
}
export default Login