import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import englishStrings from './src/localization/english.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{englishStrings.global.appTitle}</Text>
        <Text>Here is some text.</Text>
        <Text>Shake the phone for Developer Menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
