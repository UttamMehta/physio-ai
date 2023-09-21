
import React from 'react'
import LineChart from '../pages/LineChart';
import { useNavigate } from "react-router-dom";



export default function ChartBoard() {
    const navigate = useNavigate();

function logout(){
    console.log("cliked");
    localStorage.removeItem("user");
    navigate("/");
}


  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"lightgray",marginBottom:"20px"}}>
       <h1>Line Comparison Graph</h1>
       <button onClick={logout} style={{margin:"20px 20px 20px 0px",width:"100px",backgroundColor:"red",border:"8px",borderRadius:"8px"}}>Logout</button></div>
      <LineChart />
    </div>
  )
}
