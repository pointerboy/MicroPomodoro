import React, {Component} from 'react';
import {View, Platform, Text, StyleSheet} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>MicroPomodoro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '##707bfb',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '200',
    letterSpacing: 1.5,
    fontFamily: Platform.OS == 'android' ? 'notoserif' : 'system',
  },
});
export default Header;
