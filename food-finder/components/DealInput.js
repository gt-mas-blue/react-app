import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const DealInput = props => {
  const dict = {
    title: "",
    description: "",
    author: "Nish",
    img: "../assets/images/cardImage2.png",
  };

  const [enteredDeal, setEnteredDeal] = useState(dict);

  const titleHandler = (enteredText) => {
    var newDict = {
      title: enteredText,
      description: enteredDeal.description,
      author: enteredDeal.author,
      img: enteredDeal.img,
      };
    setEnteredDeal(newDict);
    console.log(enteredDeal);
  };

  const dealInputHandler = (enteredText) => {
    var newDict = {
      title: enteredDeal.title,
      description: enteredText,
      author: enteredDeal.author,
      img: enteredDeal.img,
      };
    setEnteredDeal(newDict);
    console.log(enteredDeal);
  };

  onChooseImagePress = async () => {
    Permissions.askAsync(Permissions.CAMERA)
    Permissions.askAsync(Permissions.CAMERA_ROLL)
    let result = await ImagePicker.launchCameraAsync();
    var newDict = {
      title: enteredDeal.title,
      description: enteredDeal.description,
      author: enteredDeal.author,
      img: result.uri,
      };
    setEnteredDeal(newDict);

    // let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    // var ref = firebase.storage().ref().child("images/" + imageName);
    // return ref.put(blob);
  }

  const addDealHandler = () => {
    props.onAddDeal(enteredDeal);
    setEnteredDeal(dict);
  };

  const cancelButtonHandler = () => {
    props.onCancel()
    setEnteredDeal(dict);
  }
  
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
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
        <Button
          title="Choose Photo"
          onPress={this.onChooseImagePress}
          />
        <Image
          source={{uri: dict.img}}
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
