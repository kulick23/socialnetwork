import './index.css';
import App from './App';
import store from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
let render =(state) => {
ReactDOM.render(
    <BrowserRouter>
    <App state = {state} addPost = {store.addPost.bind(store)} 
    updateNewPostText={store.updateNewPostText.bind(store)} />
    </BrowserRouter>,document.getElementById('root')
);

}
render(store.GetState());
store.subscribe(render)