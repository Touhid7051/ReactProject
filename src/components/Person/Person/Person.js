import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';




const person = (props) => {
    console.log('[Person.js] rendering');
    return (
        <Fragment>

            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!  </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </Fragment>
    )

};

export default person;