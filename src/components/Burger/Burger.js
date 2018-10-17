import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    /*a way to transform an object of key value pairs into an array
      of burger ingredients where the value of that object is important 
      for me to decide how many ingredients I need and the key is 
      important for which type of ingredient I need  

      1. Object.keys si occupa di estrarre solo le chiavi di ingredients
      quindi solo le stringhe e non i valori (quantità di ingredienti) e
      ne ritorna l'array.

      2. map itera su ogni ingredient key (igKey)
      
      3. [...Array(n)] genera un array di n elementi undefined,
      quindi genero per ogni elemento in ingredients un array con n elementi
      dove n è il numero degli ingredienti

      4. map(_, i) mi disinteresso dell'elemento quindi lascio blank il primo
      argomento ma lavoro sull'indice i
    
      5. genero un array di JSX dove setto una key formata da nomeingrediente + i
      e il type con il nome dell'ingrediente
      
      6. reduce() creo un solo array che contiene tutti i valori invece che un array
      di array
    */
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger 