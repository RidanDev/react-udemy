import React, { Component } from 'react'

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    //uso direttamente state {} ed evito questa parte sotto 
    //
    //constructor(props) {
    //    super(props)
    //    this.state = { ... }
    //}

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder