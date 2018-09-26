import React from "react";

export default function Continue({onClick, isCorrect}) {
    return <button type="button"
                   className={`btn ${isCorrect ? "btn-success" : "btn-danger"} btn-lg continue col-10 offset-1`}
                   onClick={onClick}>
        {isCorrect ? "Continue the fun!" : "Try another :("}
    </button>
}