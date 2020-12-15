import './App.css';
import React,{Component, createElement} from 'react';
import Person from './Person/Person' ;

class App extends Component{
  state ={
    persons :[
      {name:'tou' , age: 27},
      {name:'Rafi' , age: 27},
      {name:'Rajeeb' , age: 27},
    ]
  }

  render(){
    return(
      <div className ="App" >
        <h1>HI</h1>
        <p>This is working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  // return React.createElement('div' , {className :"App"} ,React.createElement('h1' , null ,'hello' ));
  }
}

export default App;
