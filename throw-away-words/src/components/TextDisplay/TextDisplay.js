import React from 'react';
const TextDisplay = (props) => {
    return (
        <div onClick={props.clicked}>
            {props.textToDisplay}
        </div>
    )
}
export default TextDisplay;