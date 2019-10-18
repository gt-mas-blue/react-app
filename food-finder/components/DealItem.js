import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const DealItem = props => {
  console.log(props.title);
  return (

    <View style={styles.listItem}>
      <Text style={styles.Title}>Moe Mondays</Text>
      <View style={styles.Restaurant}>
        <Text>Moes</Text>
        <Text>2/5</Text>
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
    width: 356,
    height: 206,
    borderColor: "#000000",
    borderWidth: 4

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
