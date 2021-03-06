import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = props => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={props.onPress} style={buttonStyle}>
			<Text style={textStyle}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		width: null,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aaf',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aaf',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
});

export default Button;
