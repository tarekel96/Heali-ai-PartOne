import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const FoodItem = ({ item = 'Food Item' }) => {
	return (
		<SafeAreaView style={styles.itemView}>
			<Text style={styles.itemText}>{item}</Text>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	itemView: {
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		width: '90%'
	},
	itemText: {
		color: 'grey',
		fontSize: 20,
		padding: 4
	}
});
