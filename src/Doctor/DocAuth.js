import { Navigate } from "react-router-dom";

export default function DocAuth({children}){
    if(localStorage.getItem("doctor")){
        return children;
    }
    else{
        return <Navigate to="/doctorSignUp"/> 
    }
}
