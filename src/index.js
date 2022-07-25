import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/State';
import state from './redux/State'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state = {state} addPost = {addPost} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
