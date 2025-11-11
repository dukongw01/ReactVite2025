import {  createContext, useState } from "react";
import Login from "./LOGIIN/Login";
import LikelistContext from './Likelist';


export const HeaderContext = createContext();

export default function HeaderProvider({Children}){
    const [user, setUser]=useState(null)
    const Login = (setUser)=>{
        setUser({name : user})
    }
    const Logout = () => {
        setUser(null)
    }

    return(
        <HeaderProvider.provider value={{user, Login, Logout}}>
            {Children}
        </HeaderProvider.provider>
    )
}