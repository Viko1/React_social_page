import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
        {id: 1, message: 'Hi how are u', likesCount: 12},
        {id: 2, message: "It's my firs post", likesCount: 10},
        {id: 3, message: 'How are u?', likesCount: 0},
        {id: 4, message: 'Yo1', likesCount: 1},
        {id: 5, message: 'yo2', likesCount: 1},
        {id: 6, message: 'Yo3', likesCount: 0},
    ];


let message = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'U look great'},
        {id: 3, message: 'How are u?'},
        {id: 4, message: 'Yo1'},
        {id: 5, message: 'yo2'},
        {id: 6, message: 'Yo3'},
    ];

let dialogs = [
        {id: 1, name: 'Viko'},
        {id: 2, name: 'Daria'},
        {id: 3, name: 'Taras'},
        {id: 4, name: 'Liubomir'},
        {id: 5, name: 'Roman'},
        {id: 6, name: 'Sylwestr'},
    ];

ReactDOM.render(<App posts={posts} message={message} dialogs={dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
