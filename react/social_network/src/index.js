import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts= [
  {id: 1, message: "Hi, how are you?", likesCount: "1"},
  {id: 2, message: "It's my way of ninja", likesCount: "23"},
]

let dialogs = [
  {id: 1, name: 'Arystan'},
  {id: 2, name: 'Diana'},
  {id: 3, name: 'Dias'},
  {id: 4, name: 'Aisulu'},
  {id: 5, name: 'Danel'},
  {id: 6, name: 'Abl'}
]

let messages = [
  {id: 1, message: "Hi, my friend"},
  {id: 2, message: "Go footbal mb?"},
  {id: 3, message: "Bye"}, 
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
