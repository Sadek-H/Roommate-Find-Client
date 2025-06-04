import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './authconfig';

const provider =new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    let [user,setUser] = useState(null);
     const [loading, setLoading] = useState(true);

    let googlesignin=()=>{
        return signInWithPopup(auth,provider);
    }
    let createUser = (email,password,)=>{
        return createUserWithEmailAndPassword(auth,email,password,)
    }
    let SignInuser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    let updateUser = (updateddata)=>{
        return updateProfile(auth.currentUser,updateddata);
    }
    let signoutuser=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe()
        }
    },[])

    let Authdata={
        createUser,
        user,
        setUser,
        updateUser,
        signoutuser,
        googlesignin,
        SignInuser,
        loading,

    }
    return <AuthContext value={Authdata}>
        {children}
    </AuthContext>
};

export default AuthProvider;