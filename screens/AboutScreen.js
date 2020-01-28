import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function AboutScreen() {
	return (
	<View style ={styles.container}>
		<ScrollView  
			style={styles.container} 
			contentContainerStyle={styles.contentContainer}>
			<View style ={styles.descriptionContainer}>
				<Text style={styles.caratsText}>CARATS</Text>  
				<Text style={styles.motto}>Excepteur sint occaeuiecat</Text>
				<Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Fusce id enim non augue pulvinar luctus. Mauris sollicitudin rhoncus tortor, 
				eget scelerisque enim ornare at. Maecenas maximus magna in eleifend accumsan.
				Duis posuere, risus volutpat dictum scelerisque, ante lectus molestie ipsum,
				et auctor ante orci vulputate dolor. Maecenas condimentum, ipsum at suscipit
				tristique, urna nunc dignissim massa, et feugiat ligula eros vel purus. </Text>
				<View style={styles.ceoContainer}>
				 <Image
					source={
					  __DEV__
						? require('../assets/images/ceoPlaceholder.jpg')
						: require('../assets/images/ceoPlaceholder.jpg')
					}
					style={styles.ceoImage}
				    />
					<View style={styles.ceoTextContainer}>
						<Text style={styles.caratsText}>
						Name Surname
						</Text>
						<Text style={styles.p}>
						Founder and CEO
						</Text>
					</View>
				</View>
			</View>
			<View style ={styles.mapContainer}>  
				<Text style={styles.motto}>Map goes here</Text>
			</View>
			<View style ={styles.addressContainer}>
				<Text style ={styles.addressText}> 711-2880 Nulla St.</Text>
				<Text style ={styles.addressText}> Mankato Mississippi</Text>
				<Text style ={styles.addressText}> 96522 (257) 563-7401</Text>
			</View>
				
			<View style ={styles.contactUsContainer}>
					<Text style ={styles.contactText}>GOT SOME QUESTIONS?    CONTACT US!</Text>
					<TextInput
						style={{height: 40, borderColor: 'orange', borderWidth: 1, margin: 10}}
						/>
					<TextInput
						style={{height: 200, borderColor: 'orange', borderWidth: 1, margin: 10}}
						/>
						<Button
               title = "SEND"
               color = "#edb036"  
			   />
			</View>
			<View style ={styles.reachUsContainer}> 
				<Text style ={styles.contactText}> REACH US THROUGH OUR SOCIAL MEDIA</Text>
				<View style ={styles.iconsContainer}>
				
         <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
				  <Image
					source={
					  __DEV__
						? require('../assets/images/igIcon.png')
						: require('../assets/images/igIcon.png')
					}
					style={styles.ImageIconStyle}
				    />
		
        </TouchableOpacity>
		<TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
         
				  <Image
					source={
					  __DEV__
						? require('../assets/images/fbIcon.png')
						: require('../assets/images/fbIcon.png')
					}
					style={styles.ImageIconStyle}
				    />
        </TouchableOpacity>
		<TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
         
				  <Image
					source={
					  __DEV__
						? require('../assets/images/twitterIcon.png')
						: require('../assets/images/twitterIcon.png')
					}
					style={styles.ImageIconStyle}
				    />
        </TouchableOpacity>
		<TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
         
				  <Image
					source={
					  __DEV__
						? require('../assets/images/googleIcon.png')
						: require('../assets/images/googleIcon.png')
					}
					style={styles.ImageIconStyle}
				    />
        </TouchableOpacity>
		</View> 
			</View>
		</ScrollView>
	</View>
	);
}

AboutScreen.navigationOptions = {
  title: 'About Us',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
	flexDirection: 'column',
  },
  contentContainer: {
    paddingTop: 10,
	 color: 'white',

    paddingVertical: 10,
    marginVertical: 5,
	  color: 'white',
	  
	
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: '#ffd07f',
	margin: 10,
  },
   ceoTextContainer: {
    flex: 1,
    backgroundColor: '#ffd07f',
	//margin: 10,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#ffb847',
	margin: 10,
  },
  addressContainer: {
    flex: 1,
    backgroundColor: 'grey',
	margin: 10,
  },
  contactUsContainer: {
    flex: 1,
    backgroundColor: '#e2e2e2', 
	margin: 10,
  }, 
  ceoContainer: {
    flex: 1,
	flexDirection: 'row',
    backgroundColor: '#ffd07f', 
	margin: 10,
  }, 
  reachUsContainer: {
    flex: 1, 
	margin: 10,
  },
  iconsContainer: {
    flex: 1,
	flexDirection: 'row', 
	margin: 10,
  },
  caratsText: {
	  padding: 10,
	  fontSize: 15,
	  fontFamily: 'Lato-Bold',
  },
  motto: {
	  padding:10,
	  fontSize: 45,
	  fontFamily: 'Lato-Light',
  },
  p: {
	  padding:10,
	  fontFamily: 'Lato-Light',
  },
  contactText: {
	  padding:10,
	  fontSize: 25,
	  fontFamily: 'Lato-Bold',
	  textAlign: 'center',
  },
  addressText: {
	  padding:10,
	  fontSize: 15,
	  fontFamily: 'Lato-Bold',
  },
  ImageIconStyle: {
    padding: 10,
    margin: 17,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  ceoImage: {
	margin: 10,
    height: 56,
    width: 56,
    borderRadius: 28,
  },
})
