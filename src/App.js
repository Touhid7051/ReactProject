import './App.css';
import React,{Component, createElement} from 'react';
import Person from './Person/Person' ;


class App extends Component{
  state ={
    persons :[
      {id:'001',name:'tou' , age: 27},
      {id:'002',name:'Rafi' , age: 27},
      {id:'003',name:'Rajeeb' , age: 27},
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

nameChangedHandler = (event ,id ) =>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  });
  const person = {
     ...this.state.persons[personIndex]
  };
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({
    persons : persons
    })

}

deletePersonHandler = (personIndex)=>{
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons})

}

togglePersonsHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}


  render(){
    

    let persons = null;
    if(this.state.showPersons){

      persons =(
        <div>
        {this.state.persons.map((person,index) => {
          return <Person 
                    click = {() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event , person.id)} />    
        })}
          
        </div>

      );
      //style.backgroundColor = 'red';
      //style[':hover']={
      //      backgroundColor:'salmon',
      //      color: 'black',
      //}
    }

    let classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }

    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return(
      
      <div className ="App" >
        <h1>HI</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button className="button"
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



