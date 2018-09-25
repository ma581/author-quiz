import React from 'react';
import './App.css';
import Feedback from './Feedback';
import Continue from './Continue';
import Header from './Header';
import Turn from './Turn';

export default class AuthorQuiz extends React.Component {

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