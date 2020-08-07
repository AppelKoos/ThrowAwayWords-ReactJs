import React from 'react';
const TextEnterer = (props) => {
    return (
        <div>
            <input type="text" onChange={props.textHandler} />
            <h2> {props.outputText} </h2>
        </div>
    )
}
export default TextEnterer;