import React ,{Component} from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';

class HomeScreen extends Component{

    static navigationOption={
        header:null
    }
    render(){        
        return(
            <View style={{flex:1}}>
            
                <ImageBackground
                 source={require('../Images/1.jpeg')}
                 style={{flex:1}}
                >
            <View style={{flex: 1,alignItems: 'center',
                          justifyContent: 'center'}}>
                <View>
                    <Text style={{fontSize: 35}}>hummnbird feeder</Text>
                    <Text>learn.teach.by choice</Text>
                </View>
            </View>

        </ImageBackground>        
      </View>
        )
    }

}
export default HomeScreen;
/*
 <Button>Sign up</Button><Button>Register</Button>,Button
 */
