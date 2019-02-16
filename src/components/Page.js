import React from "react";
import {connect} from "react-redux";

import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import PlusMinus from "./PlusMinus";
import Body from "./Body";

import {counterDown, counterUp} from "../actions/counterActions";
import {selectCounter} from "../reducers/counter";

const Page = ({counter, counterUp, counterDown}) =>
    <Container>
        <Navigation/>
        <br/>
        <h1>Books</h1>
        <Container>
            <PlusMinus plus={() => counterUp()} minus={() => counterDown()}/>
            &nbsp;
            Counter: {counter}
        </Container>
        <p/>
        <Body/>
    </Container>;

export default connect(state => ({
    counter: selectCounter(state)
}), {
    counterUp,
    counterDown
})(Page);
