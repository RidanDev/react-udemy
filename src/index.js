import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import App from './App'; //the .js extension is omitted
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'

const store = createStore(reducer)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)

//The App component defined in the App.js file
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
