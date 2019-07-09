    
import React from "react";
import { Link } from 'react-router-dom';
import './LevelsList.css';




const LevelsList = props => {
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

                    <Link type="submit" id="when-next" to="/" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Select
                    </Link> 

                </div> 
                
            ))}


        </div>
    )
}





export default LevelsList;