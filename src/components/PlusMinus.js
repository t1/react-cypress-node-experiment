import React from "react";
import Badge from "react-bootstrap/Badge";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faMinus as MinusIcon, faPlus as PlusIcon} from "@fortawesome/free-solid-svg-icons";

export class PlusMinus extends React.Component {
    render() {
        return (
            <span>
            <Badge variant="secondary" onClick={() => this.props.plus()}><Icon icon={PlusIcon} size="xs"/></Badge>
                &nbsp;
                <Badge variant="secondary" onClick={() => this.props.minus()}><Icon icon={MinusIcon} size="xs"/></Badge>
            </span>
        )
    }
}
