import React from 'react';
import styles from '../styles';
import RootNavigator from '../navigation/RootNavigator';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase';
firebase.initializeApp(firebaseConfig);

import { Text, View, TouchableOpacity, Alert } from 'react-native';

class Login extends React.Component {
  state = {};

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.props.dispatch(login(user));
      }
    });
  }

  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '252070428882815',
      {
        permissions: ['public_profile'],
      }
    );
    if (type === 'success') {
      const credential = await firebase.auth.FacebookAuthProvider.credential(
        token
      );

      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .catch(error => {
          Alert.alert('Try Again');
          console.log(error);
        });
    }
  };

  render() {
    if (this.props.loggedIn) {
      return <RootNavigator />;
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.login.bind(this)}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(Login);
