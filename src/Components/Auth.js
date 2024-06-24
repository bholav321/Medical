import { Navigate } from "react-router-dom";

export default function Auth({children}){
    if(localStorage.getItem("user")){
        return children;
    }
    else{
        return <Navigate to="/signup"/> 
    }
}
