import React from 'react';
import './Home.css';
import Search from '../Components/Search/Search.js';
import ItemAlbum from '../Components/ItemAlbum/ItemAlbum.js';
import 'typeface-roboto';
import '../commonStyle.css';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recentlySearched: [
                { id: 1, albumTitle: 'Title', albumSubtitle: 'subtitle'},
                { id: 2, albumTitle: 'Title I', albumSubtitle: 'subtitle I'},
                { id: 3, albumTitle: 'Title II', albumSubtitle: 'subtitle II'},
                { id: 1, albumTitle: 'Title', albumSubtitle: 'subtitle'},
                { id: 2, albumTitle: 'Title I', albumSubtitle: 'subtitle I'},
                { id: 1, albumTitle: 'Title', albumSubtitle: 'subtitle'},
                { id: 2, albumTitle: 'Title I', albumSubtitle: 'subtitle I'},
                { id: 3, albumTitle: 'Title II', albumSubtitle: 'subtitle II'},
                { id: 1, albumTitle: 'Title', albumSubtitle: 'subtitle'},
                { id: 2, albumTitle: 'Title I', albumSubtitle: 'subtitle I'}
            ],
            resultsFromSearch : [
                { id: 1, albumTitle: 'Result I', albumSubtitle: 'subtitle'},
                { id: 1, albumTitle: 'Result I', albumSubtitle: 'subtitle'},
                { id: 1, albumTitle: 'Result I', albumSubtitle: 'subtitle'},
                { id: 1, albumTitle: 'Result I', albumSubtitle: 'subtitle'},
                { id: 1, albumTitle: 'Result I', albumSubtitle: 'subtitle'}
            ]
        }
    }

    render() {
        return (
            <div>
                <section id='header'>
                    <h2 className='label_smaller gray'>Busque por artistas, álbuns ou músicas</h2>
                    <Search />
                </section>
                <section id='recently_searched'>
                <span className='label_subtitle dark_white'>Álbuns buscados recentemente</span>
                    <div id='container_results'>
                        {
                            this.state.recentlySearched.map((item, key) =>
                                <ItemAlbum item={item} key={key} />
                            )
                        }
                    </div>
                </section>
            </div>
        )
    }
}