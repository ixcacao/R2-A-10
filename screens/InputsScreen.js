import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class InputsScreen extends Component {
  render(){
  const {navigate} = this.props.navigation;
  return (

	<View style={styles.container}>
		<Text style={styles.texts}>This is where the list of inputs will appear (under construction)</Text>
		<TouchableOpacity onPress={() => navigate('Input')}>
					  <Text style={styles.buttonText}>Add Input</Text>
		</TouchableOpacity>
	</View>	 
	
  );
  }
}
InputsScreen.navigationOptions = {
  title: 'Inputs',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  buttonText: {
    padding: 10,
	color: 'white',
	marginLeft: 80,
	marginRight: 80,
	marginBottom: 13,
	marginTop: 35,
	backgroundColor: 'black',
	alignItems: 'center',
    textAlign: 'center',
	borderRadius: 30,
	fontSize: 25,	
    fontFamily: 'Lato-Bold',
  },
	texts: {
	margin: 30,	
  },
});
