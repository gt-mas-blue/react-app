import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const DealItem = props => {
  return (

    <View style={styles.listItem}>
      <Text style={styles.Title}>Title</Text>
      <View style={styles.Restaurant}>
        <Text>Restaurant</Text>
        <Text>Price</Text>
      </View>
      <Text>Description:</Text>
      <View style={{backgroundColor: 'gray'}}>
        <Text>{props.title}</Text>
      </View>
      <Text style={{textAlign: 'right'}}>Posted by Nish</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  Title: {
    fontSize: 40
  },
  Restaurant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold'
  },
});

export default DealItem;
