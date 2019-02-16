import React from "react";
import {connect} from "react-redux";
import Route from "react-router-dom/es/Route";
import Container from "react-bootstrap/Container";

import BookTable from "./BookTable";
import BookDetail from "./BookDetail";

import {selectBook} from "../reducers/books";
import {BrowserRouter as Router} from "react-router-dom";

const Body = ({selectBook}) =>
    <Router>
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
    </Router>;

export default connect(state => ({
    selectBook: bookId => selectBook(state, bookId),
}))(Body);
