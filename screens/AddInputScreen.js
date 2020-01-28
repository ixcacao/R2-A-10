import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Image, TextInput, Text, TouchableOpacity,} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { openDatabase } from 'react-native-sqlite-storage';
export default class Homescreen extends Component {
  render(){
  const {navigate} = this.props.navigation;
  return (
    <ScrollView style={styles.container}>
	  <View style={styles.articleContainer}>
		  <Text style={styles.texts}>Input Title </Text> 
		  <TextInput style={styles.inputField}/>
		  <Text style={styles.texts}>Input Area </Text> 
		  <Image
				source={
				  __DEV__
					? require('../assets/images/map.jpg')
					: require('../assets/images/map.jpg')
				}
				style={styles.map}
			  />
			  <TouchableOpacity onPress={() => navigate('Inputs')}>
					  <Text style={styles.buttonText}>Add Input >></Text>
			  </TouchableOpacity>
		</View>
    </ScrollView>
  );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#fff',
  },
  inputField: {
	  height: 40, 
	  borderColor: 'gray', 
	  borderWidth: 1,
	  margin: 15,
	  },
  texts: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    margin: 25,
	height: 300,
	width: 500, 
    backgroundColor: '#fff',
  },
  buttonText: {
    padding: 10,
	color: 'white',
	marginLeft: 180,
	marginRight: 20,
	marginBottom: 90,
	marginTop: 35,
	backgroundColor: 'black',
	alignItems: 'center',
    textAlign: 'center',
	borderRadius: 30,
	fontSize: 18,	
    fontFamily: 'Lato-Bold',
  },
});
