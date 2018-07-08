/* eslint import/no-dynamic-require: warn */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { OptionButton } from '../ComponentIndex';
import colors from '../styles/colors';

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
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
    color: colors.white,
    fontFamily: 'Exo_Extra_Bold',
    fontSize: 32,
    alignSelf: 'center'
  },

  subtext: {
    color: colors.white,
    fontFamily: 'Exo_Medium',
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
  componentDidMount() {
    this._onPressPurchase = this._onPressPurchase.bind(this);
  }

  _onPressPurchase(title) {
    console.log('Purchase: ', title);
  }

  render() {
    return (
      <View style={styles.background}>
        <OptionButton
          imageSource={require('../img/icons/buttons/purchase_button_default.png')}
          onPress={this._onPressPurchase}
        />
        <OptionButton
          imageSource={require('../img/icons/buttons/wishlist_button_default.png')}
          onPress={this._onPressPurchase}
        />
        <OptionButton
          imageSource={require('../img/icons/buttons/own_button_default.png')}
          onPress={this._onPressPurchase}
        />
        <OptionButton
          imageSource={require('../img/icons/buttons/favourite_button_default.png')}
          onPress={this._onPressPurchase}
        />
        <OptionButton
          imageSource={require('../img/icons/buttons/share_button_default.png')}
          onPress={this._onPressPurchase}
        />
      </View>
    );
  }
}
