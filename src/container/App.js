import React, { Component } from 'react' //responsible for rendering anything to the dom.

import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Auxiliary'
import withClass from '../hoc/withClass'

//The definition of the App component as a class.
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
  }
  state = {
    persons: [
      { id: "asdfa", name: 'Max', age: 28 },
      { id: "gsojk", name: 'Manu', age: 29 },
      { id: "òjdfv", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  nameChangedHandler = (event, id) => {
    //trovo l'indice dell'oggetto person con id === a quello in input
    const personIndex = this.state.persons.findIndex(p => {
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
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }

    });
  }

  render() { //the method called to render something to the screen.
    console.log('[App.js] Inside render()')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App)
