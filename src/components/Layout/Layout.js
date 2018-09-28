import React from 'react'

import Aux from '../../hoc/Auxiliary'

const layout = (props) => (
    //adjacent jsx elements
    //per risolvere l'errore o ritorniamo un array e diamo ad ogni elemento una chiave
    //oppure si può creare un auxiliary higher order component (consigliato)
    //come alternativa si potrebbe wrappare tutto con un <div> di cui non abbiamo però bisogno. 
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout