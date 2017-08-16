import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import _ from 'underscore';


const AlbumDetail = (props) => {
	return(
		<View>
			<Text>{props.album.title}</Text>
		</View>
		)
};

export default AlbumDetail