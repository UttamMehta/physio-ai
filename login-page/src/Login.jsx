
import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

const Login= () => {
    const [data,setData]=useState({uid:"",password:"",blocked:0})// data will get update but to check login just default added
    const [login,setLogin]=useState(false);

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
        //  localStorage.setItem('user', JSON.stringify(response));
        decoded(response);
        }).catch(error => {
        console.error('Error on 28 line:', error);
         });   
        } catch (error) {
            console.log("Error on 32 line",error);
        }
    }

    function decoded(response){
        try {
            const decodedResponse = atob(response);
            const jsonResponse = JSON.parse(decodedResponse);
            console.log(jsonResponse);
            localStorage.setItem('user', JSON.stringify(jsonresponse));
            setLogin(true);
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

