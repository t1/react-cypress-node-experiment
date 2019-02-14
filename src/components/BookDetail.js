import React from "react";

import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import {faAngleLeft as AngleLeftIcon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import Link from "react-router-dom/es/Link";

const BookDetail = ({book}) => {
    return (
        book ? (
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={'/'}>
                            <Icon icon={AngleLeftIcon} size="xs"/>
                            Back To List
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h3>{book.author}: {book.title}</h3>
                <small>ID:{book.id}</small>
            </Container>
        ) : (
            <h3>Unknown Book</h3>
        )
    )
};

export default BookDetail;
