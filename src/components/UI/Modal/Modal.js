import React, { Component } from 'react'

import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    /*
    Essendo OrderSummary istanziato all'interno di Modal,
    viene fatto chiamare il rendering di OrderSummary ogni
    volta che viene aggiunto un ingradiente (quindi quando effettivamente
    l'OrderModal non è visibile). Per ottimizzare l'app utilizziamo
    shouldComponentUpdate per decidere quando chiamare il render
    di OrderSummary (ossia solo quando viene premuto il bottone dell'ordine).
    */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
            || nextProps.children !== this.props.children
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal