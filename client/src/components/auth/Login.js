import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import TextField from '@material-ui/core/TextField';

import './Login.css'



const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isLoggedIn: '',
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  const onClick = ({ login, isAuthenticated }) => {
    const [formData, setForcmData] = useState({
      email: '',
      password: '',
      isLoggedIn: '',
    });

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
                <div id="login-container">
                <div id="login-jumbotron" class="jumbotron">   
                    <h1 className='large text-primary'>Sign In</h1>
                    <p className='lead'>
                        <i className='fas fa-user' /> Sign Into Your Account
                    </p>
                    <form className='form' onSubmit={e => onSubmit(e)}>
              
                        <div>
                        <TextField 
                            onChange={e => onChange(e)}
                            value={email}
                            type="email" 
                            name="email" 
                            placeholder="Email Address"
                            margin="normal"
                            variant="outlined"
                            label="Email"
                            className="col-sm-6 login-selection-field"
                        />

                        <TextField 
                            onChange={e => onChange(e)}
                            value={password}
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            margin="normal"
                            variant="outlined"
                            label="Password"
                            className="col-sm-6 login-selection-field"
                        />
                        </div>
                      
                        <Link onClick={} to="/auth/google" type="submit">Login with google</Link>
                  
                        
                      
               
                     
                        <input type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' value='Login' /> 
                        <p id="no-account" className='my-1'>
                        Don't have an account? <Link className=" no-account" to='/register'>Sign Up</Link>
                        </p>
                   
                  
                    </form>
  
                    </div>
                    </div>
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
