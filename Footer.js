// @flow
import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Svg from 'react-native-svg';
import { NavigationButton } from './ComponentIndex';
import colors from './styles/colors';
import GLOBAL from './constants';

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
    color: colors.primaryBlue,
    fontFamily: 'Exo'
  }
});

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.onPressSection = this.onPressSection.bind(this);
  }
  componentDidMount() {}

  onPressSection(title) {
    console.log('Swapping View to target - ', title);
    this.props.selectionCallback(title);
  }

  render() {
    return (
      <View
        style={styles.background}
        source={require('./img/FooterBackground.png')}
      >
        <NavigationButton
          title={GLOBAL.BODY_STATE.HOME}
          imageSource={require('./img/icons/home_button_inactive.png')}
          onPress={this.onPressSection}
        />
        <NavigationButton
          title={GLOBAL.BODY_STATE.WISHLIST}
          imageSource={require('./img/icons/wishlist_button_inactive.png')}
          onPress={this.onPressSection}
        />
        <NavigationButton
          title={GLOBAL.BODY_STATE.LIBRARY}
          imageSource={require('./img/icons/games_button_inactive.png')}
          onPress={this.onPressSection}
        />
        <NavigationButton
          title={GLOBAL.BODY_STATE.FRIENDS}
          imageSource={require('./img/icons/friends_button_inactive.png')}
          onPress={this.onPressSection}
        />
        <NavigationButton
          title={GLOBAL.BODY_STATE.SETTINGS}
          imageSource={require('./img/icons/settings_button_inactive.png')}
          onPress={this.onPressSection}
        />
      </View>
    );
  }
}
