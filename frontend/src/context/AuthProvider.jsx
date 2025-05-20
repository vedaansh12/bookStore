/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()


export default function AuthProvider({children}){
    const initiaAuthUser = localStorage.getItem("Users")
    const {authUser,setAuthUser} = useState(
        initiaAuthUser?JSON.parse(initiaAuthUser):undefined

    )
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}   
export const useAuth = () => useContext(AuthContext)
