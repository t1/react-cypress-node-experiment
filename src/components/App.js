import React from "react";
import {connect} from "react-redux";

import Page from "./Page";

const App = props => (
    <Page books={props.books} counter={props.counter}/>
);

export default connect(state => ({
    books: state.books,
    counter: state.counter
}))(App);
