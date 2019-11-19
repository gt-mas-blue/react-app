import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert,
  AsyncStorage
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios'

const DealInput = props => {
  src = "../assets/images/cardImage2.png";

  const dict = {
    title: "",
    description: "",
    author: "Nish",
    img: "../assets/images/cardImage2.png",
    obj_num: null
  };

  const [enteredDeal, setEnteredDeal] = useState(dict);

  const titleHandler = (enteredText) => {
    var newDict = {
      title: enteredText,
      description: enteredDeal.description,
      author: enteredDeal.author,
      img: enteredDeal.img,
      obj_num: null
      };
    setEnteredDeal(newDict);
  };

  const dealInputHandler = (enteredText) => {
    var newDict = {
      title: enteredDeal.title,
      description: enteredText,
      author: enteredDeal.author,
      img: enteredDeal.img,
      obj_num: null
      };
    setEnteredDeal(newDict);
  };

   onChooseImagePress = async () => {
    Permissions.askAsync(Permissions.CAMERA)
    Permissions.askAsync(Permissions.CAMERA_ROLL)
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: true,
      exif: true,

    })
    //
    // todo: Upload the image, passback the mongoID, store mongoID in field img:
    var newDict = {
      title: enteredDeal.title,
      description: enteredDeal.description,
      author: enteredDeal.author,
      img: result.base64,
      obj_num: null
      };
    ret = axios.post("https://foodfinderapi.herokuapp.com/Images/", {filepath: result.uri});

    if (!result.cancelled) {
      Alert.alert("Success");

    } else {
      Alert.alert("Error!")
    }

    setEnteredDeal(newDict);
  }

  const addDealHandler = () => {
    props.onAddDeal(enteredDeal);
    // this should be able to work
    axios.post("https://foodfinderapi.herokuapp.com/Posts/", {
      username: AsyncStorage.getItem('username'),
      postTitle: enteredDeal.title,
      description: enteredDeal.description,
      likes: 0,
      imgPointer: enteredDeal.img
    }).then(function (response) {console.log(response);});
    console.log(enteredDeal);
    setEnteredDeal(dict);
  };

  const cancelButtonHandler = () => {
    props.onCancel()
    setEnteredDeal(dict);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
        <Button
          title="Choose Photo"
          onPress={this.onChooseImagePress}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: enteredDeal.img}}
        />
        <TextInput
          placeholder="Title"
          placeholderTextColor = "#000"
          style={styles.input}
          onChangeText={titleHandler}
          value={enteredDeal.title}
        />
        <TextInput
          placeholder="Description/Deal"
          placeholderTextColor = "#000"
          style={styles.input}
          onChangeText={dealInputHandler}
          value={enteredDeal.description}
        />
        <View style={styles.buttons}>
          <Button title="Post" onPress={addDealHandler} />
          <Button title="Cancel" color="red" onPress={cancelButtonHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#000000",
    borderWidth: 4
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});

DealInput.navigationOptions = {
  title: 'New Post',
};

export default DealInput;
