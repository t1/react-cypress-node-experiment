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
import {selectBooks} from "../reducers/books";
import {selectCounter} from "../reducers/counter";


const Page = ({books, counter, counterUp, counterDown}) => {
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
                            <BookDetail book={books.find(b => b.id === bookId)}/>
                        )
                    }}/>
                </Container>
            </Container>
        </Router>
    );
};

export default connect(state => ({
    books: selectBooks(state),
    counter: selectCounter(state)
}), {
    counterUp,
    counterDown
})(Page);
