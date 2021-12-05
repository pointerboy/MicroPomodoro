import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Header from './components/Header';
import PomodoroTimer from './components/PomodoroTimer';

const backgroundImage = require("./assets/backgroundWave.png");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <Header />
        <PomodoroTimer />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
