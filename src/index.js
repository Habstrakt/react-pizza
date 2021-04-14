import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/store"

import './app.css';

console.log(store.getState());



ReactDOM.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
