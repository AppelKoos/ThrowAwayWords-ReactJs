import React from 'react';
const SaveButton = (props) => {
    return (
        <div>
            <button 
            onClick={props.clickHandler}
            disabled={props.enabled} >
                Save Text </button>
        </div>
    )
}
export default SaveButton;