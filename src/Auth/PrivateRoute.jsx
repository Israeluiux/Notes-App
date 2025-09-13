import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import UserLayout from "../Pages/UserLayout";
import { Navigate } from "react-router-dom";


const PrivateRoute = () => {
    const { auth, loading } = useContext(AuthContext)
    
    if(loading){
        return <div>Loading....</div>
    }

    if(!auth){
       return <Navigate to='/login' replace /> 
    }

    return <UserLayout />
}

export default PrivateRoute