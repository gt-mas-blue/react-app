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
    title: "Atwoods",
    description: "Atwoods is having a deal of 50% off two topping pizzas every Tuesday",
    author: "Nish",
    img: "../assets/images/pizza.png",
  };
  const dict2 = {
    title: "Moe Monday",
    description: "Moe Monday offers a deal of any burrito for just $7 plus tax!",
    author: "Nish",
    img: "../assets/images/pizza.png",
  };
  
  const deal1 = {key: Math.random().toString(), value: dict1};
  const deal2 = {key: Math.random().toString(), value: dict2};

  const [deals, setDeals] = useState([deal1, deal2]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addDealHandler = (dealTitle) => {
    setDeals(currentDeals => [{ key: Math.random().toString(), value: dealTitle }, ...currentDeals]);
    setIsAddMode(false);
  };

  const cancelButtonHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
          <TextInput
            placeholder="Search"
            style={styles.searchTitle}/>

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
              img={itemData.item.value.img}
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
    width: 350,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    alignSelf: "center"
  },
  searchTitle: {
    color: "#000",
    padding: 5,
    fontSize: 18,

    alignItems: "center"
  }
});
