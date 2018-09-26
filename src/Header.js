import React from "react";
import AddAuthorButton from "./AddAuthorButton";

export default function Header() {
    return <div className="jumbotron col-10 offset-1">
        <h1 className="display-4">Author Quiz</h1>
        <p className="lead">Select a book written by the author shown</p>
        <AddAuthorButton/>
    </div>
}