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


      <DealInput
        visible={isAddMode}
        onAddDeal={addDealHandler}
        onCancel={cancelButtonHandler}
      />

      <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={deals}
          renderItem={itemData => <DealItem
            desc={itemData.item.value}
            />}
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
  materialButtonDark: {
    width: 100,
    height: 36,
    alignSelf: "center"
  }
});
