import React from 'react';
import './App.css';
import Feedback from './Feedback';
import Continue from './Continue';
import Header from './Header';
import Turn from './Turn';
import {connect} from 'react-redux';

class AuthorQuiz extends React.Component {

    render() {
        const turnProps = {
            author: this.props.author,
            books: this.props.books,
            onClick: a => this.props.onAnswerSelected(a)
        };

        return (
            <div>
                {this.props.attemptedToAnswer ? <Feedback isCorrect={this.props.answeredCorrectly}/> : <div/>}
                <Header/>
                <Turn {...turnProps}/>
                {this.props.attemptedToAnswer ? <Continue onClick={() => this.props.onContinue()} isCorrect={this.props.answeredCorrectly}/> : <div/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        author: state.turnData.author,
        books: state.turnData.books,
        correctBooks: state.turnData.correctBooks,
        attemptedToAnswer: state.attemptedToAnswer,
        answeredCorrectly: state.answeredCorrectly
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAnswerSelected: (answer) => dispatch({type: 'ANSWER_SELECTED', answer}),
        onContinue: () => dispatch({type: 'CONTINUE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz)