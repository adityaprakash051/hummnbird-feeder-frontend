import React, { Component } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'


export default class App extends React.Component {
  render() {
    return (<View style={styles.container}>
      <Text style={{ fontSize: 35, color:'#fff'}}>hummnbird</Text>
      <Button onPress={()=>
      this.props.navigation.navigate['HomeScreen']}title="HomePage"
      />
      <AppNavigator/>
    </View>
    );
  }
}

const AppNavigator=createStackNavigator({
  HomeScreen:{Screen:HomeScreen} ,
  LoginScreen:{Screen:LoginScreen}

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//0a4a5f
/*

      
*/