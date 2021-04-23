import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App'

function getUsers() {
    fetch('/users', {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6Z…TUyfQ.P1Nt9tGSycxJsHh-xeCQsfeUsYfTWlrU0RR27tWnAeg'
        }
    }).then(res => res.json()).then(d => console.log(d))
}
ReactDOM.render(<App />, document.getElementById('root'))
