import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

describe('Author Quiz', () => {

    const state = {
        turnData: {
            author : {name: 'Test'},
            books: ['A', 'B'],
        }
    };
    it('should render', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AuthorQuiz {...state.turnData}/>, div);
    });
});