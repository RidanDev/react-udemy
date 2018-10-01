import React from 'react'

import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    //adjacent jsx elements
    //per risolvere l'errore o ritorniamo un array e diamo ad ogni elemento una chiave
    //oppure si può creare un auxiliary higher order component (consigliato)
    //come alternativa si potrebbe wrappare tutto con un <div> di cui non abbiamo però bisogno. 
    <Aux>
        <Toolbar /> 
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout