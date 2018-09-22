import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //the .js extension is omitted
import registerServiceWorker from './registerServiceWorker';

//The App component defined in the App.js file
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
