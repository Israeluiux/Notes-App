import { useState } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom"

const RegisterForm =  () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newdata = {
            email,
            username,
            password
        }

        try {
            const reponse = await fetch('http://localhost:5000/users', {
                method: 'POST',
                body: JSON.stringify(newdata)
            })
            navigate('/login')
        } catch (error) {
            console.error(error)
        }

        if(password.length < 8){
            setError('Password cannot be less than 8 characters')
        }
        if(username.length < 6){
            setError('Username cannot be less than 6 characters')
        }
        if(!email.endsWith("@gmail.com")){
            setError('Email must be a valid email address')
        }
            
    }


    return(
        <>
            {error && 
                <p className="error">
                    <FaExclamationTriangle size={15}/>
                    {error}</p>  
            }
        <form className="forms" onSubmit={handleSubmit} >
                <div className="form-groups">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                           id="email"
                           placeholder="Enter your email (Optional)"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className="form-groups">
                    <label htmlFor="username">Username *</label>
                    <input type="text"
                           id="username"
                           placeholder="Create a username"
                           value={username}
                           required
                           onChange={(e) => setUsername(e.target.value)} />
                </div>
                
                <div className="form-groups">
                    <label htmlFor="password">Password *</label>
                    <input type="password"
                           id="password"
                           placeholder="Create a password"
                           value={password}
                           required
                           onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn">Create Account</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
            </>
    )
}


export default RegisterForm