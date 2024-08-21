import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,useuser] =  useState(null);
    const [loading,setloading] =  useState(true);
    const createuser  = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signinuser =  (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password )
    }
    const loogout = () =>{
        return signOut(auth)
    }
    const authinform = {user,loading,createuser,signinuser,loogout};
    return (
        <AuthContext.Provider value={authinform}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;