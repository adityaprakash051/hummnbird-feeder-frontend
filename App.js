import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'

import HomeScreen from './Screens/HomeScreen'


export default class App extends React.Component {
  render() {
    return (      
      <AppNavigator/>
    );
  }
  
}
const AppNavigator= createStackNavigator({
  
  HomeScreen: { screen : HomeScreen }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
