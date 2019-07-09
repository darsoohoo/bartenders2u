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
                <section class="eventform">
                    <form class="ui form">
                       <div>
                            <div class="form-row">
                                <div class="form-group">
                                    <div class="row">
                                    <h5>Plan a unique experience</h5>
                                    <hr></hr>
                                    <h6>When</h6>
                                        <form noValidate>
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
                                        </form>
                                    </div>
                                    
                                    <div class="row">
                                    <h6 className="col-sm-6 header-time">Start Time</h6>
                                    <h6 className="col-sm-6 header-time">End Time</h6>

                                    </div>

                                    <div class="row">
                                        <form  noValidate>
                                            <TextField
                                            id="time"
                                            name="starttime"
                                            type="time"
                                            onChange={handleChange('startTime')}
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            defaultValue={values.startTime}
                                            className="col-sm-6 time"
                                            />
                                        </form>
                                        <form noValidate>
                                        <TextField
                                            id="time"
                                            name="endtime"
                                            type="time"
                                            onChange={handleChange('endTime')}
                                            id="outlined-name"
                                            margin="normal"
                                            variant="outlined"
                                            defaultValue={values.endTime}
                                            className="col-sm-6 time"
                                        />
                                        </form>
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
                </section>
        );
    }
}


export default When;