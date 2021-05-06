import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { FoodTag } from './src/components/FoodTag';
import { FoodItem } from './src/components/FoodItem';

// Helper function to format the input data.
const formatData = (data) =>
	Object.entries(data).map(([ key, { text, tags = {} } ]) => ({
		text,
		key: key.toLowerCase(),
		tags: Object.entries(tags).map(([ tag, val ]) => ({ tag, val }))
	}));

const data = formatData(require('./assets/data/database.json'));

const renderItem = ({ item, index }) => <FoodItem item={item.text} tags={item.tags} key={`Food Item: ${index}`} />;
const App = () => {
	const [ query, setQuery ] = useState('');
	const handleOnChangeText = (val) => {
		setQuery(val);
	};

	const filteredResults = query ? data.filter((item) => item.key.startsWith(query.toLowerCase())) : data;
	return (
		<View>
			<Header />
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Search..."
					value={query}
					onChangeText={handleOnChangeText}
				/>
			</View>
			<View style={styles.itemsContainer}>
				<FlatList data={filteredResults} renderItem={renderItem} />
			</View>
		</View>
	);
};

const Header = ({ heading = 'Browse Food' }) => {
	return (
		<SafeAreaView>
			<View style={styles.headerView}>
				<Text style={styles.headerText}>{heading}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	headerView: {
		marginTop: '5%',
		justifyContent: 'center',
		marginLeft: '10%'
	},
	headerText: {
		color: 'forestgreen',
		fontSize: 30,
		fontWeight: '700'
	},
	itemsContainer: {
		alignItems: 'center'
	},
	inputView: {
		marginLeft: '10%',
		marginBottom: '2%'
	},
	inputText: {
		width: '90%',
		height: 40,
		borderColor: 'lightgrey',
		borderWidth: 1,
		padding: 5
	}
});

export default App;
