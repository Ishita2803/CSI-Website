import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function emailVerificationMessage() {
        sendEmailVerification(auth.currentUser)
    }

    function emailVerification() {
        return auth.currentUser.emailVerified
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            
        })
        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        login,
        register,
        emailVerificationMessage,
        emailVerification

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
