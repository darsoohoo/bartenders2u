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
        const progressBarStyle = {
            width: '25%',
            height: '15px',
            
        }
        const mdProgress = {
            height: '10px',
            marginTop: '11px'
        }

        return (
                <div class="eventform">
                    <div class="row">
                        <Link className="back-link" onClick={this.back}>Back</Link> 
                    </div>

                    
                    <form class="ui form">

                        <div>
                        <div class="progress md-progress row" style={mdProgress}>
                            <div class="progress-bar" role="progressbar" style={progressBarStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
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
                                            placeholder="1489 Webster Street"
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            label="Address"
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