import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './PackageSelection.css';
import TextField from '@material-ui/core/TextField';
import Loader from './Loader';



class PackageSelection extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    constructor(props) {
        super(props);
        this.state = {
            levels: [],
            isLoaded: false
        }
        
    }

    componentDidMount() {
        fetch('/api/levels/data')
        .then(res => res.json())
        .then(levels => this.setState({levels: levels, isLoaded: true}, () => console.log('Levels fetched...', levels)))
        .catch(e => {
            console.log(`An error occured: ${e}`)
        });
    }



    render() {
        const { values, handleChange } = this.props;
        const { isLoaded, levels } = this.state;
    

        if(!isLoaded) {
            return (
                <section class="eventform">
                <form class="ui form" >
                    <div class="row">
                    <Link onClick={this.back}>Back</Link> 
                    </div>
                
                 <div class="row">
                    <h5>Any package you want</h5>
                    <hr></hr>
                    <Loader />
                    <Link to="/packages">Select a Package</Link>  
                </div>   

                            <label class="row header-location">Event Info</label>
                                <div class="row">
                                
                                    <select defaultValue={values.eventSize} onChange={handleChange('eventSize')} className="event-size-type col-sm-6">
                                        <option value="">Size</option>
                                        <option value="1-50">1-50</option>
                                        <option value="51-100">50-100</option>
                                        <option value="101-200">100-200</option>
                                        <option value="201-500">200-500</option>
                                        <option value="500+">500+</option>
                                    </select>
                             
 
                                    <select defaultValue={values.eventType} onChange={handleChange('eventType')} className="event-size-type col-sm-6">
                                        <option value="">Type</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Business">Business</option>
                                        <option value="Graduation">Graduation</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Random Party">Random Party</option>
                                    </select>
 
                                </div>   
                       
                            <label class="row header-location">Contact Info</label>
                                <div class="row">
                                        <TextField 
                                            onChange={handleChange('firstName')} 
                                            defaultValue={values.firstName}
                                            type="text" 
                                            name="firstname" 
                                            placeholder="Michael"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="First Name"
                                            className="col-sm-6 package-selection-field"
                                            id="first-name"
                                        />
                                        <TextField 
                                            onChange={handleChange('lastName')} 
                                            defaultValue={values.lastName}
                                            type="text" 
                                            name="lastname" 
                                            placeholder="Jackson"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Last Name"
                                            className="col-sm-6 package-selection-field"
                                            id="last-name"
                                        />
                                </div>   
    
                                <div class="row">
                                        <TextField 
                                            onChange={handleChange('email')} 
                                            defaultValue={values.email}
                                            type="email" 
                                            name="email" 
                                            placeholder="mjackson@gmail.com"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Email"
                                            className="col-sm-6 package-selection-field"
                                            id="email"
                                        />
                               
                                        <TextField 
                                            onChange={handleChange('phoneNumber')} 
                                            defaultValue={values.phoneNumber}
                                            type="tel" 
                                            name="phonenumber" 
                                            placeholder="(415) 879-5241"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Phone Number"
                                            className="col-sm-6 package-selection-field"
                                            id="phone-number"
                                        />
                                </div>   
                                <div class="row">
                                    <button
                                        onClick={this.continue}
                                        id="when-next" 
                                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                        Next
                                    </button> 
                                </div>
                </form>
            </section>
            )
        } else 
        {
            
            return (
                <section class="eventform">
                <form class="ui form" >
                    <div class="row">
                    <Link onClick={this.back}>Back</Link> 
                    </div>
                
                 <div class="row">
                    <h5>Any package you want</h5>
                    <hr></hr>
                    <select value={values.selectedPackage} onChange={handleChange('selectedPackage')} name="package" class="event-size-type" id="select-package">
                  
                        {this.state.levels.map(level =>
                            <option value={level.price} key={level.title}> {level.price} </option>)}
                    </select>    
                    <Link to="/packages">Browse packages</Link>  
                </div>   

                            <label class="row header-location">Event Info</label>
                                <div class="row">
                                
                                    <select defaultValue={values.eventSize} onChange={handleChange('eventSize')} className="event-size-type col-sm-6">
                                        <option value="">Size</option>
                                        <option value="1-50">1-50</option>
                                        <option value="51-100">50-100</option>
                                        <option value="101-200">100-200</option>
                                        <option value="201-500">200-500</option>
                                        <option value="500+">500+</option>
                                    </select>
                             
 
                                    <select defaultValue={values.eventType}  onChange={handleChange('eventType')} className="event-size-type col-sm-6">
                                        <option value="">Type</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Business">Business</option>
                                        <option value="Graduation">Graduation</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Random Party">Random Party</option>
                                    </select>
 
                                </div>   
                       
                            <label class="row header-location">Contact Info</label>
                                <div class="row">
                                        <TextField 
                                            onChange={handleChange('firstName')} 
                                            defaultValue={values.firstName} 
                                            type="text" 
                                            name="firstname" 
                                            placeholder="Michael"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="First Name"
                                            className="col-sm-6 package-selection-field"
                                            id="first-name"
                                        />
                                        <TextField 
                                            onChange={handleChange('lastName')} 
                                            defaultValue={values.lastName} 
                                            type="text" 
                                            name="lastname" 
                                            placeholder="Jackson"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Last Name"
                                            className="col-sm-6 package-selection-field"
                                            id="last-name"
                                        />
                                </div>   
    
                                <div class="row">
                                        <TextField 
                                            onChange={handleChange('email')} 
                                            defaultValue={values.email} 
                                            type="email" 
                                            name="email" 
                                            placeholder="mjackson@gmail.com"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Email"
                                            className="col-sm-6 package-selection-field"
                                            id="email"
                                        />
                               
                                        <TextField 
                                            onChange={handleChange('phoneNumber')} 
                                            defaultValue={values.phoneNumber} 
                                            type="tel" 
                                            name="phonenumber" 
                                            placeholder="(415) 879-5241"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Phone Number"
                                            className="col-sm-6 package-selection-field"
                                            id="phone-number"
                                        />
                                </div>   
                                <div class="row">
                                    <button
                                        onClick={this.continue}
                                        id="when-next" 
                                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                        Next
                                    </button> 
                                </div>
                </form>
            </section>
            )

        }
        
    }
}


export default PackageSelection;