import React from "react";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";

import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faMinus as MinusIcon, faPlus as PlusIcon} from "@fortawesome/free-solid-svg-icons";

import {decAction, incAction} from "../redux/actions";

class BookItem extends React.Component {
    render() {
        // noinspection JSUnresolvedVariable
        const book = this.props.book;
        return (
            <tr>
                <td>{book.id}</td>
                <td>
                    <Button onClick={() => this.props.incAction(book.id)}><Icon icon={PlusIcon} size="xs"/></Button>
                    &nbsp;
                    <Button onClick={() => this.props.decAction(book.id)}><Icon icon={MinusIcon} size="xs"/></Button>
                    &nbsp;
                    {book.author}
                </td>
                <td>{book.title}</td>
            </tr>
        )
    }
}

export default connect(null, {
    incAction,
    decAction
})(BookItem);
