import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faBook as BookIcon} from "@fortawesome/free-solid-svg-icons";

const Navigation = () =>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><Icon icon={BookIcon} inverse size="lg"/></Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#authors">Authors</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>;

export default Navigation;
