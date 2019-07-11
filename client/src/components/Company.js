import React, { Component } from 'react';
import './Company.css'

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


                <div id="company-container" >



                <div id="company-jumbotron" class="jumbotron">    

                <h2>Mission Statement</h2>
                    <p>Mission Statement
Bartenders 2U is a mobile bartending company bartending ultra exclusive events. Providing world class craft cocktails and elegant bars to each client further enriching their experience nationwide.</p>
                <h2>Contact Info</h2>
                Bartenders 2 U
E:Chris@Bartenders2U.com
T:209-534-3602
              
                  
                  
                    </div>
                </div>
                   
                    
                </main>
        );
    }
}


export default Company;