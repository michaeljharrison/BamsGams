/* eslint import/no-dynamic-require: warn */
import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  TouchableHighlight
} from 'react-native';
import colors from './styles/colors';

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    height: maxHeight / 14 * 3,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 1
  },

  text: {
    color: colors.white,
    fontFamily: 'Exo_Extra_Bold',
    fontSize: 42
  },

  subtext: {
    color: colors.white,
    fontFamily: 'Exo_Medium',
    fontSize: 22
  },

  info: {
    color: colors.white,
    fontFamily: 'Exo_Regular',
    fontSize: 22,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: maxWidth,
    height: maxHeight / 14 * 3,
    opacity: 0.8
  }
});

export default class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.onPress(this.props.title);
        }}
      >
        <ImageBackground
          style={styles.background}
          source={this.props.imageSource}
        >
          <Image
            style={styles.overlay}
            source={require('./img/background_gradient.png')}
          />
          <Text style={styles.text}>{this.props.label}</Text>
          {this.props.sublabel && (
            <Text style={styles.subtext}>{this.props.sublabel}</Text>
          )}
          {this.props.info && (
            <Text style={styles.info}>{this.props.info}</Text>
          )}
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}
