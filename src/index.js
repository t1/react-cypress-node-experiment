import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import Page from "./components/Page";
import {createStore} from "redux";
import rootReducer from "./redux/reducers";

// noinspection JSUnresolvedVariable
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
    <Provider store={createStore(rootReducer, devToolsEnhancer)}>
        <Page/>
    </Provider>,
    document.getElementById('root')
);
