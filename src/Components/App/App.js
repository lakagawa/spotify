import React from 'react';
import qs from 'qs';
import axios from 'axios';
import { connect } from 'react-redux'

import Home from '../Home/Home.js';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.spotifyAuthorizeBaseUrl  =  'https://accounts.spotify.com/authorize?';
        this.authorize = {
            client_id: '68cf307b492c412ebed9fcd6d53e0ea4',
            response_type: 'token',
            redirect_uri: 'http://localhost:8080/',
            scope: ['playlist-read-private'].join(' '),
        };
        this.state = {
          token: ''
        }
    }
    

  componentDidMount() {
    const { dynamicUrlChange, ownProps, page, item } = this.props
    const query = qs.parse(String(window.location).split('#').pop().replace('?', ''));
    console.log(query);
    this.setState({token: query.access_token}, function () {
      console.log(this.state.token);
      if (this.state.token) {
        // dispatch token
        console.log('ok');
        
      } else {
        window.location = this.getSpotifyAuthorizeUrl()
      }
    });
  }

  getSpotifyAuthorizeUrl () {
    const query = qs.stringify(this.authorize);
    return `${this.spotifyAuthorizeBaseUrl}${query}`;
  }

    render() {
        return (
            <section className='container'> 
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                {/* <Home/> */}
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	let { item, page, spotifyApp, token } = state
	// 2-way binding with rr-v4.
	// @item: Get the item from the search bar, if none, take it from the url, '' as fallback.
	page = ownProps.match.params.page || page	
	item = item || ownProps.match.params.item || ''

	// Change of url on change of search bar: programaticall url change.
	let dynamicUrlChange = ownProps.history.push

	const {
		isFetching,
		items: itemData
	} = spotifyApp[item] || {
		isFetching: true,
		items: []
	}

	return {
		page,
		item,
		itemData,
		isFetching,
		dynamicUrlChange,
		ownProps,
		token
	}
}


export default connect(mapStateToProps)(App)