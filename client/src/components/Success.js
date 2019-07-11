import React, { Component } from 'react';
import './Success';

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
     
            
        };
    }

    render() {
        let imgUrlCity = require('./images/pub.jpg')
       
        return (
 
                <main className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header"
                style={{  backgroundImage: "url(" + imgUrlCity + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div id="success-container" >
                <div id="success-jumbotron" class="jumbotron">    
                <h5>Thank you</h5>
                <h6>A Bartenders2U sales rep will review your request and reach out to you within 24 hours to confirm the details. You will not be asked to pay for the event until the event is confirmed. Once the event is confirmed by Bartenders2U, you have the option to pay upfront or after the event. See cancellation policy for more information.</h6>

        
                    </div>
                </div>
                   
                    
                </main>
        );
    }
}


export default Company;