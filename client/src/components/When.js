import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './When.css';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));



export class When extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
}


    render() {
        const { values, handleChange } = this.props;

 
        return (
                <section class="request-form">
                    <form class="ui form">
                       <div>
                            <div class="form-row">
                                <div class="form-group">
                                    <div class="row">
                                    <h5>Plan a unique experience</h5>
                                    <hr></hr>
                                    <h6>When</h6>
                                    <TextField
                                        id="date"
                                        type="date"
                                        value={values.date}
                                        defaultValue={Date.now}
                                        onChange={handleChange('date')}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    </div>
                                    <div className="row">
                                        <div>
                                        <div className="start-time" >
                                        <h6 className="header-time">Start Time</h6>
                                        <select type="time" defaultValue={values.startTime} onChange={handleChange('startTime')} className="time col-sm-6">
                                            <option value="12:00 AM">12:00 AM</option>
                                            <option value="1:00 AM">1:00 AM</option>
                                            <option value="2:00 AM">2:00 AM</option>
                                            <option value="3:00 AM">3:00 AM</option>
                                            <option value="4:00 AM">4:00 AM</option>
                                            <option value="5:00 AM">5:00 AM</option>
                                            <option value="6:00 AM">6:00 AM</option>
                                            <option value="7:00 AM">7:00 AM</option>
                                            <option value="8:00 AM">8:00 AM</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="1:00 PM">1:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                            <option value="6:00 PM">6:00 PM</option>
                                            <option value="7:00 PM">7:00 PM</option>
                                            <option value="8:00 PM">8:00 PM</option>
                                            <option value="9:00 PM">9:00 PM</option>
                                            <option value="10:00 PM">10:00 PM</option>
                                            <option value="11:00 PM">11:00 PM</option>
                                        </select>
                                        </div>
                                        <div className="end-time">
                                        <h6 className="header-time">End Time</h6>
                                        <select type="time" defaultValue={values.endTime} onChange={handleChange('endTime')} className="time col-sm-6">
                                            <option value="12:00 AM">12:00 AM</option>
                                            <option value="1:00 AM">1:00 AM</option>
                                            <option value="2:00 AM">2:00 AM</option>
                                            <option value="3:00 AM">3:00 AM</option>
                                            <option value="4:00 AM">4:00 AM</option>
                                            <option value="5:00 AM">5:00 AM</option>
                                            <option value="6:00 AM">6:00 AM</option>
                                            <option value="7:00 AM">7:00 AM</option>
                                            <option value="8:00 AM">8:00 AM</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="1:00 PM">1:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                            <option value="6:00 PM">6:00 PM</option>
                                            <option value="7:00 PM">7:00 PM</option>
                                            <option value="8:00 PM">8:00 PM</option>
                                            <option value="9:00 PM">9:00 PM</option>
                                            <option value="10:00 PM">10:00 PM</option>
                                            <option value="11:00 PM">11:00 PM</option>
                                        </select>
                                        </div>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                       </div>
                        <div className="row">
                            <button
                                onClick={this.continue}
                                id="when-next" 
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                Next
                            </button> 
                        </div>
                    </form>
                </section>
        );
    }
}


export default When;