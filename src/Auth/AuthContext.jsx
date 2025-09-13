import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const Storeduser = localStorage.getItem("currentuser")
        if(Storeduser){
            setAuth(JSON.parse(Storeduser))
        }
        setLoading(false)
    }, []) 

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

    const logout = () => {
        setAuth(null)
        localStorage.removeItem("currentuser")
    }

    return(
        <AuthContext.Provider value={{auth, login, logout, loading}}>
            { children }
        </AuthContext.Provider>
    )
}