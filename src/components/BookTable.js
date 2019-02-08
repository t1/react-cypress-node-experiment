import React from "react";
import Table from "react-bootstrap/Table";
import {connect} from "react-redux";

import Book from "./BookItem";

class BookTable extends React.Component {
    render() {
        return (
            <Table bordered size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Author</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {this.props.books.map((book) =>
                    <Book book={book} key={book.id}/>)
                }
                </tbody>
            </Table>
        );
    }
}

export default connect(state => ({books: state.books}))(BookTable);
