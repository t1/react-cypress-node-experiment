import React from "react";
import {connect} from "react-redux";

import {decAction, incAction} from "../redux/actions";
import Link from "react-router-dom/es/Link";
import {PlusMinus} from "./PlusMinus";

class BookItem extends React.Component {
    render() {
        // noinspection JSUnresolvedVariable
        const book = this.props.book;
        return (
            <tr>
                <td>{book.id}</td>
                <td>
                    <PlusMinus plus={() => this.props.incAction(book.id)} minus={() => this.props.decAction(book.id)}/>
                    &nbsp;
                    {book.author}
                </td>
                <td>
                    <Link to={'/books/' + book.id}>{book.title}</Link>
                </td>
            </tr>
        )
    }
}

export default connect(null, {
    incAction,
    decAction
})(BookItem);
