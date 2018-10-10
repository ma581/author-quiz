import React from 'react';
import './App.css';
import Feedback from './Feedback';
import Continue from './Continue';
import Header from './Header';
import Turn from './Turn';

export default class AuthorQuiz extends React.Component {

    constructor() {
        super();
        this.state = {
            attemptedToAnswer: false,
            answeredCorrectly: false,
        };
        this.handleOnClick.bind(this);
        this.continue.bind(this);
    }

    render() {
        const turnProps = {
            author: this.props.author,
            books: this.props.books,
            onClick: t => this.handleOnClick(t)
        };

        return (
            <div>
                {this.state.attemptedToAnswer ? <Feedback isCorrect={this.state.answeredCorrectly}/> : <div/>}
                <Header/>
                <Turn {...turnProps}/>
                {this.state.attemptedToAnswer ? <Continue onClick={() => this.continue()} isCorrect={this.state.answeredCorrectly}/> : <div/>}
            </div>
        );
    }

    handleOnClick(title) {
        if(this.state.attemptedToAnswer){
            return
        }
        this.setState({
            attemptedToAnswer: true,
            answeredCorrectly: this.props.correctBooks.find(t => t === title)
        })
    };

    continue() {
        this.setState({attemptedToAnswer: false});
        this.props.onClick();
    }
}