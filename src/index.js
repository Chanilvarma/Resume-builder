import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
    ,
    document.getElementById('root'))