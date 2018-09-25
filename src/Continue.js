import React from "react";

export default function Continue({onClick}) {
    return <button type="button"
                   className="btn btn-secondary btn-lg btn-block"
                   onClick={onClick}>Continue the fun!</button>
}