import React, {Component} from 'react';
import {View} from 'react-native';
import _ from 'underscore';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
	state = {albuns : []};
	
	componentWillMount = () => {
		fetch('https://rallycoding.herokuapp.com/api/music_albums').then(value => 
			value.json().then(dataAlbuns => this.setState({albuns: dataAlbuns}))
		)
	}

	renderAlbums(){
	return	_.map(this.state.albuns, album => <AlbumDetail key={album.title} album={album}/>)
	}


	render() {
		console.log(this.state);
		return (
			<View>
				{this.renderAlbums()}
			</View>
		)
	}
}

export default AlbumList;