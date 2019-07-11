import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './Where.css';



class Where extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, handleChange } = this.props;

        return (
                <div class="eventform">
                    <div class="row">
                        <Link class="back-link" onClick={this.back}>Back</Link> 
                    </div>
                    <div class="progress" style="height:20px">
                        <div class="progress-bar" style="width:40%;height:20px"></div>
                    </div>
                    
                    <form class="ui form">
                        <div>
                            <div class="form-row">
                                <div class="form-group">
                                    <div class="row">
                                    <h5>Any place you want...</h5>
                                    <hr></hr>
                                    <h6 class="header-location">Where</h6>
                                    </div>

                                    <div class="row">
                                        <TextField
                                            onChange={handleChange('address')}
                                            value={values.address}
                                            placeholder="Street Address"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Street Address"
                                            className="col-sm-12 location-field"
                                            id="address"
                                            >
                                                
                                        </TextField>
                                    </div>
                                    <div class="row">
                                        <TextField
                                            onChange={handleChange('venueName')}
                                            defaultValue={values.venueName}
                                            placeholder="My house"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Name of Venue"
                                            className="col-sm-12 location-field"
                                            id="venue-name"
                                            >
                                        </TextField>
                                    </div>
                                    <div class="row">
                                        <button
                                            onClick={this.continue}
                                            id="when-next" 
                                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                            Next
                                        </button> 
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
        );
    }
}


export default Where;