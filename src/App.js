import * as Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getTheme from './styles/native-base-theme/components';
import englishStrings from './localization/english.js';
import globalStyles from './styles/global.js';
import { StyleProvider } from 'native-base';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <StyleProvider style={getTheme()}>
          <View style={globalStyles.container}>
            <Text style={globalStyles.containerText}>
              {englishStrings.global.appTitle}
            </Text>
            <Text>NOT LOADED</Text>
            <Text>Shake the phone for Developer Menu.</Text>
          </View>
        </StyleProvider>
      );
    }
    return (
      <StyleProvider style={getTheme()}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.containerText}>
            {englishStrings.global.appTitle}
          </Text>
          <Text>LOADED</Text>
          <Text>Shake the phone for Developer Menu.</Text>
        </View>
      </StyleProvider>
    );
  }
}
