import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import Page from "./components/Page";
import {createStore} from "redux";
import rootReducer from "./redux/reducers";

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <Page/>
    </Provider>,
    document.getElementById('root')
);
