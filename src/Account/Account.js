import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, ColorPropType, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UserAvatar from 'react-native-user-avatar';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground 
      source={require('../../assets/images/BG_Profile.svg')}
      style={{width: '100%', height: '100%',}}>

      <TouchableOpacity
               style = {styles.submitButton1}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <ArrowCircleLeftIcon style={{ color: '#fafafa', width: '100%', height: '100%'}}/>
      </TouchableOpacity>
      
      <Text style={styles.user}>
      My Account 
      </Text>
      <Text style={styles.user2}>
      Setting
      </Text>

      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <Text style={styles.btndetail}>Personal Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
               style = {styles.submitButton2}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <Text style={styles.btndetail}>About Apps</Text>
      </TouchableOpacity>

      <TouchableOpacity
               style = {styles.submitButton2}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <Text style={styles.btndetail}>Feedback</Text>
      </TouchableOpacity>


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
  submitButton1:{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    position: 'relative',
    // borderWidth:1,
    width: '20%',
    height: '10%',
    padding: 10
    // marginTop: '-10%'
  },
  user:{
    color:'white',
    // fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    marginTop:'10%',
    // marginLeft:'20%',
    position: 'absolute',
  },
  user2:{
    color:'white',
    // fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    // marginLeft:'20%',
    marginTop:'20%',
    position: 'absolute',
  },
  submitButton:{
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    width: '85%',
    height: '6%',
    // borderWidth:1,
    marginTop:'30%',
    backgroundColor: '#ccc',
    borderRadius: 10
  },
  submitButton2:{
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    width: '85%',
    height: '6%',
    // borderWidth:1,
    marginTop:'5%',
    backgroundColor: '#ccc',
    borderRadius: 10
  },
  btndetail:{
    color:'black',
    // fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems:'center',

    fontWeight: 'bold',

  }
});