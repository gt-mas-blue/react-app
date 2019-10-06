import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DealItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  }
});

export default DealItem;
