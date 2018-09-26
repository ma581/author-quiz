import React from "react";
import PropTypes from 'prop-types';

export default function Turn({author, books, onClick}) {
    return <div className="row turn" style={{backgroundColor: "white"}}>
        <div className="col-4 offset-1">
            <img src={author.imageUrl} alt="Author" className="img-fluid"/>
        </div>

        <div className="col-6 list-group">
            {books.map(title => <li className="list-group-item list-group-item-action"
                                    key={title}
                                    onClick={() => onClick(title)}>{title}</li>)}
        </div>
    </div>
}

Turn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};