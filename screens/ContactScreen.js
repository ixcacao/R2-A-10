import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

export default function ContactScreen() {
  return (

    <ScrollView style={styles.container}>
	
    </ScrollView>

  );
}

ContactScreen.navigationOptions = {
  title: 'Input',
};
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  repImg: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },

   welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  getStartedText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },

});
