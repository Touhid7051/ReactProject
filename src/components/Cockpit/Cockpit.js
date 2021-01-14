import React,{ useEffect } from 'react';
import classes from './Cockpit.css';
const Cockpit = (props) => {
        useEffect(
          () => {
          // Update the document title using the browser API
          console.log('[Cockpit.js] useEffect');
          //Http request...
          setTimeout(
            ()=>{
              alert('Saved data to cloud');
            },1000);
          return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
          };
        },[]); //we can use many useEffects for different components like [props.persons] and set timeouts
        
        useEffect(
          ()=>{
            console.log('[Cockpit.js] 2nd useEffect');
            return () => {
              console.log('[Cockpit.js] cleanup work in 2nd useEffect');
            };
          });
        
        
          let btnClass='';
          if(props.showPersons){
              btnClass=classes.Red;
        }
          let assignedClasses = [];
              if(props.personsLength <=2){
                assignedClasses.push(classes.red); //classes =['red']
              }

              if(props.personsLength <=1){
                assignedClasses.push(classes.bold); //classes= ['red',bold]
              }

          return(
                <div className={classes.Cockpit}>
                  <h1>{props.title}</h1>
                  <p className={assignedClasses.join(' ')}>This is working</p>
                  <button className={btnClass}
                  onClick={props.clicked}>
                  Toggle Persons
                  </button>
                  </div>
          );
}

export default React.memo(Cockpit);