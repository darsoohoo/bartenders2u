import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
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

  const [ readOnly, setReadOnly ] = useState({
    readOnly: true
  })

 
  
  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });


  const submitHandler = event => {
    event.preventDefault();
        
    const updateAccount = async data => {
        const updatedAccount = {
            name: data.name,
            email: data.email
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
  
};

const username = (user && username)


  return  (
    <Fragment>
      <main>
        <div id="dashboard-container">
          <div id="dashboard-jumbotron" class="jumbotron">   
              <h1 className='large text-primary'>Dashboard</h1>
              <p className=' lead'>
                <i className='fas fa-user' /> Welcome {user && user.name}
              </p>
              <img src={user && user.avatar}/>
              {user !== null ? (
                <Fragment>
                  <form onSubmit={submitHandler}>
                          <div class="">
                              <label>{user && user.name}</label>
                          </div>
                      
                          <div class="">
                              <label>{user && user.email}</label>
                          </div>
                            <div className="">
                            <Link to="/edit-dashboard" className='row mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent my-1' >
                            Edit Profile
                            </Link>

                            <div className='my-2'>
                            <button className='delete-button btn btn-danger' onClick={() => deleteAccount()}>
                              <i className='fas fa-user-minus' /> Delete My Account
                            </button>
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