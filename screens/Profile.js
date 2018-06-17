import React from 'react';
import styles from '../styles';
import { connect } from 'react-redux';

import { Text, View, Image } from 'react-native';

class Profile extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.user.name}</Text>
        <Image
        style={{width: 75, height: 75}}
        source={{uri: this.props.user.photoUrl}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
