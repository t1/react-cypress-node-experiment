import React from "react";
import {connect} from "react-redux";
import Table from "react-bootstrap/Table";

import BookTableItem from "./BookTableItem";
import {selectBooks} from "../reducers/books";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

const BookTable = ({books}) =>
    <Container>
        {books.isFetching
            ?
            <ProgressBar animated now={100}/>
            :
            <Table size="sm">
                <tbody>
                {books.items.map((book) =>
                    <BookTableItem book={book} key={book.id}/>
                )}
                </tbody>
            </Table>}
        <small>last update: {books.lastUpdated ? books.lastUpdated.toLocaleString() : "?"}</small>
    </Container>;

export default connect(state => ({books: selectBooks(state)}))(BookTable);
