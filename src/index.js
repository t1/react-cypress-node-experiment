import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from "./components/App";
import {createStore} from "redux";
import rootReducer from "./reducers";

// noinspection JSUnresolvedVariable
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
    <Provider store={createStore(rootReducer, devToolsEnhancer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
