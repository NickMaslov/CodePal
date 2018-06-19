import React from 'react';
import Home from '../screens/Home';
import styles from '../styles';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Image } from 'react-native';

export default createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        // tabBarIcon: ({ focused }) => (
        //   <Ionicons
        //     style={styles.nav}
        //     color={'#df4723'}
        //     name={focused ? 'ios-person' : 'ios-person-outline'}
        //     size={40}
        //   />
        // ),
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Search',
        // tabBarIcon: ({ focused }) => (
        //   <Image
        //     style={styles.logo}
        //     source={require('../assets/CodePal.png')}
        //   />
        // ),
      },
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: 'Chats',
        // tabBarIcon: ({ focused }) => (
        //   <Ionicons
        //     style={styles.nav}
        //     color={'#df4723'}
        //     name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
        //     size={40}
        //   />
        // ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        height: 45,
      },
    },
  }
);


