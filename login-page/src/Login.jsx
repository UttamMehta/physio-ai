// src/LoginPage.js
import React from 'react';
import './LoginPage.css'; // Import your CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        {/* You can replace 'your-image-url.jpg' with your image file */}
        <img src="your-image-url.jpg" alt="Login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
