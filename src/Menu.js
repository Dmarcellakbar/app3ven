import React, {Component} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import  Avatar from '@mui/material/Avatar'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, Button } from 'react-native'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import FaceIcon from '@mui/icons-material/Face';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaidIcon from '@mui/icons-material/Paid';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ArticleIcon from '@mui/icons-material/Article';

import UserAvatar from 'react-native-user-avatar';


export default class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        }
        render(){

      return(
          <ImageBackground
            source={require('../assets/images/Dashboard.svg')}
            style={{width: '100%', height: '100%'}}
            >

      <TouchableOpacity 
               style = {styles.sidebar}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <ArticleIcon style={{ color: '#fafafa', width: '100%', height: '100%'}}/>
      </TouchableOpacity>
            <Text style={styles.user}>
              Hi, User 
              </Text>
              <Text style={styles.user2}>
              Welcome to Triven
              </Text>
            
          <View style={styles.container}>
              
              <View style={styles.responsiveBox}>

                {/* <AccountCircleIcon style={styles.avatarStyle} onClick={() =>
                      this.props.navigation.navigate('Menu')} color="primary" sx={{fontSize: 75}}/> */}
              
              <TouchableOpacity
               style = {styles.submitButton1}
               onPress = {
                  () => this.props.navigation.navigate('Account')
               }>
               <AccountCircleIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Account</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style = {styles.submitButton2}
               onPress = {
                  () => this.props.navigation.navigate('Go')
               }>
               <PublicIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Go</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style = {styles.submitButton3}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <FaceIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Guide</Text>
              </TouchableOpacity>

               {/* Baris 2 */}

               <TouchableOpacity
               style = {styles.submitButton4}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <FlightTakeoffIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Travel</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style = {styles.submitButton5}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <HotelIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Hotel</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style = {styles.submitButton6}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <FastfoodIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Food</Text>
              </TouchableOpacity>

              {/* Baris 3 */}

              <TouchableOpacity
               style = {styles.submitButton7}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <ShoppingBagIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Shop</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style = {styles.submitButton8}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <PaidIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Pay</Text>
              </TouchableOpacity>

              <TouchableOpacity
               style = {styles.submitButton9}
               onPress = {
                  () => this.props.navigation.navigate('Menu')
               }>
               <ReviewsIcon style={{ color: '#3366ae', width: '100%', height: '100%'}}/>
              <Text style={styles.nametag1}>Triven</Text>
              <Text style={styles.nametag11}>Review</Text>
              </TouchableOpacity>
           
              </View>

                {/* <Paper elevation={0} style={paperStyle}>
                
                  <Button type='submit' className="btn-submit" style={btnstyleAccount}><Avatar style={avatarStyle} >
                      <AccountCircleIcon onClick={() =>
                      navigation.navigate('Account')}/></Avatar></Button>
                  <Button type='submit' className="btn-submit" style={btnstyleGO}><Avatar style={avatarStyle} >
                      <PublicIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
                  <Button type='submit' className="btn-submit" style={btnstyleGuide}><Avatar style={avatarStyle} >
                      <FaceIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
                  <h4 style={{marginLeft:20, marginBottom:-30, marginTop:0}}>Account</h4>
                  <Button type='submit' className="btn-submit" style={btnstyleTravel}><Avatar style={avatarStyle} >
                      <FlightIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
                  <Button type='submit' className="btn-submit" style={btnstyleHotel}><Avatar style={avatarStyle} >
                      <HotelIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
                  <Button type='submit' className="btn-submit" style={btnstyleFood}><Avatar style={avatarStyle} >
                      <FastfoodIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
                  <Button type='submit' className="btn-submit" style={btnstyleShop}><Avatar style={avatarStyle} >
                      <StorefrontIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
                  <Button type='submit' className="btn-submit" style={btnstylePay}><Avatar style={avatarStyle} >
                      <PaymentIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
                  <Button type='submit' className="btn-submit" style={btnstyleReview}><Avatar style={avatarStyle} >
                      <ChatIcon onClick={() =>
                      navigation.navigate('Dashboard')}/></Avatar></Button>
              </Paper> */}
  
          </View>
          </ImageBackground>
      );
    }
  
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: 'transparant',
        alignItems: 'center',
      },
      responsiveBox: {
        width: wp('70%'),
        height: hp('45%'),
        borderWidth: 0,
        borderColor: 'orange',
        alignItems: 'center',
        marginTop:'40%'
      },
      user:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        marginTop:'0%',
        marginLeft:'5%',
        position: 'absolute',
      },
      user2:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        marginLeft:'5%',
        marginTop:'10%',
        position: 'absolute',
      },
      nametag1:{
        color:'#3366ae',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: '-20%'
      },
      nametag11:{
        color:'#3366ae',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
      },
      nametag3:{
        color:'#3366ae',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: '5%'
        // marginTop: '-15%'
      },
      Button:{
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        borderWidth:1
      },
      submitButton1:{
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        position: 'relative',
        // borderWidth:1,
        width: '30%',
        height: '30%',
        marginTop: '-10%'
      },
      submitButton2:{
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        // borderWidth:1,
        width: '30%',
        height: '30%',
        marginTop: '-10%'
      },
      submitButton3:{
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        // borderWidth:1,
        width: '30%',
        height: '30%',
        marginTop: '-10%'
      },
      submitButton4:{
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        marginTop: '40%',
        // borderWidth:1,
        width: '30%',
        height: '30%',
      },
      submitButton5:{
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: '40%',
        // borderWidth:1,
        width: '30%',
        height: '30%',
      },
      submitButton6:{
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        marginTop: '40%',
        // borderWidth:1,
        width: '30%',
        height: '30%',
      },
      submitButton7:{
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        // justifyContent: 'center',
        position: 'absolute',
        marginTop: '90%',
        // borderWidth:1,
        width: '30%',
        height: '30%',
      },
      submitButton8:{
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: '90%',
        // borderWidth:1,
        width: '30%',
        height: '30%',
      },
      submitButton9:{
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        marginTop: '90%',
        // borderWidth:1,
        width: '30%',
        height: '30%',
      },
      sidebar:{
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        position: 'relative',
        // borderWidth:1,
        width: '20%',
        height: '10%',
        padding: 10
        // marginTop: '-10%'
      },
  });
  

  // const paperStyle={backgroundColor:'transparent',padding: 55,height:'auto',width:'auto',margin:"auto auto"}
  // // const subpaperStyle={backgroundColor:'transparent',padding: 0,height:'100%',width:'100%',margin:"375px auto"}
  // const avatarStyle={backgroundColor:'#3366ae',borderWidth:1,borderColor:'black',borderStyle:'solid'}
  // const SearchStyle={padding:0,margin:'auto auto', marginLeft:20, marginRight:20, marginTop:"auto"}
  // const btnstyleAccount={padding:0,margin:'auto auto', marginLeft:20, marginTop:40}
  // const btnstyleGO={padding:0,margin:'auto auto', marginLeft:20, marginTop:40}
  // const btnstyleGuide={padding:0,margin:'auto auto', marginLeft:20, marginTop:40}
  // const btnstyleTravel={padding:0,margin:'auto auto', marginLeft:20, marginTop:50}
  // const btnstyleHotel={padding:0,margin:'auto auto', marginLeft:20, marginTop:50}
  // const btnstyleFood={padding:0,margin:'auto auto', marginLeft:20, marginTop:50}
  // const btnstyleShop={padding:0,margin:'auto auto', marginLeft:20, marginTop:50}
  // const btnstylePay={padding:0,margin:'auto auto', marginLeft:20, marginTop:50}
  // const btnstyleReview={padding:0,margin:'auto auto', marginLeft:20, marginTop:50}