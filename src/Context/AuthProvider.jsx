import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth (app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
      const [user, setUser]= useState(null)
      const[loading,setLoading] = useState(true)

      const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)

      }
      const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }
      const logout = ()=>{
        return signOut(auth)
      }
      
      const userupdateprofile=(profile)=>{

        return updateProfile(auth.currentUser,profile)
      }
      const providerLogin = (Provider)=>{
        setLoading(true)
        return signInWithPopup (auth,Provider); 
      }
      

      useEffect( ()=>{
        const Unsubscribe = onAuthStateChanged(auth,currentUsers=>{
          setUser(currentUsers)
          setLoading(false)
        })
        return()=> Unsubscribe()
      } ,[])

    const authinfo = {user,createUser,login,loading,logout,userupdateprofile,providerLogin}

    return (
       <AuthContext.Provider value={authinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;