import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { FullWidthButton } from './ComponentIndex';
import colors from './styles/colors';
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
    this.getSublabel = this.getSublabel.bind(this);
    this.getInfoLabel = this.getInfoLabel.bind(this);
  }
  componentDidMount() {}

  onPressSection(title) {
    console.log(title);
    this.props.selectionCallback(title);
  }

  getSublabel(section) {
    switch (section) {
      case GLOBAL.BODY_STATE.HOME:
        return '0 Avaliable';
      default:
        return '0 Avaliable';
    }
  }

  getInfoLabel(section) {
    switch (section) {
      case GLOBAL.BODY_STATE.HOME:
        return 'Information and Stats';
      default:
        return 'Information and Stats';
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {
          // <FullWidthButton
          //   title={GLOBAL.BODY_STATE.HOME}
          //   label="Home"
          //   sublabel={this.getSublabel(GLOBAL.BODY_STATE.HOME)}
          //   info={this.getInfoLabel(GLOBAL.BODY_STATE.HOME)}
          //   imageSource={require('./img/farcry5.jpg')}
          //   onPress={this.onPressSection}
          // />
        }
        <FullWidthButton
          title={GLOBAL.BODY_STATE.WISHLIST}
          label="Wishlist"
          sublabel={this.getSublabel(GLOBAL.BODY_STATE.WISHLIST)}
          info={this.getInfoLabel(GLOBAL.BODY_STATE.WISHLIST)}
          imageSource={require('./img/horizon.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.LIBRARY}
          label="Library"
          sublabel={this.getSublabel(GLOBAL.BODY_STATE.LIBRARY)}
          info={this.getInfoLabel(GLOBAL.BODY_STATE.LIBRARY)}
          imageSource={require('./img/seaofthieves.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.RECOMMENDED}
          label="Recommended"
          sublabel={this.getSublabel(GLOBAL.BODY_STATE.RECOMMENDED)}
          info={this.getInfoLabel(GLOBAL.BODY_STATE.RECOMMENDED)}
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.PROFILE}
          label="Profile"
          sublabel={this.getSublabel(GLOBAL.BODY_STATE.PROFILE)}
          info={this.getInfoLabel(GLOBAL.BODY_STATE.PROFILE)}
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
        <FullWidthButton
          title={GLOBAL.BODY_STATE.SETTINGS}
          label="Settings"
          sublabel={this.getSublabel(GLOBAL.BODY_STATE.SETTINGS)}
          info={this.getInfoLabel(GLOBAL.BODY_STATE.SETTINGS)}
          imageSource={require('./img/farcry5.jpg')}
          onPress={this.onPressSection}
        />
      </ScrollView>
    );
  }
}
