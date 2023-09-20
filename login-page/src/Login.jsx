
import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

const Login= () => {
    const [data,setData]=useState({uid:"satmis10000",password:"Asdf1234#",blocked:0})
    const [gotresponse,setGotResponse]=useState(
        "eyJzZXNzaW9uX2tleSI6ICJveGkzZW02cHV6MDVpaG9hbG1tdGYxc2h0ZHN1YzJ2diIsICJqd3QiOiAiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBaQ0k2TVRFeWZRLk54NVR4S0IwR1V2ZGNsN2l1Q19pazhPZzFNUjlBVzJEdEY2MGZENmstNjQiLCAiZmlyc3RfdGltZSI6IDAsICJyb2xlIjogImFkbWluIiwgImJhc2ljX2luZm8iOiB7ImZpcnN0X25hbWUiOiAicmFodWwiLCAibWlkZGxlX25hbWUiOiAiIiwgImxhc3RfbmFtZSI6ICJiYWphaiIsICJtb2JpbGVfbm8iOiAiODgwM"
        )

    function updatedata(e){
        const {name,value}=e.target;
        setData(prev=>({...prev,[name]:value}));
    }

    // console.log(data);
    async function check(){
        console.log("clicked");
        try {
         const jsonData = JSON.stringify(data);
        const encodedPayload = btoa(jsonData);
        const apiUrl = 'https://myphysio.digitaldarwin.in/api/login_v1';
        const payload = {
            "payload": encodedPayload,
          };
          console.log(payload);
         await axios.post(apiUrl,payload).then(response => {
         console.log('Response:', response);
        }).catch(error => {
        console.error('Error on 28 line:', error);
         });   
        } catch (error) {
            console.log("Error on 32 line",error);
        }
    }


    function decoded(){
        try {
            const decodedResponse = atob("eyJ1aWQiOiJzYXRtaXMxMDAwMCIsInBhc3N3b3JkIjoiQXNkZjEyMzQjIiwiYmxvY2tlZCI6MH0=");
            const jsonResponse = JSON.parse(decodedResponse);
            console.log(jsonResponse);
            // if (jsonResponse.session_key && jsonResponse.jwt) {
            //     console.log("Successful login");
            //   } else {
            //     console.error("Error in 47:", jsonResponse);
            //   }
        } catch (error) {
            console.log("Error in 50");
        }
       
    }

    // decoded();


  return (
    <div className="login-container">
    <div className="background-image"></div>
    <div className="login-form">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Logo" className="logo" />
      <h2>Login</h2>
      <input type="text" placeholder="Enter Uid" name="uid" onChange={updatedata} typeof='text' />
      <input type="password" placeholder="Enter Password" name="password" onChange={updatedata} typeof="password" />
      <button type="submit"  disabled={data.password&&data.uid?false:true} onClick={check}>Login</button>
    </div>
  </div>

  );
};

export default Login;

