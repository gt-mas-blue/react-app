import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal
} from 'react-native';


const DealInput = props => {

  const [enteredDeal, setEnteredDeal] = useState('');
  const title = "Moe Mondays";
  const restaurant = "Moes";
  const price = "$$";


  const dealInputHandler = (enteredText) => {
    setEnteredDeal(enteredText);
  };

  const addDealHandler = () => {

    props.onAddDeal(enteredDeal);
    setEnteredDeal('');
  };

  const cancelButtonHandler = () => {
    props.onCancel()
    setEnteredDeal('');
  }


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          style={styles.input}
        />
        <TextInput
          placeholder="Restaurant"
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          style={styles.input}
        />

        <TextInput
          placeholder="Description/Deal"
          style={styles.input}
          onChangeText = {dealInputHandler}
          value={enteredDeal}
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
