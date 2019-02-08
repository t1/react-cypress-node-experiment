import React from "react";

import Container from "react-bootstrap/Container";
import Books from "./BookTable";
import Navigation from "./Navigation";

export default class Page extends React.Component {
    render() {
        return (
            <Container>
                <Navigation/>
                <React.StrictMode>
                    <Books/>
                </React.StrictMode>
            </Container>
        );
    }
}
