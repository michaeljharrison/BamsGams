import React from 'react';
import { StyleSheet, Text, Dimensions, ImageBackground } from 'react-native';
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
    color: colors.primaryBlue
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
        <Text style={styles.text}>GameTRACK</Text>
      </ImageBackground>
    );
  }
}
