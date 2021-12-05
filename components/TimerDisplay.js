import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

class TimerDisplay extends Component {
  state = {};
  render() {
    return (
      <View style={styles.containerStyle}>
        <CountdownCircleTimer
          isPlaying={this.props.running}
          duration={this.props.time}
          strokeWidth = {4}
          colors={[
            ['#ebeff2', 0.4],
            ['#ebeff2', 0.4],
            ['#ebeff2', 0.2],
          ]}>
          {({animatedColor}) => (
            <Animated.Text style={{color: animatedColor}}>
              <Text style={styles.textStyle}>
                {Math.floor(this.props.time / 60)
                  .toString()
                  .padStart(2, '0') +
                  ':' +
                  (this.props.time % 60).toString().padStart(2, '0')}
              </Text>
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: '7%',
    marginBottom: '5%',
    padding: '15%',
  },
  textStyle: {
    color: 'white',
    fontSize: 50,
    fontWeight: '200',
  },
});

export default TimerDisplay;
