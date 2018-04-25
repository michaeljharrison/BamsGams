import React from 'react';
import { StyleSheet, Text, Dimensions, View, ScrollView } from 'react-native';
import colors from './styles/colors';
import FullWidthButton from './FullWidthButton';
import { GLOBAL } from './constants';

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    height: 80,
    width: maxWidth
  },
  scrollView: {
    width: maxWidth,
    height: maxHeight - 160,
    backgroundColor: colors.backgroundPrimary,
    borderColor: 'black',
    borderWidth: 1
  },
  footer: {
    height: 80,
    width: maxWidth
  },
  section: {
    height: maxHeight / 14 * 3,
    alignSelf: 'stretch',
    backgroundColor: '#bfbec0',
    borderColor: 'black',
    borderWidth: 1
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
    switch (title) {
      case 'Home':
        this.props.selectionCallback(GLOBAL.BODY_STATE.HOME);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <FullWidthButton
          title="Home"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title="Wishlist"
          imageSource={require('./img/horizon.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title="Library"
          imageSource={require('./img/seaofthieves.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title="Recommended"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title="Profile"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title="Settings"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
      </ScrollView>
    );
  }
}
