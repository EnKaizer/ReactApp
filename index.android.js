import React, {Component} from 'react';
import {
    View,
    AppRegistry
} from 'react-native';
import Header from './src/components/header';

const App = () => {
    return (
        <View>
            <Header/>
        </View>
    )
};

//renderiza o componente
AppRegistry.registerComponent('IFSPReactNative', () => App);