import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import {faAngleLeft as AngleLeftIcon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class BookDetail extends React.Component {
    render() {
        // noinspection JSUnresolvedVariable
        const book = this.props.book;
        return (
            book ? (
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/"><Icon icon={AngleLeftIcon} size="xs"/>Back To List</Breadcrumb.Item>
                    </Breadcrumb>
                    <h3>{book.author}: {book.title}</h3>
                    <small>ID:{book.id}</small>
                </Container>
            ) : (
                <h3>Unknown Book</h3>
            )
        )
    }
}

export default connect()(BookDetail);
