import React from 'react';
const DeleteButton = (props) => {
    return (
        <div>
            <button onClick={props.clickHandler} >Delete Me</button>
        </div>
    )

}
export default DeleteButton;