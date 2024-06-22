import { Navigate } from "react-router-dom";

export default function Auth({children}){
    if(localStorage.getItem("userId")){
        return children;
    }
    else{
        return <Navigate to="/signup"/> 
    }
}
