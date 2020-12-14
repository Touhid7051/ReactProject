import './App.css';
import React,{Component, createElement} from 'react';
import Person from './Person/Person' ;

class App extends Component{


  render(){
    return(
      <div className ="App" >
        <h1>HI</h1>
        <p>This is working</p>
        <Person name="Touhid" age="17"/>
        <Person name="Rafi" age="27">Hobbies: Racing </Person>
        <Person name="Rajeeb" age="37"/>
      </div>
    );
  // return React.createElement('div' , {className :"App"} ,React.createElement('h1' , null ,'hello' ));
  }
}

export default App;
