import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './helloWorld.css';
import HelloWorld from './HelloWorld';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import MovieSearchComponent from "./movieSearchComponent";

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <MovieSearchComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
