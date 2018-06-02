import React, { Component } from 'react';
import logo from './logo.png';
import './Login.css';



class Login extends Component {
  render() {
    return (
      <div className="mat-background">
        <div className="login-box mat-card">
          <div className="logo"/>
          <input className="bnb-input" type="text" placeholder="Username"/>
          <input className="bnb-input" type="password" placeholder="Password"/>
          <button className="bnb-button">Login</button>
        </div>
      </div>
    );
  }
}


export default Login;
