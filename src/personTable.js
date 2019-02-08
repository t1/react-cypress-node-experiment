import React from "react";
import Table from "react-bootstrap/Table";
import {connect} from "react-redux";
import Person from "./person";

class PersonTable extends React.Component {
    render() {
        return (
            <Table bordered size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                {this.props.persons.map((person) =>
                    <Person person={person} key={person.id}/>)
                }
                </tbody>
            </Table>
        );
    }
}

export default connect(state => ({persons: state.persons}))(PersonTable);
