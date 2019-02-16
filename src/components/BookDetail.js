import React from "react";

import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import {faAngleLeft as AngleLeftIcon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import Link from "react-router-dom/es/Link";
import {connect} from "react-redux";
import {selectBook} from "../reducers/books";

const BookDetail = ({selectBook, bookId}) => {
    const book = selectBook(Number.parseInt(bookId));
    return book ?
        <Container>
            <Breadcrumb>
                <Link to="/" role="button">
                    <Icon icon={AngleLeftIcon} size="xs"/>
                    &nbsp;
                    Back To List
                </Link>
            </Breadcrumb>
            <h3>{book.author}: {book.title}</h3>
            <small>ID:{book.id}</small>
        </Container>
        :
        <h3>Unknown Book</h3>;
};


export default connect(state => ({
    selectBook: bookId => selectBook(state, bookId),
}))(BookDetail);
