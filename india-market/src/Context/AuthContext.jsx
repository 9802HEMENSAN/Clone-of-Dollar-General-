 //https://mock-server-app-o0ff.onrender.com
 
 import React, { createContext  } from "react";
 export const AuthContext=createContext();
export default function AuthContextProvider({children}){
    const[isAuth,setisAuth]=React.useState(false);
    const[token,setToken]=React.useState('')
   const login=(a)=>{
       setisAuth(true)
        setToken(a)
   }

    return(
        <AuthContext.Provider value={{isAuth,setisAuth,login,token,setToken}}>{children}</AuthContext.Provider>
    )
}