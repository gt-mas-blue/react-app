import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import { AsyncStorage } from 'react-native';

export default class ProfileScreen extends Component {
  logout() {
    AsyncStorage.removeItem('username').then((value) => {
      this.props.navigation.navigate('Auth')
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../assets/images/sample-guy.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Nishant Sethunath</Text>
              <Text style={styles.info}>Avid Cook / Healthy Vegan</Text>
              <Text style={styles.description}>I am a Georgia Tech student and love computer science. I am a mobile app developer and I love cooking cheap, healthy food in my free time. </Text>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Photos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Button
                  title="Log Out"
                  color="#FFFFFF"
                  onPress={() => this.logout()}
                />
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}
ProfileScreen.navigationOptions = {
  title: 'Profile',
};


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#EB0B0B",
    height:200,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 68,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:40
  },
  name:{
    fontSize:24,
    color:"#000000",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    padding:10,
  },
  info:{
    fontSize:16,
    color: "#FF5858",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#000000",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#EB0B0B",
  },
  buttonText: {
    color:"#FFFFFF"
  }
});
