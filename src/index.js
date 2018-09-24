import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
        imageSource: 'Wikipedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing it']
    }
];

const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
};

ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));
registerServiceWorker();
