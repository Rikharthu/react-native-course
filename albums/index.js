// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList';

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText="Albums" />
		<AlbumList />
	</View>
);

AppRegistry.registerComponent('albums', () => App);
