import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	// initialize state
	state = { albums: [] };

	componentDidMount() {
		axios
			.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => {
				console.log(response);
				this.setState(() => ({
					albums: response.data
				}));
			})
			.catch(error => console.log(error));
	}

	renderAlbums() {
		return this.state.albums.map(album => (
			<AlbumDetail key={album.title} album={album} />
		));
	}

	render() {
		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

export default AlbumList;
