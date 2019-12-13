import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './reducers'
import thunk from 'redux-thunk';

import {BrowserRouter as Router} from "react-router-dom"

const store = createStore(rootReducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, rootElement);