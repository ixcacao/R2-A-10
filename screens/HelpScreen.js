import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, 
  ImageBackground, } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function HelpScreen() {
  return (
	<View style={styles.container} >
		<Text>Add instructions to be used !</Text>
		<Text>Attribution: </Text>
		<Text>Icon made by Those Icons from www.flaticon.com</Text>
	</View>	 
  );
}
HelpScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
	margin: 30,
  },
 welcomeImage: {
    width: 100,
    height: 10,
    resizeMode: 'stretch',
    marginTop: 3,
    marginLeft: -10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'yellow',
    lineHeight: 24,
    textAlign: 'center',
  },
});
