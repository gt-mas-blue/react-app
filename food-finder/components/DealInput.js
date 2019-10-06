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
          placeholder="Add Deal"
          style={styles.input}
          onChangeText = {dealInputHandler}
          value={enteredDeal}
          />
        <View style={styles.buttons}>
          <Button title="ADD" onPress={addDealHandler} />
          <Button title="CANCEL" color="red" onPress={cancelButtonHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    padding: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});


export default DealInput;
