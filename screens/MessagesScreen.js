import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function MessagesScreen() {
  return (
    <ScrollView style={styles.container}>
	  <View style={styles.welcomeContainer}>
        <Image
            source={
              __DEV__
                ? require('../assets/images/doodle.png')
                : require('../assets/images/doodle.png')
            }
            style={styles.welcomeImage}
          />
		</View>
    </ScrollView>
  );
}

MessagesScreen.navigationOptions = {
  title: 'Messages',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
