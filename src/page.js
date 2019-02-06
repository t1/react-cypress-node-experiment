import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook as BookIcon} from '@fortawesome/free-solid-svg-icons'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import {Data} from "./data";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><FontAwesomeIcon icon={BookIcon} inverse size="lg"/></Navbar.Brand>
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

export class Page extends React.Component {
    render() {
        return (
            <Container>
                <Navigation/>
                <h1>The Title</h1>
                <Row>
                    <Col><Alert variant="primary">This is a primary alert</Alert></Col>
                    <Col><Alert variant="secondary">This is a secondary alert</Alert></Col>
                    <Col><Alert variant="success">This is a success alert</Alert></Col>
                </Row>
                <Row>
                    <Col><Alert variant="dark">This is a dark alert</Alert></Col>
                    <Col><Alert variant="info">This is a info alert</Alert></Col>
                </Row>

                <Data/>
            </Container>
        );
    }
}
