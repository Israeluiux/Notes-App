import { useState, createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)

    const login = async (username, password, email) => {
            let response = await fetch('http://localhost:5000/users?username=' + username || email)
            let data = await response.json()

            if(data.length === 0){
                throw new Error("User not found");
            }
            else if(data[0].password !== password){
                throw new Error("Invalid password! Try again");
            }
            console.log(response)
            if(data.length > 0 && data[0].password === password){
                const user = { id: data[0].id, username: data[0].username }
                setAuth(user)
                localStorage.setItem("currentuser", JSON.stringify(user))
                return true
            }
    }

    return(
        <AuthContext.Provider value={{auth, login}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider