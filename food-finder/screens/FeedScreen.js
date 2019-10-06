import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList} from 'react-native';

export default function FeedScreen() {
  const [enteredDeal, setEnteredDeal] = useState('');
  const [deals, setDeals] = useState([]);

  const dealInputHandler = (enteredText) => {
    setEnteredDeal(enteredText);
  };

  const addDealHandler = () => {
    setDeals(currentDeals => [
      ...currentDeals,
      { key: Math.random().toString(), value: enteredDeal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Deal"
          style={styles.input}
          onChangeText = {dealInputHandler}
          value={enteredDeal}
          />
        <Button title="ADD" onPress={addDealHandler} />
      </View>
      <FlatList
      // keyExtractor function
        data={deals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

FeedScreen.navigationOptions = {
  title: 'Feed',
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  }
});
