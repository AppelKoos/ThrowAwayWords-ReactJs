import React from 'react';
const TextEnterer = (props) => {
    return (
        <div>
            <input type="text" onChange={props.textHandler} />
        </div>
    )
}
export default TextEnterer;