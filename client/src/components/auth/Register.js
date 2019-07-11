import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './Register.css'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      
            <div id="register-container">
                <div id="register-jumbotron" class="jumbotron">    
                    <h1 className='large text-primary'>Sign Up</h1>
                    <p className='lead'>
                        <i className='fas fa-user' /> Create Your Account
                    </p>
                    <form className='form' onSubmit={e => onSubmit(e)}>
                        <div>
                            <TextField
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={name}
                                onChange={e => onChange(e)}
                                variant="outlined"
                                label="Name"
                                className="register-selection-field"
                            />
                            <TextField
                                type='email'
                                placeholder='Email Address'
                                name='email'
                                value={email}
                                onChange={e => onChange(e)}
                                variant="outlined"
                                label="Email"
                                className="register-selection-field"
                            />
                        </div>
                        <div>
                            <TextField
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                variant="outlined"
                                label="Password"
                                className="register-selection-field"
                            />
                    
                            <TextField
                                type='password'
                                placeholder='Confirm Password'
                                name='password2'
                                value={password2}
                                onChange={e => onChange(e)}
                                variant="outlined"
                                label="Confirm Password"
                                className="register-selection-field"
                            />
                          
                        </div>
            
                        <input type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' value='Register' />
             
                    </form>
                    <p className='my-1'>
                        Already have an account? <Link to='/login'>Sign In</Link>
                    </p>
                    </div>
                </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
