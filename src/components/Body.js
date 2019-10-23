import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Container from "react-bootstrap/Container";

import BookTable from "./BookTable";
import BookDetail from "./BookDetail";

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
