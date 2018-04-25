import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 3000);
    /*  await Font.loadAsync({
      'Roboto': require('Fonts/Roboto.ttf'),
      'Roboto_medium': require('Fonts/Roboto_medium.ttf'),
    }); */
  }

  render() {
    if (true) {
      return <View style={styles.background} />;
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
