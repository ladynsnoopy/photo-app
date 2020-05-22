import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

ReactDOM.render(<Header />,document.getElementById('app'));

