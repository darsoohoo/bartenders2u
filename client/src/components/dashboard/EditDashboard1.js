import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Loader from '../Loader';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import axios from 'axios';
import './EditDashboard.1.css';


const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading }}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formData;

let selectedFile = null
const fileSelectHandler = event => {
  selectedFile = event.target.files[0]
  console.log(event.target.files[0])
}

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = event => {
    event.preventDefault();
    const updateAccount = async data => {

        const updatedAccount = {
            name: data.name == '' ? (user && user.name) : data.name,
            email: data.email == '' ? (user && user.email) : data.email
        }
       try {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify(updatedAccount);
        const res = await axios.post(`/api/users/update/${user && user._id}`, body, config);
        console.log(res.data)
        console.log("account updated")
       } catch(err) {
        console.log(err.response.data)
        console.log("account not updated")
       }
    }
    updateAccount(formData);
    window.location.replace("/dashboard");
};



  return  (
    <Fragment>
      <main>
        <div id="dashboard-container">
          <div id="dashboard-jumbotron" class="jumbotron">   
              <h1 className='row large text-primary'>Edit</h1>
              <p className='row lead'>
                <i className='fas fa-user' /> 
              </p>
              {user !== null ? (
                <Fragment>
                  <form onSubmit={submitHandler}>
                          <div class="row">
                              <TextField
                              
                                value={name}
                                onChange={e => onChange(e)}
                                  id="outlined-name"
                                  margin="normal"
                                  variant="outlined"
                                  label="New name"
                                  className="col-sm-12 location-field"
                                  name="name"
                                  id="fieldname"
                                  >
                              </TextField>
                          </div>
                          <div class="row">
                              <TextField
                            
                                  value={email}
                                  onChange={e => onChange(e)}
                                  placeholder="email"
                                  id="outlined-name"
                                  margin="normal"
                                  variant="outlined"
                                  label="New email"
                                  className="col-sm-12 location-field"
                                  name="email"
                                  id="fieldemail"
                                  >
                              </TextField>
                              <input type="file" onChange={fileSelectHandler}/>

                            <div className="">
                            <button type="submit" className='row mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent my-1' >
                              <i className='fas fa-user-minus' /> Update
                            </button>
                            <Link to="/dashboard" className='cancel-button row mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent my-1' >
                              Cancel
                            </Link>

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
                  <p>You haven't setup an account yet, please register</p>
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