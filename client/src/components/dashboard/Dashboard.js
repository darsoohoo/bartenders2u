import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Loader from '../Loader';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading }}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formData;

  
  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });


     // Handle fields change
     /*
    const handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  */

  const submitHandler = event => {
    event.preventDefault();
        
    const updateAccount = async data => {
        const user = {
            name: data.name,
            email: data.email
        }

       try {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify(user);
        const res = await axios.post(`/api/users/${user && user.id}`, body, config);
        console.log(res.data)
        console.log("account updated")
        console.log(user && user.id)
       } catch(err) {
        console.log(err.response.data)
        console.log("account not updated")
        console.log(user && user.id)
       }

    }

    updateAccount(formData);
   
 
};



  return loading && profile === null ? (
    <Loader />
  ) : (
    <Fragment>
      <main>
        <div id="dashboard-container">
          <div id="dashboard-jumbotron" class="jumbotron">   
              <h1 className='large text-primary'>Dashboard</h1>
              <p className='lead'>
                <i className='fas fa-user' /> Welcome {user && user.name}  {user && user._id}
              </p>
              {user !== null ? (
                <Fragment>
                  <form onSubmit={submitHandler}>
                  <div class="row">
                      <TextField
                          
             
                        defaultValue={user && user.name}
                      value={name}
                      onChange={e => onChange(e)}
                          id="outlined-name"
                          margin="normal"
                          variant="outlined"
                          label="name"
                          className="col-sm-12 location-field"
                          name="name"
                          >
                              
                      </TextField>
                  </div>
                  <div class="row">
                      <TextField
                          defaultValue={user.email}
                          value={email}
                          onChange={e => onChange(e)}
                        
                          placeholder="email"
                          id="outlined-name"
                          margin="normal"
                          variant="outlined"
                          label="email"
                          className="col-sm-12 location-field"
                          name="email"
                          >
                      </TextField>
                    <div className="">
                    <button type="submit" className='row mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent my-1' >
                      <i className='fas fa-user-minus' /> Update
                    </button>

                    <div className='my-2'>
                    <button className='delete-button btn btn-danger' onClick={() => deleteAccount()}>
                      <i className='fas fa-user-minus' /> Delete My Account
                    </button>
                    </div>
                  </div>

                  </div>

                  </form>

         


                </Fragment>
              ) : (
                <Fragment>
                  <p>You have not yet setup an account, please register</p>
                  <Link to='/register' className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent my-1'>
                    Create Profile
                  </Link>
                </Fragment>
              )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
