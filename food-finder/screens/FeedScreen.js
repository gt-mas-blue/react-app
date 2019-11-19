import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList } from 'react-native';
import FeedView from '../components/Feed';
import DealInput from '../components/DealInput';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export default class FeedScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
      isLoading: true,
      error_msg: "",
      isAddMode: false,
      setIsAddMode: false
    };
  }

  componentWillMount() {
    this.setState({
      isLoading: true
    });
    var self = this;
    axios.get("https://foodfinderapi.herokuapp.com/Posts/yes").then(res => {
      self.setState({
        isLoading: false
      });
      if(res.data) {
        self.setState({
          posts: res.data
        })
      } else {
        self.setState({
          error_msg: "Login error"
        })
      }
    })
  }
  addDeal = () => {
    this.setState({
      isAddMode: true
    })
  }
  addDealHandler = (dealTitle) => {
    this.setState({
      isAddMode: false
    })
  };
  
  cancelButtonHandler = () => {
    this.setState({
      isAddMode: false
    })
  };
  render (){
    if (this.state.isLoading) return <Text />;
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
        visible={this.state.isAddMode}
        onAddDeal={this.addDealHandler}
        onCancel={this.cancelButtonHandler}
      />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <FeedView
            posts={this.state.posts}
            props={this.props}
          />

        </ScrollView>

        <Button title="New Post" onPress={this.addDeal} />

    </View>
    )}
}



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
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15
  }
});
navigationOptions = {
  title: 'Feed',
  headerStyle: {
    backgroundColor: '#FF0000'
  },
  headerTintColor: '#fff'
};
