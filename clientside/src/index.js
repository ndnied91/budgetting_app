import { createRoot } from 'react-dom/client';
import React from 'react';
import {Provider} from 'react-redux'
import './index.css';
import App from './Components/App/App';

import {createStore , applyMiddleware , compose} from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

import axios from 'axios'
window.axios = axios

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore( reducers, composeEnhancers(applyMiddleware(reduxThunk)))


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Provider store={store}> <App/> </Provider>);
