import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal
} from 'react-native';


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
      };
    setEnteredDeal(newDict);
    console.log(enteredDeal);
  };

  const dealInputHandler = (enteredText) => {
    var newDict = {
      title: enteredDeal.title,
      description: enteredText,
      author: enteredDeal.author,
      };
    setEnteredDeal(newDict);
    console.log(enteredDeal);
  };

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
          style={styles.input}
          onChangeText={titleHandler}
          value={enteredDeal.title}

        />

        <TextInput
          placeholder="Description/Deal"
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
