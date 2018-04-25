import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {},
  linearGradient: {
    position: 'absolute'
  },
  splashImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});

export default class Splash extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <ImageBackground
        style={styles.splashImage}
        source={require('./img/SplashBackground.png')}
      >
        <Image style={styles.text} source={require('./img/SplashText.png')} />
      </ImageBackground>
    );
  }
}
