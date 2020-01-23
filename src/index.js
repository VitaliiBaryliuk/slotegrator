import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import './css/init.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>   
, document.getElementById('root'));

serviceWorker.unregister();
