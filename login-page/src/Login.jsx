
import React, { useState } from 'react';
import './LoginPage.css';
const axios = require('axios'); 

const Login= () => {
    const [data,setData]=useState({uid:"",password:"",blocked:0,})

    function updatedata(e){
        const {name,value}=e.target;
        setData(prev=>({...prev,[name]:value}));
    }


    function check(){
        const jsonData = JSON.stringify(data);
        const encodedPayload = btoa(jsonData);
        const apiUrl = 'https://myphysio.digitaldarwin.in/api/login_v1';
        const payloadData = {
            payload: encodedPayload,
          };
          axios.post(apiUrl, payloadData)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    }

  return (
    <div className="login-container">
    <div className="background-image"></div>
    <div className="login-form">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Logo" className="logo" />
      <h2>Login</h2>
      <input type="text" placeholder="Enter Uid" name="uid" onChange={updatedata}/>
      <input type="password" placeholder="Enter Password" name="password" onChange={updatedata}/>
      <button type="submit">Login</button>
    </div>
  </div>

  );
};

export default Login;

