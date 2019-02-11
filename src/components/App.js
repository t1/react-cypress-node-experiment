import React from "react";
import {connect} from "react-redux";
import {booksReceive} from "../actions/actions";
import Page from "./Page";

class App extends React.Component {
    componentDidMount() {
        fetch("http://localhost:8080/books")
            .then(res => res.json(), err => console.error("error while fetching books:", err))
            .then(books => { if (books) this.props.booksReceive(books)})
    }

    render() {
        return (
            <Page books={this.props.books} counter={this.props.counter}/>);
    }
}

export default connect(state => ({
    books: state.books,
    counter: state.counter
}), {booksReceive})(App);
