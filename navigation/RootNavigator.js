import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator.js';
import Chat from '../screens/Chat.js';

const RootStackNavigator = createStackNavigator({
  Main: {
    screen: TabNavigator,
  },
  Chat: {
    screen: Chat,
  },
});

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
