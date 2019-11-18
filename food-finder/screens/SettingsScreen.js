import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
	CheckRow
} from 'react-native-settings-page';
export default class SettingsScreen extends React.Component{
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  render() {
    return(
      <ExpoConfigView></ExpoConfigView>
    )
  };
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  headerStyle: {
    backgroundColor: '#FF0000'
  },
  headerTintColor: '#fff'
};
