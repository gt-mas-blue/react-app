import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { AsyncStorage } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import axios from 'axios';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      email_valid: true,
      password: '',
      error_msg: '',
      showLoading: false,
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('credentials').then((value) => {
      if (value) {
        let credentials = JSON.parse(value);
        this.setState({
          email: credentials.email,
          password: credentials.password
        });
      }
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  submitLoginCredentials() {
    const { email, password } = this.state;
    this.setState({
      showLoading: true
    });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", Constants.SERVER_URL + "/api/users/login");
    xhr.setRequestHeader("Content-Type", "application/json")
    var self = this
    xhr.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE) {
        self.setState({
          showLoading: false
        });
        var json = JSON.parse(this.response)
        if(json.success && json.success == true) {
          AsyncStorage.setItem('credentials', JSON.stringify({email: email, password: password}));
          self.props.navigation.navigate('App');
        } else {
          self.setState({
            error_msg: "Login error"
          })
        }
      }
    }
    // agra.meha@gmail.com password2
    xhr.send(JSON.stringify({"email": email, "password": password}))
  }

  render() {
    const { email, password, email_valid, error_msg, showLoading } = this.state;

  return (
    <View style={styles.container}>
        <View style={styles.loginView}>
          <View style={styles.loginTitle}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.travelText}>Food</Text>
            </View>
            <View style={{ marginTop: -10 }}>
              <Text style={styles.travelText}>Finder</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.errorText}>{error_msg}</Text>
            </View>
          </View>
          <View style={styles.loginInput}>
            <Input
              leftIcon={
                <Icon
                  name="user-o"
                  type="font-awesome"
                  color="rgba(171, 189, 219, 1)"
                  size={25}
                />
              }
              containerStyle={{ marginVertical: 10 }}
              onChangeText={email => this.setState({ email })}
              value={email}
              inputStyle={{ marginLeft: 10, color: 'black' }}
              keyboardAppearance="light"
              placeholder="Email"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              ref={input => (this.emailInput = input)}
              onSubmitEditing={() => {
                this.setState({ email_valid: this.validateEmail(email) });
                this.passwordInput.focus();
              }}
              blurOnSubmit={false}
              placeholderTextColor="black"
              errorStyle={{ textAlign: 'center', fontSize: 12 }}
              errorMessage={
                email_valid ? null : 'Please enter a valid email address'
              }
            />
            <Input
              leftIcon={
                <Icon
                  name="lock"
                  type="font-awesome"
                  color="rgba(171, 189, 219, 1)"
                  size={25}
                />
              }
              containerStyle={{ marginVertical: 10 }}
              onChangeText={password => this.setState({ password })}
              value={password}
              inputStyle={{ marginLeft: 10, color: 'black' }}
              secureTextEntry={true}
              keyboardAppearance="light"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="done"
              ref={input => (this.passwordInput = input)}
              blurOnSubmit={true}
              placeholderTextColor="black"
            />
          </View>
          <Button
            title="LOG IN"
            activeOpacity={1}
            underlayColor="transparent"
            onPress={this.submitLoginCredentials.bind(this)}
            loading={showLoading}
            loadingProps={{ size: 'small', color: 'black' }}
            disabled={!email_valid || password.length < 8}
            buttonStyle={{
              height: 50,
              width: 250,
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: 'black',
              borderRadius: 30,
              marginLeft: 25,
            }}
            containerStyle={{ marginVertical: 10 }}
            titleStyle={{ fontWeight: 'bold', color: 'black' }}
          />
          <View style={styles.footerView}>
            <Text style={{ color: 'grey' }}>New here?</Text>
            <Button
              title="Create an Account"
              type="clear"
              activeOpacity={0.5}
              titleStyle={{ color: 'black', fontSize: 15 }}
              containerStyle={{ marginTop: -10 }}
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
        </View>
    </View>

  )}
          }

  LoginScreen.navigationOptions = {
    title: 'Login Page',
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    marginTop: 150,
    backgroundColor: 'transparent',
    width: 300,
    height: 400,
    marginLeft: 50,
    justifyContent: 'center',
  },
  loginTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'bold',
  },
  errorText: {
    color: 'red'
  },
  plusText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'regular',
  },
  loginInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
