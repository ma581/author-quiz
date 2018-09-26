import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';
import {BrowserRouter, Route} from 'react-router-dom';
import AddAuthorForm from "./AddAuthorForm";

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

class Game extends React.Component {

    constructor() {
        super();
        this.state = {turnData: getTurnData(authors)}
    }

    render() {
        return <AuthorQuiz {...this.state.turnData} onClick={() => this.refreshGame()}/>
    }

    refreshGame() {
        this.setState({turnData: getTurnData(authors)});
    }
}

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Game}/>
            <Route path="/add" component={AddAuthorForm}/>
        </React.Fragment>
    </BrowserRouter>
    ,
    document.getElementById('root'));
registerServiceWorker();
