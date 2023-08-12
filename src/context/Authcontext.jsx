import { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase/config.js"

export const Authcontext = createContext()

export const AuthcontextProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        name: null
    })

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    const googlesignOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    name: user.displayName
                })
            } else {
                setUser({
                    logged: false,
                    email: null
                })
            }
        })

    }, [])

    return (
        <Authcontext.Provider value={{ user, googleLogin, googlesignOut }}>
            {children}
        </Authcontext.Provider>
    )
}