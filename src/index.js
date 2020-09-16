import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './helloWorld.css';
import PageTitle from './pageTitle';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import MovieSearch from "./movieSearch";

ReactDOM.render(
  <React.StrictMode>
      <div className="container">
    <PageTitle />
    <MovieSearch />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
