import React from 'react';
import {Link} from "react-router-dom";

export default function AddAuthorForm() {
    return <div className="jumbotron col-10 offset-1">
        <h1 className="display-4">Add authors</h1>
        <p className="lead">Add authors and their books</p>
        <Link to="/">
        <button type="button"
                className="btn btn-primary btn-lg continue">
            « Home
        </button>
    </Link>
    </div>
}
