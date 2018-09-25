//Creo il component Person
import React from 'react';
import Radium from 'radium';
//è possibile importare codice css dentro file javascript grazie a webpack
import './Person.css'; 

//The definition of the person component as a function.
//l'argomento props mi permette di accedere ai campi delle istanze del componente "person".
const person = (props) => {    
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    ) 
};

export default Radium(person);