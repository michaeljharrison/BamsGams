/* eslint import/no-dynamic-require: warn */
import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';
import colors from '../styles/colors';

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    height: (maxHeight / 14) * 4,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 1
  },

  text: {
    color: colors.white,
    fontFamily: 'Exo_Extra_Bold',
    fontSize: 32,
    alignSelf: 'center'
  },

  subtext: {
    color: colors.fontSecondary,
    fontFamily: 'Exo_Regular',
    fontSize: 18,
    alignSelf: 'center'
  },

  info: {
    color: colors.white,
    fontFamily: 'Exo_Regular',
    fontSize: 18,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: maxWidth,
    height: (maxHeight / 14) * 4,
    opacity: 0.8
  }
});

export default class FullWidthImage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={this.props.imageSource}
      >
        {this.props.hideOverlay && (
          <Image
            style={styles.overlay}
            source={require('../img/background_gradient.png')}
          />
        )}
        <Text style={styles.text}>{this.props.label}</Text>
        {this.props.sublabel && (
          <Text style={styles.subtext}>{this.props.sublabel}</Text>
        )}
        {this.props.info && <Text style={styles.info}>{this.props.info}</Text>}
      </ImageBackground>
    );
  }
}
