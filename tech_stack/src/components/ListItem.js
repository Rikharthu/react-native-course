import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	NativeModules,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// More info: https://facebook.github.io/react-native/docs/animations.html#layoutanimation
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	onPress() {
		const { id } = this.props.library;
		this.props.selectLibrary(id);
	}

	renderDescription() {
		const { library, expanded } = this.props;
		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>{library.description}</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		const { title } = this.props.library;

		return (
			<TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	titleStyle: {
		color: 'black',
		fontSize: 18,
		paddingLeft: 15
	}
});

const mapStateToProps = (state, ownProps) => {
	// ownProps - the props that are passed to the component we are making
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return {
		expanded
	};
};

export default connect(
	mapStateToProps,
	actions
)(ListItem);
