import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Dummy from './Dummy';

const Data = require('./Data.json');
class AlbumList extends Component {
    state = { albums: [] };
    
    componentWillMount() {
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
    }
    
    renderAlbums() {
        return this.state.albums.map(album =>
           
            <Dummy key={album.title} album={album} />
        );
    }
    
    render() {
         return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
         );
    }
}

export default AlbumList;
