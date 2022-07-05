import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [state,setState] = useState({
        isAuth: false,
        token:""
    })
    const handleLogIn = (token) => {
        setState({
            ...state,
            isAuth: true,
            token:token
        })
    }
    const handleLogOut = () => {
        setState({
            ...state,
            isAuth: false,
            token:null
        })
    }
   return (<AuthContext.Provider value={[state,{ handleLogIn, handleLogOut}]}>{children}</AuthContext.Provider>)
}