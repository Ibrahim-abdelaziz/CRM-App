import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';


const app = (
        <BrowserRouter>
        <CssBaseline />
            <App />
        </BrowserRouter>)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
