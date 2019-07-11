    
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './LevelsList.css';




const handleClick = input => e => {
    this.setState({ [input]: e.target.value });
    browsePackageSelect()
    
}

// Proceed to next step
const browsePackageSelect = () => {
    const { step } = useState;
    this.setState({
        step: step - 2
    });
}

const LevelsList = props => {
    const {step, selectedPackage } = props;
    console.log(props.levels)
    return (
        <div className="levels-list">
            {props.levels.map(level => (
                <div className="ui card levels">
                
                    <div className="content" key={level.id}>
                        <div className="level-header">{level.title}</div>
                        <div className="price">${level.price}</div>

                        {level.services.map(service => (
                            <div className="content" key={service.id}>{service.body}</div>
                        ))}
                    </div>

                    <input onClick={handleClick} value={propsc} type="submit" id="when-next" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Select
                    </input> 

                </div> 
                
            ))}


        </div>
    )
}





export default LevelsList;