
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
                <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">

                    <a class="navbar-brand" href="#">B2U</a>
                    </div>
                    <div>
                    <ul class="nav navbar-nav navbar-left">
                    
                        <li><a href="#"><Link to='/packages'>Our Services</Link></a></li>
                        <li><a href="#"><Link to='/company'>Our Company</Link></a></li>
                    </ul>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><Link to='/'>Home</Link></a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Signup</a></li>
                        <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Profile
                        <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Signout</a></li>
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