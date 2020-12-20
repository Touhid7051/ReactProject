import './App.css';
import React,{Component, createElement} from 'react';
import Person from './Person/Person' ;

class App extends Component{
  state ={
    persons :[
      {name:'tou' , age: 27},
      {name:'Rafi' , age: 27},
      {name:'Rajeeb' , age: 27},
    ],
    otherState: 'some value',
    showPersons: false,
  }

  switchNameHandler =(newName) => {
    //console.log('Clicked');
    //DON'Do THIS: this.state.persons[0].name = 'Touhid';
    this.setState({
      persons :[
        {name:newName , age: 27},
        {name:'Rappee' , age: 29},
        {name:'Rajeebaa' , age: 23},
      ],

    })
  }

nameChangedHandler = (event) =>{
  this.setState({
    persons :[
      {name:'Touhid' , age: 27},
      {name:event.target.value , age: 29},
      {name:'Rajeebaa' , age: 25},
    ],

  })

}
togglePersonsHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}


  render(){
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if(this.state.showPersons){

      persons =(
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Touhuu!')}
            changed={this.nameChangedHandler}>Hobbies: Racing </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
    }

    return(
      <div className ="App" >
        <h1>HI</h1>
        <p>This is working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler.bind(this,'Meem')}>
        Toggle Persons
        </button>
        {persons}
    {// this.state.showPersons === true ?
      // : null
        }
      </div>
    );
  // return React.createElement('div' , {className :"App"} ,React.createElement('h1' , null ,'hello' ));
  }
}

export default App;



