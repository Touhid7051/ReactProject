import classes from './App.css';
import React,{Component} from 'react';
import Persons from '../components/Person/Persons' ;
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state ={
    persons :[
      {id:'001',name:'tou' , age: 27},
      {id:'002',name:'Rafi' , age: 27},
      {id:'003',name:'Rajeeb' , age: 27},
    ],
    otherState: 'some value',
    showPersons: false,
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  
  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  //componentWillMount(){
    //console.log('[App.js] componentWillMount');
  //}
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
    console.log('[App.js] render');

    let persons = null;
    if(this.state.showPersons){

      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return(
      
      <div className ={classes.App} >
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
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
