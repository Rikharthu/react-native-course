import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({
	label,
	value,
	placeholder,
	onChangeText,
	secureTextEntry
}) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCapitalize={'none'}
				placeholder={placeholder}
				autoCorrect={false}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		height: 40,
		width: 200,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		color: '#000',
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export { Input };
