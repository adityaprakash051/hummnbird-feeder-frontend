import React, { Component } from 'react';

import { StyleSheet, Text, View,Button } from 'react-native';

 class HomeScreen extends React.component{
    render(){
        return(
            <View>
                <Text>HomeScreen page </Text>>
                <Button onPress = { () =>
                    this.props.navigation.navigate['LoginScreen']} 
                    title="login page"/>
            </View>

        );
    }
}
export default HomeScreen;
