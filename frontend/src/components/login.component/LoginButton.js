import React from 'react';
import PropTypes from 'prop-types'
import './Login.css';

const LoginButton = ({ onLoginClick }) => (
    <button className="bnb-button" onClick={onLoginClick}>Login</button>
)

LoginButton.propTypes = {
    onLoginClick: PropTypes.func.isRequired
}

export default LoginButton