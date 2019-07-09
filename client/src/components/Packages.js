import React, { Component } from 'react';
import axios from 'axios';
import './Packages.css';
import LevelsList from './LevelsList';
import Loader from './Loader'



class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [],
            isLoaded: false
            
        };
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
                <h2>We bring the party to you</h2>

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
                <h2>We bring the party to you</h2>

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