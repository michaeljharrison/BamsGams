import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import colors from './styles/colors';
import FullWidthButton from './FullWidthButton';
import GLOBAL from './constants';

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
    console.log(title);
    this.props.selectionCallback(title);
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <FullWidthButton
          title={GLOBAL.BODY_STATE.HOME}
          label="Home"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.WISHLIST}
          label="Wishlist"
          imageSource={require('./img/horizon.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.LIBRARY}
          label="Library"
          imageSource={require('./img/seaofthieves.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.RECOMMENDED}
          label="Recommended"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.PROFILE}
          label="Profile"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.SETTINGS}
          label="Settings"
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
      </ScrollView>
    );
  }
}
