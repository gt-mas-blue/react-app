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
  const [deals, setDeals] = useState([]);
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
      <Button title="New Post" onPress={() => setIsAddMode(true)} />


      <DealInput
        visible={isAddMode}
        onAddDeal={addDealHandler}
        onCancel={cancelButtonHandler}
        />

      <FlatList
        data={deals}
        renderItem={itemData => <DealItem title={itemData.item.value} />}
      />
    </View>
  );
}

FeedScreen.navigationOptions = {
  title: 'Feed',
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
