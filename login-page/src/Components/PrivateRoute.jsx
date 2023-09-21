// import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({children}) {
const userAuth=JSON.parse(localStorage.getItem("user"))||false;
return <div>{userAuth?children:<Navigate to="/" />}</div> 

}

export default PrivateRoute;