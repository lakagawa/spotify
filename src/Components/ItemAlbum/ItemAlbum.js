import React from 'react';
import './ItemAlbum.css';
import 'typeface-roboto';

export default class ItemAlbum extends React.Component {
    render() {
        return (
            <div className='box'>
                <img></img>
                <span className='label_smaller white'>{ this.props.item.albumTitle }</span>
                <span className='label_smaller dark_white'>{ this.props.item.albumSubtitle }</span>
            </div>
        )
    }
}
