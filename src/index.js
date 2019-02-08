import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import Page from "./components/Page";
import store from "./redux/store";


ReactDOM.render(
    <Provider store={store}>
        <Page/>
    </Provider>,
    document.getElementById('root')
);
