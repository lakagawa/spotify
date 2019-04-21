import React from 'react';
import 'typeface-roboto';
import '../../commonStyle.css';

export default class Search extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }

    handleChange(event){
        this.setState({search: event.target.value});
    }

    searchItem(e){
        e.preventDefault();
        console.log(this.state.search);
    }

    render(){
        return (
            <form onSubmit={this.searchItem}> 
                <input 
                    type='text' name='search' 
                    value={this.state.search} 
                    placeholder='Comece a escrever ...'
                    onChange={this.handleChange}
                    ></input>
            </form>
        );
    }    
}

