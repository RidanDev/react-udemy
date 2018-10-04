import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App'; //the .js extension is omitted
import registerServiceWorker from './registerServiceWorker';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

//The App component defined in the App.js file
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
