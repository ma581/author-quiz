import React from "react";

export default function Feedback({isCorrect}) {
    return isCorrect ?
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You got that right!.
        </div>
        :
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Sacre Bleu!</strong> You got that wrong!.
        </div>
}