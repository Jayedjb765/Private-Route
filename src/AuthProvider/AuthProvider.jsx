import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const provider =  new GoogleAuthProvider();
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
    const signwithpop = () =>{
        setloading (true);
        return signInWithPopup(auth,provider);
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
    const authinform = {user,loading,createuser,signinuser,loogout,signwithpop};
    return (
        <AuthContext.Provider value={authinform}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;