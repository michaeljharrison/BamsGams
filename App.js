// @flow
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import {
  Home,
  Wishlist,
  Splash,
  Header,
  Footer,
  Library,
  Profile,
  Recommended,
  Friends,
  Options
} from './ViewIndex';
import colors from './styles/colors';
import GLOBAL from './constants';

const maxWidth = Dimensions.get('window').width;
// const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    height: 80,
    width: maxWidth
  },
  footer: {
    height: 80,
    width: maxWidth
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      currentView: GLOBAL.BODY_STATE.HOME
    };

    this.selectionCallback = this.selectionCallback.bind(this);
  }
  componentDidMount() {
    Font.loadAsync({
      Exo: require('./Fonts/Exo-Black.ttf'),
      Exo_Bold: require('./Fonts/Exo-Bold.ttf'),
      Exo_Extra_Bold: require('./Fonts/Exo-ExtraBold.ttf'),
      Exo_Medium: require('./Fonts/Exo-ExtraBold.ttf'),
      Exo_Light: require('./Fonts/Exo-Light.ttf'),
      Exo_Regular: require('./Fonts/Exo-Regular.ttf')
    });
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 1000);
  }

  selectionCallback(option) {
    this.setState({ currentView: option });
  }

  getBody() {
    switch (this.state.currentView) {
      case GLOBAL.BODY_STATE.HOME:
        return <Home selectionCallback={this.selectionCallback} />;
      case GLOBAL.BODY_STATE.WISHLIST:
        return <Wishlist />;
      case GLOBAL.BODY_STATE.LIBRARY:
        return <Library />;
      case GLOBAL.BODY_STATE.RECOMMENDED:
        return <Recommended />;
      case GLOBAL.BODY_STATE.FRIENDS:
        return <Friends />;
      case GLOBAL.BODY_STATE.PROFILE:
        return <Profile />;
      case GLOBAL.BODY_STATE.SETTINGS:
        return <Options />;
      default:
        return <View />;
    }
  }

  render() {
    const body = this.getBody();

    if (this.state.isReady) {
      return (
        <View style={styles.container}>
          <Header style={styles.header} />
          {body}
          <Footer
            style={styles.footer}
            selectionCallback={this.selectionCallback}
          />
        </View>
      );
    }
    return <Splash />;
  }
}
