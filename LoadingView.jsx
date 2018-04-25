import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import englishStrings from './src/localization/english.js';
import loadingStyles from 'loadingStyles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={loadingStyles.container}>
        <Text style={loadingStyles.title}>{englishStrings.loading.title}</Text>
      </View>
    );
  }
}
