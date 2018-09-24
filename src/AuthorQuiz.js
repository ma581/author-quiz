import React from 'react';
import './App.css';

function AuthorQuiz({turnData}) {

    return (
        <div>
            <Hero/>
            <Turn {...turnData}></Turn>
            <Continue></Continue>
        </div>
    );

}

export default AuthorQuiz;

function Hero() {
    return <div className="jumbotron col-10 offset-1">
        <h1 className="display-4">Author Quiz</h1>
        <p className="lead">Select the book written by the author shown</p>
    </div>
}

function Turn({author, books}) {
    return <div className="row turn" style={{backgroundColor: "white"}}>
        <div className="col-4 offset-1">
            <img src={author.imageUrl} alt="Author" className="authorimage"/>
        </div>

        <div className="col-6 list-group">
            {books.map(title => <a className="list-group-item list-group-item-action"
                                   key={title}>{title}</a>)}
        </div>
    </div>
}

function Continue() {
    return <div></div>

}
