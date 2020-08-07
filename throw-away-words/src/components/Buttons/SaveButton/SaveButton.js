import React from 'react';
const SaveButton = (props) => {
    return (
        <div>
            <button onClick={props.clickHandler} >Save Text </button>
        </div>
    )
}
export default SaveButton;