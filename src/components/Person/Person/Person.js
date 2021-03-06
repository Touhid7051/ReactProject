import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from "../../../hoc/withClass";




const Person = (props) => {
    console.log('[Person.js] rendering');
    return (
        <Aux>

            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!  </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </Aux>
    )

};

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func,
};

export default withClass (Person, classes.Person);