import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class Splash extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.text}> LOADING </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#bfbec0'
  }
});
