import React from "react";

import Container from "react-bootstrap/Container";
import PersonTable from "./PersonTable";
import Navigation from "./Navigation";

export default class Page extends React.Component {
    render() {
        return (
            <Container>
                <Navigation/>
                <React.StrictMode>
                    <PersonTable/>
                </React.StrictMode>
            </Container>
        );
    }
}
