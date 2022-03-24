import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Header} from './components';

ReactDOM.render(
  <Router>
    <Header/>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
