import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('http://192.168.10.10/albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}></AlbumDetail>
        );
    }

    render() {
        return(
            <ScrollView>
                { this. renderAlbums() }
            </ScrollView>
        )
    };
};

export default AlbumList;