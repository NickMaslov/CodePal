import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: 'Matches',
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        height: 50,
        backgroundColor: '#1ff',
      },
    }
  }
);