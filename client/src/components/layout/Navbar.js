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
          <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
              </button>
              <div className="leftside-nav">
                <Link className="navbar-brand" to='/'>B2U</Link>
                <Link id="our-services" className="navbar-brand"  to='/packages'>Our Services</Link>
                <Link id="our-company" className="navbar-brand"  to='/company'>Our Company</Link>
              </div>
            </div>
            <div className="rightside-nav">
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">            
                    <img id="nav-avatar" className="nav-avatar" src={user.avatar}/>
                    <span class="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/dashboard">Account</Link></li>
                      <li><Link onClick={Logout}>Signout</Link></li>
                    </ul>
                  </li>
                </ul>
            </div>
            </div>

          </div>
        </nav>

  ) : (
    <Fragment>

            <nav class="navbar navbar-default navbar-fixed-top">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                  </button>
                  <div className="leftside-nav">
                    <Link className="navbar-brand" to='/'>B2U</Link>
                    <Link id="our-services" className="navbar-brand"  to='/packages'>Our Services</Link>
                    <Link id="our-company" className="navbar-brand"  to='/company'>Our Company</Link>
                  </div>
                </div>
                <div className="rightside-nav">
                  <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                      <li><Link to='/login'>Login</Link></li>
                      <li><Link id="signup" to='/register'>Signup</Link></li>
                    </ul>
                  </div>
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
