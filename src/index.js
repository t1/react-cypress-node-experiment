import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import Page from "./components/Page";
import rootReducer from "./reducers";
import init from "./actions";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(init(store));

ReactDOM.render(
    <Provider store={store}>
        <Page/>
    </Provider>,
    document.getElementById('root')
);
