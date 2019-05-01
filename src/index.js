import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/Root/Root.js';
import configureStore from './configureStore'
import './index.css';


const store = configureStore();
ReactDom.render(<Root store={store} />, document.getElementById('app'));