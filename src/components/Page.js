import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {connect} from "react-redux";

import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import BookTable from "./BookTable";
import BookDetail from "./BookDetail";
import PlusMinus from "./PlusMinus";

import {counterDown, counterUp} from "../actions/counterActions";
import {selectBook} from "../reducers/books";
import {selectCounter} from "../reducers/counter";


const Page = ({selectBook, counter, counterUp, counterDown}) => {
    return (
        <Router>
            <Container>
                <Navigation/>
                <br/>
                <h1>Books</h1>
                <Container>
                    <PlusMinus plus={() => counterUp()} minus={() => counterDown()}/>
                    &nbsp;
                    Counter: {counter}
                </Container>
                <p/>
                <Container>
                    <Route exact={true} path="/" component={BookTable}/>
                    <Route path="/books/:bookId" render={({match}) => {
                        // noinspection JSUnresolvedVariable
                        const bookId = Number.parseInt(match.params.bookId);
                        return (
                            <BookDetail book={selectBook(bookId)}/>
                        )
                    }}/>
                </Container>
            </Container>
        </Router>
    );
};

export default connect(state => ({
    selectBook: bookId => selectBook(state, bookId),
    counter: selectCounter(state)
}), {
    counterUp,
    counterDown
})(Page);
