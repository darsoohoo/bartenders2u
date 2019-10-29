import React, { Component } from 'react';
import axios from 'axios';
import LevelsList from './LevelsList';
import Loader from './Loader'
import './Packages.css'


class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [],
            isLoaded: false
            
        };
    }


    componentDidMount() {
        this.getData();
    }

    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }

    getData = () => {
        fetch('/api/levels/data')
        .then(res => res.json())
        .then(levels => {
          this.setState({ levels: [...levels], isLoaded: true });
          // call getData() again in 5 seconds
          this.intervalID = setTimeout(this.getData.bind(this), 5000);
        })
        .catch(e => {
            console.log(`An error occured: ${e}`)
        });

    }

    render() {
        let imgUrlCity = require('./images/rooftop.jpg')
        const { isLoaded, levels } = this.state;
        if(!isLoaded) {
            return (
                <main className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header"
                style={{  backgroundImage: "url(" + imgUrlCity + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>


                <div id="packages-container" >
                <h2>We bring the drinks to you</h2>

                <div id="services-jumbotron" class="jumbotron">    

                <Loader />
                                
                    </div>
                </div>
                   
                    
                </main>
                )
        } else {

            return (
 
                <main className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header"
                style={{  backgroundImage: "url(" + imgUrlCity + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>


                <div id="packages-container" >
                <h2>We bring the drinks to you</h2>

                <div id="services-jumbotron" class="jumbotron">    

                <LevelsList levels={this.state.levels}/>
              
                  
                  
                    </div>
                </div>
                   
                    
                </main>
        );


        }
       

    }
}


export default Packages;