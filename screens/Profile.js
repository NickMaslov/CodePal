import React from 'react';
import styles from '../styles';

import { Text, View } from 'react-native';

class Profile extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;
