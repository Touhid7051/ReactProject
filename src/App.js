import './App.css';
import React,{ useState } from 'react';
import Person from './Person/Person' ;


const App =props=> {
  const [personsState,setPersonsState] = useState({
      persons :[
        {name:'tou' , age: 27},
        {name:'Rafi' , age: 27},
        {name:'Rajeeb' , age: 27},
      ],
      otherState: 'some value'
  });


 const switchNameHandler =() => {
    //console.log('Clicked');
    //DON'Do THIS: personsState.persons[0].name = 'Touhid';
    setPersonsState({
      persons :[
        {name:'touhid' , age: 27},
        {name:'Rappee' , age: 29},
        {name:'Rajeebaa' , age: 23},
      ],
  
    });
  };

    return(
      <div className ="App" >
        <h1>HI</h1>
        <p>This is working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  // return React.createElement('div' , {className :"App"} ,React.createElement('h1' , null ,'hello' ));
  };


export default App;




