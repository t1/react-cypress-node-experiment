import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import BookTable from "./BookTable";
import BookDetail from "./BookDetail";

class Page extends React.Component {
    render() {
        return (
            <Router>
                <Container>
                    <Navigation/>
                    <Route exact={true} path="/" component={BookTable}/>
                    <Route path="/books/:bookId" render={({match}) => {
                        // noinspection JSUnresolvedVariable
                        const bookId = Number.parseInt(match.params.bookId);
                        return (
                            <BookDetail book={this.props.books.find(b => b.id === bookId)}/>
                        )
                    }}/>
                </Container>
            </Router>
        );
    }
}

export default connect(state => ({books: state.books}))(Page);
