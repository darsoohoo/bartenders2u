import React, { Component, Fragment, userState } from 'react';
import { Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './QuoteReview.css';
import axios from 'axios';



class QuoteReview extends Component {
     
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

        };

       
    }

    componentDidMount() {
        fetch('api/levels/data')
        .then(res => res.json())
        .then(levels => this.setState({levels}, () => console.log('Levels fetched...', levels)))
        
    }

    submitHandler = event => {
        event.preventDefault();
        const { values: { date, startTime, endTime, address, venueName, selectedPackage, packagePrice, eventSize, eventType, firstName, lastName, email, phoneNumber }, handleChange} = this.props;
        const values = { date, startTime, endTime, address, venueName, selectedPackage, packagePrice, eventSize, eventType, firstName, lastName, email, phoneNumber }
        
        const addQuote = async data => {
            const newQuote = {
                date: data.date,
                startTime: data.startTime,
                endTime: data.endTime,
                address: data.address,
                venueName: data.venueName,
                selectedPackage: data.selectedPackage,
                packagePrice: data.packagePrice,
                eventSize: data.eventSize,
                eventType: data.eventType,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber
            }


           try {
            const config = {
                headers: {
                  'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(newQuote);
            const res = await axios.post('/api/quotes/submit-request', body, config);
            console.log(res.data)
           } catch(err) {
            console.log(err.response.data)
           }

        }


        addQuote(values);
        this.continue(event)
        console.log("quote submitted")
     
    };
    



    render() {

  //method="POST" action="/submit-request" 
        const { values: { date, startTime, endTime, address, venueName, selectedPackage, packagePrice, eventSize, eventType, firstName, lastName, email, phoneNumber }, handleChange, submitHandler} = this.props;
  
       

            return (
                <Fragment>
                    <section className="quote-review-form">
                    <form className="ui form"  onSubmit={this.submitHandler} >
                            <div className="row">
                               <Link onClick={this.back}>Back</Link>   
                                <h4>Review</h4>
                                <hr></hr>
                            </div>
    
                           <div className="row">
                           <h5>When</h5>
                           <input 
                            name="date" 
                            readOnly 
                            defaultValue={date}
                            placeholder="mm/dd/yyyy"
                            className="col-sm-4 review-field"
                            onChange={handleChange('date')}
                            />
                            <input readOnly
                            name="starttime"
                            placeholder="Start Time"
                            value={startTime}
                            iconPosition="left"
                            className="col-sm-4 review-field"
                            onChange={handleChange('startTime')}
                            />
                            <input readOnly
                            name="endtime"
                            placeholder="End Time"
                            value={endTime}
                            iconPosition="left"
                            className="col-sm-4 review-field"
                            onChange={handleChange('endTime')}
                            />
                           </div>
    
                       
                            <div className="row">
                                <h5>Where</h5>
                                <div class="field">
                                    <input  onChange={handleChange('address')}  className="col-sm-6 review-field" name="address" value={address} placeholder="Address" />
                                    <input  onChange={handleChange('venueName')} className="col-sm-6 review-field" value={venueName} name="venuename" placeholder="Venue Name" />
                                </div>
                            </div>
    
                            <div className="row">
                                <h5>Event Info</h5>           
                                <select  onChange={handleChange('selectedPackage')} value={selectedPackage} name="selectedpackage" class="review-field col-sm-4" id="select-package">
                                
                                    {this.state.levels.map(level =>
                                        <option  key={level.title}>{level.price} </option>)}
                                </select>
                                <select onChange={handleChange('eventSize')} value={eventSize} name ="eventsize" class="col-sm-4 review-field">
                                    <option value="">Size</option>
                                    <option value="1-50">1-50</option>
                                    <option value="51-100">50-100</option>
                                    <option value="101-200">100-200</option>
                                    <option value="201-500">200-500</option>
                                    <option value="500+">500+</option>
                                </select>
                                <select  onChange={handleChange('eventType')} value={eventType} name="eventtype" class="col-sm-4 review-field">
                                    <option value="">Type</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Business">Business</option>
                                    <option value="Graduation">Graduation</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Random Party">Random Party</option>
                                </select>
                            </div> 
    
                            <div class="row">
                                <h5>Contact Info</h5>
                                <div class="two fields">
                                    <div class="field">
                                        <input  onChange={handleChange('firstName')} class="col-sm-3 review-field" value={firstName} type="text" name="firstname" placeholder="First Name"></input>
                                    </div>
                                    <div class="field">
                                        <input  onChange={handleChange('lastName')} class="col-sm-3 review-field" value={lastName} type="text" name="lastname" placeholder="Last Name"></input>
                                    </div>
                                    <div class="field">
                                        <input  onChange={handleChange('email')} class="review-field col-sm-3" value={email} type="email" name="email" placeholder="Email">{ this.props.email }</input>
                                    </div>
                                    <div class="field">
                                        <input  onChange={handleChange('phoneNumber')} class="review-field col-sm-3" value={phoneNumber} type="tel" name="phonenumber" placeholder="Phone Number"></input>
                                    </div>
                                </div>   
                            </div>
    
                        <div class="bottom-section">
                            <p className="quote-item row"><h5>Estimated Subotal: </h5><input name="packageprice" class="no-border-inputs" value={`${selectedPackage}`}></input>  </p>
                            <h5 className="row">Would you like to submit your request to Bartenders2U?</h5>
                            <div className="row">
                                <button  type="submit" id="submit-request" class="field mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                    Request a Bartender
                                </button>  
                            </div>
                            <h6 className="row">A Bartenders2U sales rep will review your request and reach out to you within 24 hours to confirm the details. You will not be asked to pay for the event until the event is confirmed by Bartenders2U. Once the event is confirmed, you have the option to pay upfront or after the event. See cancellation policy for more information.</h6>
                        </div>                        
                    </form>
    
                </section>



                </Fragment>

                        
            );


        
        
    }
}


export default QuoteReview;