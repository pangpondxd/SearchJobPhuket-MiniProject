import React, {useState} from 'react'

const Login = props => {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getJobs = async () => {
        const result = await axios.get(`http://localhost/api/jobs`)
        setJobs(result.data)
    }
  
    return(
        <div className="Login">
            <h1>Login Component</h1>
            Email: <input type="email" name="input" />
            Password: <input type="password" name="password" />
            <button type="submit" onClick="">login</button>
        </div>
    )
}
export default Login