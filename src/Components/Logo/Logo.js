import React from 'react';
import './Logo.css';

import logo from '../../Assets/spotify_green.png'

export default class Logo extends React.Component {
    render() {
        return (
            <div className='logo_div'>
                <img src={logo} alt="Logo" className='logo' />
            </div>
        );
    }
}