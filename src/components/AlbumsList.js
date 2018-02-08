import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import cuid from 'cuid';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount = () => {
        fetch('https://rallycoding.herokuapp.com/api/music_albums', { method: 'GET' })
            .then(response => response.json())
            .then((data) => {
                this.setState({ albums: data }, () => console.log(this.state));
            })
            .catch((err) => {
                console.log({ msg: 'Houston we have a problem!', error: err });
            })
    };

    handleClick() {

    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={cuid()} album={album} />
        );
    };

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
