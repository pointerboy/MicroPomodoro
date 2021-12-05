import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";

class TimerHeader extends Component {
  handleText = () => {
    if (this.props.intervalType == "focus") {
      if (this.props.running === true) {
        return "Time to focus!";
      } else if (this.props.running === false) {
        return "Timer is ready";
      }
    } else {
      if (this.props.running === true) {
        return "Just Relax :)";
      } else if (this.props.running === false) {
        return "Relax Now";
      }
    }
  };
  render() {
    let displayText = this.handleText();
    return <Text style={styles.textStyle}>{displayText}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: "300",
    letterSpacing: 0.5,
    color: 'white'
  }
});
export default TimerHeader;
