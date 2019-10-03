import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { ExpoLinksView } from '@expo/samples';


export default function FeedScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <FeedLinksView /> 

      <ExpoLinksView />
    </ScrollView>
  );
}

export class FeedLinksView extends React.Component {
  render() {
    return (
      <View>
      <Text style={styles.feedText}>{post1}</Text>
      </View>
    );
  }
}


FeedScreen.navigationOptions = {
  title: 'Feed',
};

const post1 = "Post 1";
const post2 = "Post 2";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  feedText: {
    fontSize: 15,
    marginTop: 1,
  },
});
