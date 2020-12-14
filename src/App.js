import './App.css';
import React,{Component, createElement} from 'react';

class App extends Component{


  render(){
   // return(
   //   <div className ="App" >
   //     <h1>HI</h1>
   //   </div>
   // );
   return React.createElement('div' , {className :"App"} ,React.createElement('h1' , null ,'hello' ));
  }
}

export default App;
