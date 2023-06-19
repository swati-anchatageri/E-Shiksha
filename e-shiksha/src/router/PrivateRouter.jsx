import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
const PrivateRouter=({children})=>{
    const {authState}=useContext(AuthContext)
    const {isAuth}=authState
    if(!isAuth){
        return<Navigate to="/login"/>
    }
    return children
}
export default PrivateRouter;