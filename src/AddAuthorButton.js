import * as React from 'react';
import {Link} from 'react-router-dom';

export default function AddAuthorButton() {
    return <Link to="/add">
        <button type="button"
                className="btn btn-primary btn-lg continue">
            Add authors »
        </button>
    </Link>

}