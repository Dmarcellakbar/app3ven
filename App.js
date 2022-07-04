import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Dashboard from './src/Dashboard';
import Login from './src/Login';
import Signup from './src/Signup';
import Menu from './src/Menu';
import Account from './src/Account/Account';
import Go from './src/Go/Go';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Dashboard} name="Dashboard" headerShown={false}/>
        <Stack.Screen component={Login} name="Login" headerShown={false}/>
        <Stack.Screen component={Signup} name="Signup" headerShown={false}/>
        <Stack.Screen component={Menu} name="Menu" headerShown={false}/>
        <Stack.Screen component={Account} name="Account" headerShown={false}/>
        <Stack.Screen component={Go} name="Go" headerShown={false}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}