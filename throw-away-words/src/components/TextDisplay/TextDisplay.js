import React from 'react';
import classes from './TextDisplay.module.css'

const TextDisplay = (props) => {

    return (
        <div className={classes.TextDisplay} onClick={props.clicked}>
            {props.textToDisplay}
        </div>
    )
}
export default TextDisplay;