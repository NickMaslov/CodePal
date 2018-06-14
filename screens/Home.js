import React from 'react';
import styles from '../styles'

import {
  Text,
  View
} from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {}

  render() {
    return (
     <View style={styles.container}>
      <Text>Home</Text>
     </View>
    )
  }
}

export default Home;
