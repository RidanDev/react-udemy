import React, { Component } from 'react'; //responsible for rendering anything to the dom.
import './App.css';
import Person from './Person/Person'; //importo Person per poterlo richiamare nel render

//The definition of the App component as a class.
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName, newAge) => {
    //console.log('Was clicked');
    this.setState( {
      persons: [
        { name: newName, age: 28}, //changed
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: newAge} //changed
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ]
    })
    
  }

  render() { //the method called to render something to the screen.
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    };

    return (
      //Il codice qui dentro è JSX (javascript) non HTML! React si occupa di tradurre.
      //ciascun tag <Person> è un'istanza del component person.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.switchNameHandler.bind(this, 'Maximilian', 18)}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!', 18)}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    
    //Il codice sotto è equivalente al JSX definito sopra.
    /*return React.createElement('div', {className: 'App'}, 
      React.createElement('h1', null, 'Hi, I\'m a React App!!!'));*/
  }
}

export default App;
