import React from "react";

function Button(props) {
    return <button className = "Button">
        <p>{props.text}</p>
    </button>
}

export default Button;