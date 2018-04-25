import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import englishStrings from './src/localization/english.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    this.setState({ isReady: true });
  }

  render() {
    return (
      <View>
        <Text>{englishStrings.global.appTitle}</Text>
        <Text>Here is some text.</Text>
        <Text>Shake the phone for Developer Menu.</Text>
      </View>
    );
  }
}
