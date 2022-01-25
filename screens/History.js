import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>History</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  }
});
