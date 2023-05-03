import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Products from './Products';

ReactDOM.render(
    <App products={Products()}/>,
    document.getElementById('root')
);