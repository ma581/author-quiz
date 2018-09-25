import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
        imageSource: 'Wikipedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing it']
    },
    {
        name: 'Brandon Sanderson',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Brandon_Sanderson_sign.jpg',
        imageSource: 'Wikipedia Commons',
        books: ['Elantris', 'Mistborn', 'The Way of Kings']
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
        books: ['To Kill a Mockingbird']
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce((p, c) => p.concat(c.books), []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const correctAnswer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find(a => a.books.some(title => title === correctAnswer)),
        correctBook: correctAnswer
    }
}

class Game extends React.Component {

    constructor(){
        super();
        this.state = {turnData: getTurnData(authors)}
    }

    render(){
        return <AuthorQuiz {...this.state.turnData} onClick={() => this.refreshGame()}/>
    }

    refreshGame() {
        console.log('refreshing the game...');
        this.setState({turnData: getTurnData(authors)});
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();
