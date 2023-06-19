import { createContext, useState } from "react"

export const AuthContext=createContext();
export const AppContextProvider=({children})=>{
    const [authState, setAuthState]=useState({
        isAuth:false,
        username:null,
    })

    const loginUser=(username)=>{
        setAuthState({
          isAuth:true,
          username:username
        })
      }

      const logoutUser=()=>{
        setAuthState({
          isAuth:false,
          username:null
        })
      }


    return(
       <AuthContext.Provider value={{authState,loginUser,logoutUser}}>
        {children}
       </AuthContext.Provider>
    )
}
