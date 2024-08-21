import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setuser] =  useState(null);
    const [loading,setloading] =  useState(true);
    const createuser  = (email,password) =>{
        setloading (true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signinuser =  (email,password) =>{
        setloading (true);
        return signInWithEmailAndPassword(auth,email,password )
    }
    const loogout = () =>{
        setloading (true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unvisible = onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser);
            setloading (false);
        })
        return () =>{
            unvisible();

        }
    },[])
    const authinform = {user,loading,createuser,signinuser,loogout};
    return (
        <AuthContext.Provider value={authinform}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;