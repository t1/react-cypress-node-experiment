import React from "react";
import {connect} from "react-redux";

import Container from "react-bootstrap/Container";

import Navigation from "./Navigation";
import PlusMinus from "./PlusMinus";
import Body from "./Body";

import {counterDown, counterUp} from "../actions/counterActions";
import {selectCounter} from "../reducers/counter";

const Page = () =>
    <Container>
        <Navigation/>
        <br/>
        <h1>Books</h1>
        <Counter/>
        <p/>
        <Body/>
    </Container>;

export default Page;

const Counter = connect(state => ({
    counter: selectCounter(state)
}), {
    counterUp,
    counterDown
})(({counter, counterUp, counterDown}) =>
    <Container>
        <PlusMinus id="counter-buttons" plus={() => counterUp()} minus={() => counterDown()}/>
        &nbsp;
        Counter: <span id="counter">{counter}</span>
    </Container>
);
