import React, { Component, Fragment } from 'react'
import When from '../When'
import Where from '../Where'
import PackageSelection from '../PackageSelection'
import QuoteReview from '../QuoteReview'
import './Landing.css'


export class Landing extends Component {
    
    state = {
        levels: [],
        step: 1,
        date: '',
        startTime: '',
        endTime: '',
        address: '',
        venueName: '',
        selectedPackage: '',
        packagePrice: '',
        eventSize: '',
        eventType: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''

    }

    
    componentDidMount() {
        fetch('/api/levels/data')
        .then(res => res.json())
        .then(levels => this.setState({levels: levels, isLoaded: true}, () => console.log('Levels fetched...', levels)))
        .catch(e => {
            console.log(`An error occured: ${e}`)
        });
    }


    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }



    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log(e.target.value)
    };

    // Handle Package Selection
    
    handleChangePackage = input => e => {
        this.setState({ [input]: e.target.value });
        let packageSelection = e.target.value
        console.log(packageSelection)
        if(packageSelection == "Bronze"){
            this.setState({ packagedPrice: "299"})
        } else if( packageSelection === "Silver"){
            this.setState({packagePrice: "349"})
        } else if ( packageSelection === "Gold"){
            this.setState({ packagePrice: "899"})
        } else if ( packageSelection === "Platinum"){
            this.setState({packagePrice: "999"})
        } else if ( packageSelection === "Diamond"){
            this.setState({packagePrice: "3750"})
        }
        console.log(this.state.packagePrice)


    };
    


  submitHandler = (event) => {
      event.preventDefault()
      const data = this.state
      console.log("Final data is " + data)
  }



  render() {
    const { step } = this.state;
    const { date, startTime, endTime, address, venueName, selectedPackage, packagePrice, eventSize, eventType, firstName, lastName, email, phoneNumber } = this.state;
    const values = { date, startTime, endTime, address, venueName, selectedPackage, packagePrice, eventSize, eventType, firstName, lastName, email, phoneNumber };
    const imgUrlCity = require('./../images/city.jpg')
    const imgUrlRooftop = require('./../images/rooftop.jpg')
    const imgUrlPub = require('./../images/pub.jpg')
    switch (step) {
      case 1:
        return (

            <Fragment>
                <main className="site content mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header"
                style={{  backgroundImage: "url(" + imgUrlCity + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                    <div class="container">
                    <h4>We bring the party to you</h4>
                        <div id="frontpage-jumbotron" class="jumbotron">    
                            <When
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </div>
                    </div>
                </main>
            </Fragment>
        );
      case 2:
        return (
                <Fragment>
                    <main className="site content mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                    mdl-layout--fixed-header"
                    style={{  backgroundImage: "url(" + imgUrlCity + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
                        <div class="container">
                        <h4>We bring the party to you</h4>
                            <div id="frontpage-jumbotron" class="jumbotron">           
                                <Where
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            </div>
                        </div>
                    </main>
                </Fragment>
        );
      case 3:
        return (
         <Fragment>
            <main className="site content mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header"
                style={{  backgroundImage: "url(" + imgUrlCity + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                <h4>We bring the party to you</h4>
                    <div id="frontpage-jumbotron" className="jumbotron">    
                        <PackageSelection
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleChangePackage={this.handleChangePackage}
                            values={values}
                        />
                    </div>
                </div>
            </main>
         </Fragment>
        );
      case 4:
           
        return (
            
            <Fragment>
                <main className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                    mdl-layout--fixed-header"
                    style={{  backgroundImage: "url(" + imgUrlRooftop + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
                    <div id="quote-container" >
                        <div id="quote-jumbotron" class="jumbotron">    
                            <QuoteReview
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                submitHandler={this.submitHandler}
                                values={values}
                                />
                        </div>
                    </div>
                </main>
            </Fragment>
           
        );
        case 5:
            return (
                <Fragment>
                <main className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header"
                style={{  backgroundImage: "url(" + imgUrlPub + ")",
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
                </Fragment>
            );
            default:
                return <div>default hi</div>
        
    }
  }
}

export default Landing;
