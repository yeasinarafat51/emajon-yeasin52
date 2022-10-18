import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const Usercontext = ({children}) => {
    const [user, setuser] =useState(null);
    const [loading, setloading] = useState(true);

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const signIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut =() => {
        setloading(true);
        return signOut(auth)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            console.log('current user state changed', currentUser);
            setuser(currentUser);
            setloading(false);
        });
        return () => unSubscribe();
    }, [])

    const authinfo = {user,loading, createuser, signIn,logOut}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}

            
        </AuthContext.Provider>
    );
};

export default Usercontext;