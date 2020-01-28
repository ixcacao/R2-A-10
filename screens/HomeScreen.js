import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
  Button,
  AppRegistry,
  BackHandler,
} from 'react-native';


import * as Font from 'expo-font';
import { MonoText } from '../components/StyledText';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



AppRegistry.registerComponent('projectTARA', () => 'App');
export default class Homescreen extends Component {
  render(){
  const {navigate} = this.props.navigation;
  return (
  
    <View style={styles.container}>	 
		<ImageBackground source={require('../assets/images/bgHome.png')} style={{width: '100%', height: '100%'}}>
			<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={() => navigate('Inputs')}>
				  <Text style={styles.buttonText}>Inputs</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigate('Help')}>
				  <Text style={styles.buttonText}>Help</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => BackHandler.exitApp()} >
				  <Text style={styles.buttonText}>Exit</Text>
			</TouchableOpacity>
			</View>
		</ImageBackground>
	  
    </View>
  );
  }
}



Font.loadAsync({
  'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
  'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
	   flex: 1,
	   justifyContent: 'center',
  },
	buttonText: {
    padding: 10,
	color: '#e0bb53',
	marginLeft: 70,
	marginRight: 70,
	marginBottom: 13,
	backgroundColor: 'white',
	alignItems: 'center',
    textAlign: 'center',
	borderRadius: 20,
	fontSize: 25,	
    fontFamily: 'Lato-Bold',
  },

});
