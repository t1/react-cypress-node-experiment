import React from "react";
import Route from "react-router-dom/es/Route";
import Container from "react-bootstrap/Container";

import BookTable from "./BookTable";
import BookDetail from "./BookDetail";

import {BrowserRouter as Router} from "react-router-dom";

// noinspection JSUnresolvedVariable
const Body = () =>
    <Router>
        <Container>
            <Route exact={true} path="/" component={BookTable}/>
            <Route path="/books/:bookId" render={({match}) =>
                <BookDetail bookId={match.params.bookId}/>
            }/>
        </Container>
    </Router>;

export default Body;
