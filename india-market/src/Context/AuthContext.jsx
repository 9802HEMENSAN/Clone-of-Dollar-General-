import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setisAuth] = useState(false);
    const [token, settoken] = useState(null)
    //login
    const loginUser = (token) => {
        setisAuth(true)
        settoken(token)
    }
    const logoutUser = () => {
        setisAuth(false)
        settoken(null)
        return <Navigate to="/login" />
    }
    return <AuthContext.Provider
        value={{ authState: { isAuth, token }, loginUser, logoutUser }}

    >{children}</AuthContext.Provider>
}

export default AuthContextProvider;