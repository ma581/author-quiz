import React from 'react';
import './App.css';

class AuthorQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: this.props.turnData.author,
            books: this.props.turnData.books,
            attemptedToAnswer: false,
            answeredCorrectly: false,
            correctBook: this.props.turnData.correctBook
        };
        this.handleOnClick.bind(this);
    }

    render() {
        const turnProps = {
            author: this.state.author,
            books: this.state.books,
            onClick: t => this.handleOnClick(t)
        };

        return (
            <div>
                {this.state.attemptedToAnswer ? <Feedback isCorrect={this.state.answeredCorrectly}/> : <div/>}
                <Header/>
                <Turn {...turnProps}/>
                {this.state.attemptedToAnswer ? <Continue onClick={() => this.continue()}/> : <div/>}
            </div>
        );
    }

    handleOnClick(title) {
        this.setState({
            attemptedToAnswer: true,
            answeredCorrectly: this.state.correctBook === title
        })
    };

    continue() {
        this.setState({attemptedToAnswer: false});

    }
}

export default AuthorQuiz;

function Header() {
    return <div className="jumbotron col-10 offset-1">
        <h1 className="display-4">Author Quiz</h1>
        <p className="lead">Select the book written by the author shown</p>
    </div>
}

function Turn({author, books, onClick}) {
    return <div className="row turn" style={{backgroundColor: "white"}}>
        <div className="col-4 offset-1">
            <img src={author.imageUrl} alt="Author" className="authorimage"/>
        </div>

        <div className="col-6 list-group">
            {books.map(title => <li className="list-group-item list-group-item-action"
                                    key={title}
                                    onClick={() => onClick(title)}>{title}</li>)}
        </div>
    </div>
}

function Continue({onClick}) {
    return <button type="button"
                   className="btn btn-secondary btn-lg btn-block"
                   onClick={onClick}>Continue the fun!</button>
}

function Feedback({isCorrect}) {
    return isCorrect ?
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You got that right!.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        :
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Sacre Bleu!</strong> You got that wrong!.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
}
