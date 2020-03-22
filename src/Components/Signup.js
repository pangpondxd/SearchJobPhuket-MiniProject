import React, {useState} from 'react'

const Signup = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div className="Login" >
            {email} {password}
            <form method="POST" action="/signup">
            <h1>Signup Component</h1>
            Email: <input 
            className="input"
            type="email" 
            name="input" 
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            />
            Password: <input 
            className="input"
            type="password" 
            name="password" 
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick="">login</button>
            </form>
        </div>
    )
}
export default Signup