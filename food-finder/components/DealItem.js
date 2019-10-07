import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const DealItem = props => {
  console.log(props.title);
  return (

    <View style={styles.listItem}>
      <Text style={styles.Title}>Title</Text>
      <View style={styles.Restaurant}>
        <Text>Restaurant</Text>
        <Text>Price</Text>
      </View>
      <View>
        <Text>{props.desc}</Text>
        <Text style={{color: 'blue'}}>Like</Text>
      </View>
      <Text style={{textAlign: 'right'}}>Posted by Nish</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,

  },
  Title: {
    fontSize: 40,
  },

  Restaurant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold'
  },
});

export default DealItem;
