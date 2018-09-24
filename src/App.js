import React, { Component } from 'react'; //responsible for rendering anything to the dom.
import './App.css';
import Person from './Person/Person'; //importo Person per poterlo richiamare nel render

//The definition of the App component as a class.
class App extends Component {
  state = {
    persons: [
      {id: "asdfa", name: 'Max', age: 28},
      {id: "gsojk", name: 'Manu', age: 29},
      {id: "òjdfv", name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    //trovo l'indice dell'oggetto person con id === a quello in input
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    
    //prelevo l'oggetto person con indice === a personIndex
    const person = {
      //uso lo spread operator per poter scomporre l'oggetto in posizione
      //personIndex dell'array persons. Quindi sarebbe equivalente a:
      //const person = {id:..., name:..., age:...}
      ...this.state.persons[personIndex] 
    }

    //aggiorno il nome con il valore inserito da input type text
    person.name = event.target.value; 

    //mi salvo una copia dell'array state.persons
    const persons = [...this.state.persons]; 

    //salvo nell'array-copia il nuovo oggetto person con nome mutato
    persons[personIndex] = person;  

    //aggiorno l'array reale (in state.person) con i nuovi valori del'array-copia
    this.setState({persons: persons}); 
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
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
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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
  }
}

export default App;
