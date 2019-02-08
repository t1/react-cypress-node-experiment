import React from "react";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";

import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faMinus as MinusIcon, faPlus as PlusIcon} from "@fortawesome/free-solid-svg-icons";

import {decAction, incAction} from "../redux/actions";

class Person extends React.Component {
    render() {
        // noinspection JSUnresolvedVariable
        const person = this.props.person;
        const firstNameColSpan = person.lastName ? undefined : 2;
        return (
            <tr>
                <td>{person.id}</td>
                <td colSpan={firstNameColSpan}>
                    <Button onClick={() => this.props.incAction(person.id)}><Icon icon={PlusIcon} size="xs"/></Button>
                    &nbsp;
                    <Button onClick={() => this.props.decAction(person.id)}><Icon icon={MinusIcon} size="xs"/></Button>
                    &nbsp;
                    {person.firstName}
                </td>
                {person.lastName &&
                <td>{person.lastName}</td>
                }
                <td>{person.userName}</td>
            </tr>
        )
    }
}

export default connect(null, {
    incAction,
    decAction
})(Person);
