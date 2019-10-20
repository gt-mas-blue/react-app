import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import DealItem from '../components/DealItem';
import DealInput from '../components/DealInput';



export default function FeedScreen() {
  const dict1 = {
    title: "Dummy Post 1",
    description: "Dumm Description 1",
    author: "Nish",
  };
  const dict2 = {
    title: "Dummy Post 2",
    description: "Dummy Description 2",
    author: "Nish",
  };
  const deal1 = {key: Math.random().toString(), value: dict1};
  const deal2 = {key: Math.random().toString(), value: dict2};

  const [deals, setDeals] = useState([deal1, deal2]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addDealHandler = (dealTitle) => {
    setDeals(currentDeals => [
      ...currentDeals,
      { key: Math.random().toString(), value: dealTitle }
    ]);
    setIsAddMode(false);
  };

  const cancelButtonHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
          <Text style={styles.searchTitle}>
            Search
          </Text>
       </View>
       <View style={{padding: 5}}>
       </View>

      <DealInput
        visible={isAddMode}
        onAddDeal={addDealHandler}
        onCancel={cancelButtonHandler}
      />

      <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={deals}
          renderItem={itemData =>
            <DealItem

              author={itemData.item.value.author}
              title={itemData.item.value.title}
              desc={itemData.item.value.description}
            />
          }
          ItemSeparatorComponent={() => <Text>  </Text>}
      />

      <Button title="New Post" onPress={() => setIsAddMode(true)} />

    </View>
  );
}

FeedScreen.navigationOptions = {
  title: 'Feed',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    width: 355,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 5,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,1)"
  },
  searchTitle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 18
  }
});
