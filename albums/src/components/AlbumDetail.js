import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => {
	const { title, artist, thumbnail_image, image } = props.album;
	const {
		thumbnailStyle,
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		subHeaderTextStyle,
		imageStyle
	} = styles;

	const openAlbumDetails = () => {
		Linking.openURL(props.album.url);
	};

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text style={subHeaderTextStyle}>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>
			<CardSection>
				<Button onPress={openAlbumDetails}>Buy Now</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18,
		color: '#000'
	},
	subHeaderTextStyle: {
		color: '#000'
	},
	thumbnailStyle: {
		width: 66,
		height: 58
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
