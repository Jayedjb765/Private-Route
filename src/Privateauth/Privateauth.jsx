import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const Privateauth = ({children}) => {
    const {user,loading} =  useContext(AuthContext);
    if(loading){
        return  <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    
    return <Navigate to="/log"></Navigate>
};

export default Privateauth;