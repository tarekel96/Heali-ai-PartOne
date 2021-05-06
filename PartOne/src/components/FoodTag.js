import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const FoodTag = ({ tag = 'SPICE_HERB' }) => {
	return (
		<View style={styles.tagView}>
			<Text style={styles.tagText}>{tag}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	tagView: {
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		height: 30,
		backgroundColor: 'darkgreen',
		borderRadius: 50,
		marginBottom: 5,
		marginRight: 5,
		maxWidth: 60
	},
	tagText: {
		color: 'white',
		fontSize: 8,
		padding: 10
	}
});
