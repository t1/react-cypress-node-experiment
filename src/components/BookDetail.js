import React from "react";

import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import {faAngleLeft as AngleLeftIcon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import Link from "react-router-dom/es/Link";
import {connect} from "react-redux";
import {selectBook} from "../reducers/book";

const BookDetail = ({selectBook, bookId}) => {
    const book = selectBook(Number.parseInt(bookId));
    return <Container>
        <Breadcrumb>
            <Link to="/" role="button">
                <Icon icon={AngleLeftIcon} size="xs"/>
                &nbsp;
                Back To List
            </Link>
        </Breadcrumb>
        <BookData book={book}/>
    </Container>;
};

const BookData = ({book}) => {
    if (!book) {
        return <h3>?</h3>
    } else if (book.isFetching) {
        return <h3>Loading...</h3>
    } else if (book.data) {
        return <Container>
            <h3>{book.data.author}: {book.data.title}</h3>
            {book.data.recommendedReadingAge ?
                <Container>Recommended reading age: {book.data.recommendedReadingAge}+</Container>
                :
                <Container>No recommended reading age</Container>
            }
            <br/>
            <small>ID:{book.data.id}</small>
        </Container>
    } else {
        return <h3>Unknown Book</h3>
    }
};

export default connect(state => ({
    selectBook: bookId => selectBook(state, bookId),
}))(BookDetail);
