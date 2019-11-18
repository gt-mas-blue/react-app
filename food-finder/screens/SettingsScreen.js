import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import SettingsList from 'react-native-setting-list';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
  CheckRow
} from 'react-native-settings-page';
export default class SettingsScreen extends React.Component{
  
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }
  
  render() {
    return (
      <View style={{backgroundColor:'gray',flex:1}}>
        <View style={{flex:1, marginTop:50}}>
          <SettingsList>
            <SettingsList.Header headerText='First Grouping' headerStyle={{color:'white'}}/>
            <SettingsList.Item
              hasNavArrow={false}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasSwitch={true}
              title='Switch Example'/>
            <SettingsList.Header headerText='Login Information' headerStyle={{color:'white', marginTop:50}}/>
            <SettingsList.Item titleInfo='Some Information' hasNavArrow={false} title='Username'/>
            <SettingsList.Item titleInfo='Some Information' hasNavArrow={false} title='Password'/>
            <SettingsList.Item titleInfo='Some Information' hasNavArrow={false} title='Email'/>
          </SettingsList>
        </View>
      </View>
    );
  }
  
  onValueChange(value){
    this.setState({switchValue: value});
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  headerStyle: {
    backgroundColor: '#FF0000'
  },
  headerTintColor: '#fff'
};
