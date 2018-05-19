import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';
import colors from './styles/colors';

const maxWidth = Dimensions.get('window').width;
// const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    height: 80,
    width: maxWidth,
    flexDirection: 'row',
    backgroundColor: colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    height: 40,
    width: maxWidth / 1.5,
    bottom: 0,
    position: 'absolute'
  }
});

export default class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require('./img/HeaderBackground.png')}
      >
        <Image style={styles.text} source={require('./img/header_text.png')} />
      </ImageBackground>
    );
  }
}
