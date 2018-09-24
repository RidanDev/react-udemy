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
    otherState: 'some other value',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() { //the method called to render something to the screen.
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      //Il codice qui dentro è JSX (javascript) non HTML! React si occupa di tradurre.
      //ciascun tag <Person> è un'istanza del component person.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    
    //Il codice sotto è equivalente al JSX definito sopra.
    /*return React.createElement('div', {className: 'App'}, 
      React.createElement('h1', null, 'Hi, I\'m a React App!!!'));*/
  }
}

export default App;
