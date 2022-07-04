import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, ColorPropType, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UserAvatar from 'react-native-user-avatar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground 
      source={require('../assets/images/linear.png')}
      style={{width: '100%', height: '100%',}}>
     
     <Image
            style={styles.imageT}
            source={require('../assets/images/trivenbaru-min.png')}/>

        <View style={styles.container}>
        <Image
            style={styles.imageM}
            source={require('../assets/images/map.png')}/>

          <View style={styles.responsiveBox}>
          <h2 style={{marginTop:10}}>Welcome to Triven!</h2>
          <h4 style={{marginTop:-10}}>Nice to see you again</h4>

          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.props.navigation.navigate('Login')
               }>
               <UserAvatar size={50} name=">" bgColors={['#ccc', '#fafafa', '#1ECBE1']}/>
            </TouchableOpacity>

          </View>
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparant',
    alignItems: 'center',
    justifyContent: 'center',
  },
  responsiveBox: {
    width: wp('70%'),
    height: hp('60%'),
    borderWidth: 0,
    // borderColor: 'orange',
    alignItems: 'center',
  },
  text: {
    color: 'black'
  },
  imageT:{
    width:150, 
    height:75, 
    margin:20,
    alignSelf: 'flex-end',
    marginBottom:'30%'
  },
  imageM:{
    width:300, 
    height:175, 
    justifyContent: 'center',
    borderRadius: 30
  },
  input: {
    margin: 15,
    height: 40,
    width: '80%',
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  avatarStyle:{
    backgroundColor:'#3366ae'
  },
});