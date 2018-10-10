import React from 'react';
import {Link} from "react-router-dom";

export default class AddAuthorForm extends React.Component {
    constructor({onAddAuthor}) {
        super();
        this.state = {books: []};
        this.onAddAuthor = onAddAuthor;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.onAddAuthor(this.state)
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value});
    };

    handleBookSubmit(book) {
        const books = this.state.books;
        books.push(book);
        this.setState({books: books});
    };

    render() {
        return <div>
            <div className="jumbotron col-10 offset-1">
                <h1 className="display-4">Add authors</h1>
                <p className="lead">Add authors and their books</p>
                <Link to="/">
                    <button type="button"
                            className="btn btn-primary btn-lg continue">
                        « Home
                    </button>
                </Link>
            </div>

            <form className="col-10 offset-1" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="inputEmail">Name</label>
                    <input type="text" className="form-control add-author-input"
                           id="inputEmail"
                           name="name"
                           placeholder="Enter name" onChange={(event) => this.handleOnChange(event)}/>

                    <label htmlFor="inputImageURL">Image URL</label>
                    <input type="text" className="form-control add-author-input"
                           id="inputImageURL"
                           name="imageUrl"
                           placeholder="Enter URL" onChange={(event) => this.handleOnChange(event)}/>
                    <AddBook handleBookSubmit={(book) => this.handleBookSubmit(book)}/>
                    {this.state.books.map(book => <li key={book}>{book}</li>)}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    }
}


class AddBook extends React.Component {
    constructor() {
        super();
        this.state = {book: null}
    }

    handleOnChange = function (event) {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return <div>
            <label htmlFor="inputImageURL">Books</label>
            <div className="input-group">
                <input type="text" className="form-control"
                       placeholder="Book title"
                       name="book"
                       aria-describedby="button-addon4"
                       onChange={(event) => this.handleOnChange(event)}/>
                <div className="input-group-append" id="button-addon4">
                    <button className="btn btn-primary"
                            type="button"
                            onClick={() => this.props.handleBookSubmit(this.state.book)}>+
                    </button>
                </div>
            </div>
        </div>
    }
}