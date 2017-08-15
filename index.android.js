import React, {Component} from 'react';
import {
    View,
    AppRegistry
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
    	<View>
        	<Header headerText={'Albuns!'}/>
        	<AlbumList/>
        </View>
    )
};

//renderiza o componente
AppRegistry.registerComponent('IFSPReactNative', () => App);