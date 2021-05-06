import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, View } from 'react-native';
import { FoodTag } from './FoodTag';

const renderItem = ({ item, index }) => <FoodTag tag={item} key={index} />;
export const FoodItem = ({ item = 'Food Item', tags = {} }) => {
	let tagsArray = [];
	Object.keys(tags).map((key) => {
		tagsArray.push(tags[key]['tag']);
	});
	console.log(tagsArray.length);
	return (
		<View style={styles.itemView}>
			<Text style={styles.itemText}>{item}</Text>
			<View>
				<FlatList
					numColumns={3}
					contentContainerStyle={styles.flatList}
					data={tagsArray}
					renderItem={renderItem}
				/>
			</View>
		</View>
	);
};

const testData = [ 'hello', 'bob', 'bye' ];

const styles = StyleSheet.create({
	flatList: { flexDirection: 'column' },
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
