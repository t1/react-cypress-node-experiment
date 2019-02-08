import React from "react";

import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faBook as BookIcon} from '@fortawesome/free-solid-svg-icons'

import Container from "react-bootstrap/Container";
import PersonTable from "./personTable";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";

class Navigation extends React.Component {
    render() {
        return (
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
            </Navbar>
        );
    }
}

export default class Page extends React.Component {
    render() {
        return (
            <Container>
                <Navigation/>
                <PersonTable/>
            </Container>
        );
    }
}
