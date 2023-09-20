// src/LoginPage.js
import React from 'react';
import './LoginPage.css'; // Import your CSS file for styling

const Login= () => {




  return (
    // <div className="login-container">
    //   <div className="image-container">
    //     {/* You can replace 'your-image-url.jpg' with your image file */}
    //     <img src="https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg" alt="Login" />
    //   </div>
    //   <div className="login-form">
      
//     <h2>Login</h2>
// <div className="input-container">
//   <input type="text" placeholder="Username" />
// </div>
// <div className="input-container">
//   <input type="password" placeholder="Password" />
// </div>
// <div className="button-container">
//   <button type="submit">Login</button>
// </div>
    //   </div>
    // </div>
    <div className="login-container">
    <div className="background-image"></div>
    <div className="login-form">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Logo" className="logo" />
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  </div>

  );
};

export default Login;

