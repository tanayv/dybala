import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeAuthProfile: {},
      username: "",
      password: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render () {
    return (
      <div className="mat-background">
        <div className="login-box mat-card">
          <div className="logo"/>
          <input 
            className="bnb-input" 
            type="text" 
            placeholder="Username" 
            name="username" 
            onChange={this.handleInputChange}/>
          <input 
            className="bnb-input" 
            type="password" 
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}/>
          <button className="bnb-button" onClick={this.handleClick}>Login</button>
        </div>
      </div>
    )
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleClick(event) {
    //console.log(this);
    this.props.startLogin(this.state.username, this.state.password);
  }

  
}

Login.propTypes = {
  startLogin: PropTypes.func.isRequired
}

export default Login;
