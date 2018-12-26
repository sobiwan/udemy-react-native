/** @format */


//Import Library to Help Create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () => (
    <View style={{ flex: 1 }}>
     <Header headerText={'Albums'} />
     <AlbumList />
    </View>
);
// import App from './App';
// import { name as appName } from './app.json';

//Render Component to the device
AppRegistry.registerComponent('albums', () => App);
// AppRegistry.registerComponent(appName, () => App);
