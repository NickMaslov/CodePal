import React from 'react';
import styles from '../styles';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

import { Text, View, Alert } from 'react-native';

export default class Home extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.center}>Home</Text>
      </View>
    );
  }
}
