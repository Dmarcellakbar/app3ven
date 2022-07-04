import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, ColorPropType, TouchableOpacity, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-web';
import UserAvatar from 'react-native-user-avatar';

export default class Signup extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    }
    render(){

    return (
      <ImageBackground 
      source={require('../assets/images/linear.png')}
      style={{width: '100%', height: '100%',}}>
     
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../assets/images/trivenbaru-min.png')}/>

          <View style={styles.responsiveBox}>
          <h4 style={{marginTop:0}}>Hope You Enjoy Stay</h4>
          <h2 style={{marginTop:-10}}>Sign Up</h2>
          
          <form>
          <Text style={styles.text}>Username</Text>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Username"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleUser}/>
           <Text style={styles.text}>Email</Text>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
           <Text style={styles.text}>Password</Text>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
                
          </form>

          <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <UserAvatar size={50} name=">" bgColors={['#ccc', '#fafafa', '#1ECBE1']}/>
            </TouchableOpacity>

            <br/>
            <b>Have Account? Go to Login</b>
            <br/>
            <Button 
            title='Login'
            onPress={()=> this.props.navigation.navigate('Login')}/>


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
    color: 'black',
    fontWeight: 'bold',
  },
  image:{
    width:250, 
    height:125, 
    justifyContent: 'center',
    marginTop:'20%'

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
  submitButton:{
    marginTop:'5%'
  }
});

