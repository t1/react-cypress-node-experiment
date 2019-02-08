import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import BookTable from "./BookTable";
import BookDetail from "./BookDetail";
import {receiveBooksAction} from "../redux/actions";

class Page extends React.Component {
    componentDidMount() {
        fetch("http://localhost:8080/books")
            .then(res => res.json())
            .then(books => this.props.receiveBooksAction(books))
    }

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

export default connect(state => ({books: state.books}), {receiveBooksAction})(Page);
