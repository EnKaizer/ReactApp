import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import _ from 'underscore';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';


const AlbumDetail = ({album}) => {
	const {title, artist, thumbnail_image, image, url} = album;
	const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageAlbumStyle} = styles;
    return (
        <Card>
            <CardSection>
	            <View style={thumbnailContainerStyle}>
	            	<Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
	            </View>
	            <View style={headerContentStyle}>
	            	<Text style={headerTextStyle}>{title}</Text>
	            	<Text style={headerTextStyle}>{artist}</Text>
	            </View>
            </CardSection>
            
            <CardSection>
            	<Image style={imageAlbumStyle} source={{uri: image}}/>
            </CardSection>

            <CardSection>
            	<Button onPress={() => Linking.openURL(url)}>
            		Buy Now, {title} Album!!!
            	</Button>
            </CardSection>
        </Card>
    )
};


const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle:{
		fontSize: 18
	},
	thumbnailStyle:{
		height: 50,
		width: 50
	},
	thumbnailContainerStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageAlbumStyle:{
		height: 300,
		width: null,
		flex: 1
	}
}

export default AlbumDetail;