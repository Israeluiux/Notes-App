import { useState, useEffect, useContext } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../../Auth/AuthContext"


const LoginForm = () => {
    const { login } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const success = await login(username, password)
            if(success){
                navigate('/')
            }
                // setError('Incorrect username or password')
                
            } catch (error) {
                setError(error.message)
                setTimeout(() => {
                    setError('')
                }, 3000);
                console.log(error)
        }
        setPassword('')
    }

    const signup = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    return (
        <>
            {error && 
            <p className="error">
                 <FaExclamationTriangle size={15}/>
                  {error}</p>  
            }
            <form className="forms" onSubmit={handleSubmit}>
                <div className="form-groups">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           id="username"
                           placeholder="Enter your username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)} />
                </div>
                
                <div className="form-groups">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password"
                           placeholder="Enter your password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn">Login</button>
                <button type="button" className="user" onClick={signup}>Sign up</button>
            </form>
        </>
    )
}

export default LoginForm

            // let response = await fetch(`http://localhost:4000/users?username=${username}`)
            // let data = await response.json()