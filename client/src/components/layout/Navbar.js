
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }



    render() {
        return (
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
                        <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Profile
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link href="#">Account</Link></li>
                            <li><Link href="#">Signout</Link></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                 
                </div>
                </nav>
        );
    }
}


export default Navbar;