import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import {shuffle, sample} from 'underscore';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import AddAuthorForm from "./AddAuthorForm";
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
        imageSource: 'Wikipedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi']
    },
    {
        name: 'Brandon Sanderson',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Brandon_Sanderson_sign.jpg',
        imageSource: 'Wikipedia Commons',
        books: ['Elantris', 'The Way of Kings']
    },
    {
        name: 'Kent Beck',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Kent_Beck_no_Workshop_Mapping_XP.jpg',
        imageSource: 'Wikipedia Commons',
        books: ['Test Driven Development', 'Extreme Programming Explained']
    },
    {
        name: 'Harper Lee',
        imageUrl: 'https://www.latimes.com/resizer/6EJAg9xU-x1zWFRQrBlakXkBtyg=/1200x1200/www.trbimg.com/img-56c8a0bf/turbine/ct-harper-lee-20160220',
        imageSource: 'Wikipedia Commons',
        books: ['To Kill a Mockingbird', "Go Set a Watchman"]
    },
    {
        name: 'Robert Martin',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Robert_Cecil_Martin.png',
        imageSource: 'Wikipedia Commons',
        books: ['Clean Code', 'Clean Architecture']
    },
    {
        name: 'Agatha Christie',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/46/2015/09/Agatha-Christie-614x920.jpg',
        imageSource: 'Wikipedia Commons',
        books: ['Murder on the Orient Express', 'Death on the Nile']
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce((p, c) => p.concat(c.books), []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const correctAnswer = sample(fourRandomBooks);
    const pickedAuthor = authors.find(a => a.books.some(title => title === correctAnswer));

    return {
        books: fourRandomBooks,
        author: pickedAuthor,
        correctBooks: pickedAuthor.books
    }
}

const addAuthor = (author) => {
    if (authors.find(a => a.name === author.name)) {
        alert(`author ${author.name} already exists!`);
        return
    }
    authors.push(author);
};

const AddAuthorWrapper = withRouter(({history}) => {
    return <AddAuthorForm onAddAuthor={(author) => {
        addAuthor(author);
        history.push('/')
    }}/>
});

function reducer(state = {authors, turnData: getTurnData(authors)}, action) {
    switch (action.type) {
        case 'CONTINUE':
            return Object.assign({}, state, {
                turnData: getTurnData(authors),
                attemptedToAnswer: false
            });
        case 'ANSWER_SELECTED':
            if (state.attemptedToAnswer) {
                return state
            }
            return Object.assign({}, state, {
                attemptedToAnswer: true,
                answeredCorrectly: state.turnData.correctBooks.find(t => t === action.answer)
            });
        default:
            return state;
    }
}

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const AuthorQuizWrapper = () => {
    return <ReactRedux.Provider store={store}>
        <AuthorQuiz/>
    </ReactRedux.Provider>
};

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={AuthorQuizWrapper}/>
            <Route path="/add" component={AddAuthorWrapper}/>
        </React.Fragment>
    </BrowserRouter>
    ,
    document.getElementById('root'));
