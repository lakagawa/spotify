import React from 'react';
import Home from './Home/Home.js';
import Logo from './Components/Logo/Logo.js';
import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <section className='container'> 
                <Logo/>
                <Home/>
            </section>
        )
    }
}