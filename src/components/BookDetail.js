import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

class BookDetail extends React.Component {
    render() {
        // noinspection JSUnresolvedVariable
        const book = this.props.book;
        return (
            book ? (
                <Container>
                    <Link to="/">
                        <h3>&lt;</h3>
                    </Link>
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
