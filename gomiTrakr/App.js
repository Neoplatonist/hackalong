import React, { Component } from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './components/loginScreen'
// import HomeScreen from './components/homeScreen'
// import MapScreen from './components/mapScreen'

export default createStackNavigator(
  {
    Login: { screen: LoginScreen },

  },
  {
    initialRouteName: 'Login'
  }
)

