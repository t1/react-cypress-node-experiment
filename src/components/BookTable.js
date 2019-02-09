import React from "react";
import Table from "react-bootstrap/Table";
import {connect} from "react-redux";

import BookItem from "./BookItem";

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
                {this.props.books
                    ? this.props.books.map((book) =>
                        <BookItem book={book} key={book.id}/>
                    ) : (
                        <tr><td colSpan={3}><h4>Loading...</h4></td></tr>
                    )
                }
                </tbody>
            </Table>
        );
    }
}

export default connect(state => ({books: state.books}))(BookTable);
