import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	renderItem(library) {
		return <ListItem library={library.item} />;
	}

	render() {
		console.log('Rendering, props=', this.props);
		return (
			<FlatList
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtractor={library => library.id}
			/>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	// Object that is returned from here will be shown to the component as 'props'
	return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
