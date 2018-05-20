// @flow
/* eslint import/no-dynamic-require: warn */
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  TouchableHighlight,
  Text
} from 'react-native';
import GLOBAL from './constants';
import colors from './styles/colors';

// const maxWidth = Dimensions.get('window').width;
// const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    height: 70,
    width: 70,
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  container: {
    height: 70,
    width: 70,
    alignSelf: 'stretch'
  },
  text: {
    color: colors.primaryBlue,
    fontFamily: 'Roboto_Medium',
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
  }
});

export default class Header extends React.Component {
  componentDidMount() {}

  render() {
    let label = '???';
    switch (this.props.title) {
      case GLOBAL.BODY_STATE.HOME:
        label = 'HOME';
        break;
      case GLOBAL.BODY_STATE.WISHLIST:
        label = 'WISHLIST';
        break;
      case GLOBAL.BODY_STATE.LIBRARY:
        label = 'GAMES';
        break;
      case GLOBAL.BODY_STATE.FRIENDS:
        label = 'FRIENDS';
        break;
      case GLOBAL.BODY_STATE.SETTINGS:
        label = 'SETTINGS';
        break;
      default:
        label = 'UNKNOWN';
        break;
    }
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.onPress(this.props.title);
        }}
      >
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={this.props.imageSource}
          >
            <Text style={styles.text}>{label}</Text>
          </ImageBackground>
        </View>
      </TouchableHighlight>
    );
  }
}
