import React from 'react';
import styles from '../styles';

import { Text, View } from 'react-native';

class Chat extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
      </View>
    );
  }
}

export default Chat;
