import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Navbar.css'
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { logout } from '../../actions/auth';




const Navbar = ({
  logout,
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const Logout = () => {
    logout()
    window.location.reload();
  }

  return  user !== null ? (
    <nav className="navbar navbar-default navbar-fixed-top">
    <div className="leftside-nav container-fluid">
        <div className=" navbar-header">
        <Link className="navbar-brand" to='/'>B2U</Link>
        </div>
        <div>
        <ul className="nav navbar-nav navbar-left">
            <li><Link to='/packages'>Our Services</Link></li>
            <li><Link to='/company'>Our Company</Link></li>
        </ul>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="rightside-nav nav navbar-nav navbar-right">
          <li><img className="nav-avatar" src={user.avatar}/></li>
            <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            {
              (user.name.charAt(0).toUpperCase() + user.name.slice(1) )
              
              }
            <span className="caret"></span></a>
            <ul className="dropdown-menu">
                <li><Link to="/dashboard">Account</Link></li>
                <li><Link onClick={Logout}>Signout</Link></li>
            </ul>
            </li>
        </ul>
        </div>
     
    </div>
    </nav>

  ) : (
    <Fragment>

        <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="leftside-nav navbar-header">

                            <Link className="navbar-brand" to='/'>B2U</Link>
                            </div>
                            <div>
                            <ul className="leftside-nav nav navbar-nav navbar-left">
                                <li><Link to='/packages'>Our Services</Link></li>
                                <li><Link to='/company'>Our Company</Link></li>
                            </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="rightside-nav nav navbar-nav navbar-right">
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Signup</Link></li>
                            </ul>
                            </div>
                        
                        </div>
                        </nav>
      
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, logout },
)(Navbar);
