import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import { FoodItem } from './src/components/FoodItem';

// Helper function to format the input data.
const formatData = (data) =>
	Object.entries(data).map(([ key, { text, tags = {} } ]) => ({
		text,
		key: key.toLowerCase(),
		tags: Object.entries(tags).map(([ tag, val ]) => ({ tag, val }))
	}));

const data = formatData(require('./assets/data/database.json'));

const App = () => {
	return (
		<SafeAreaView>
			<Header />

			{/* 	<View style={styles.itemsContainer}>
				<FoodItem />
			</View> */}
		</SafeAreaView>
	);
};

const Header = ({ heading = 'Browse Food' }) => {
	return (
		<SafeAreaView style={styles.headerView}>
			<View>
				<Text style={styles.headerText}>{heading}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	headerView: {
		marginTop: '5%',
		justifyContent: 'center',
		marginLeft: '5%'
	},
	headerText: {
		color: 'forestgreen',
		fontSize: 30,
		fontWeight: '700'
	},
	itemsContainer: {
		alignItems: 'center'
	}
});

export default App;
// let practiceData = {
// 	abelmosk: {
// 		text: 'abelmosk',
// 		tags: {
// 			SPICE_HERB: 1
// 		}
// 	},
// 	absintheWormwood: {
// 		text: 'absinthe wormwood',
// 		tags: {
// 			SPICE_HERB: 1
// 		}
// 	}
// };
// console.log(formatData(practiceData));

// console.log(convertJSONArrObj(practiceData));
// console.log(convertJSONArrObj(practiceData).length);
// const convertJSONArrObj = (obj) => {
// 	let objectArray = [];
// 	Object.keys(obj).forEach((k) => {
// 		let newObj = {};
// 		let subObj = {};
// 		let text = '';
// 		Object.keys(obj[k]).forEach((item) => {
// 			if (obj[k][item] !== undefined) {
// 				if (typeof obj[k][item] === 'object') {
// 					subObj = obj[k][item];
// 				}
// 				else if (typeof obj[k][item] === 'string') {
// 					text = obj[k][item];
// 				}
// 			}
// 			newObj = {
// 				text,
// 				tags: subObj
// 			};
// 			objectArray.push(newObj);
// 		});
// 	});
// 	let filtererOjectArray = objectArray.filter((element, index) => {
// 		return index % 2 !== 0;
// 	});
// 	return filtererOjectArray;
// };
