import React from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faMinus as MinusIcon, faPlus as PlusIcon} from "@fortawesome/free-solid-svg-icons";

const PlusMinus = ({plus, minus}) =>
    <ButtonGroup size="sm">
        <Button variant="secondary" onClick={plus}><Icon icon={PlusIcon} size="sm"/></Button>
        <Button variant="secondary" onClick={minus}><Icon icon={MinusIcon} size="sm"/></Button>
    </ButtonGroup>;

export default PlusMinus;
