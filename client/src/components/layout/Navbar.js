import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Navbar.css'


import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Navbar = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return  user !== null ? (
    <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
        <div className="navbar-header">

        <Link className="navbar-brand" to='/'>B2U</Link>
        </div>
        <div>
        <ul className="nav navbar-nav navbar-left">
        
            <li><Link to='/packages'>Our Services</Link></li>
            <li><Link to='/company'>Our Company</Link></li>
        </ul>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">{user.name}
            <span className="caret"></span></a>
            <ul className="dropdown-menu">
                <li><Link to="/dashboard">Account</Link></li>
                <li><Link to="/signout">Signout</Link></li>
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
                            <div className="navbar-header">

                            <Link className="navbar-brand" to='/'>B2U</Link>
                            </div>
                            <div>
                            <ul className="nav navbar-nav navbar-left">
                            
                                <li><Link to='/packages'>Our Services</Link></li>
                                <li><Link to='/company'>Our Company</Link></li>
                            </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
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
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Navbar);
