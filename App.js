import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import GLOBAL from './constants';
import Home from './Home';
import Splash from './Splash';
import Header from './Header';
import Footer from './Footer';
import { createStackNavigator } from 'react-navigation';

const maxWidth = Dimensions.get('window').width;
// const maxHeight = Dimensions.get('window').height;
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
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 1000);
    /*  await Font.loadAsync({
      'Roboto': require('Fonts/Roboto.ttf'),
      'Roboto_medium': require('Fonts/Roboto_medium.ttf'),
    }); */
  }

  selectionCallback(option) {
    this.setState({ currentView: option });
  }

  getBody() {
    switch (this.state.currentView) {
      case GLOBAL.BODY_STATE.HOME:
        return <Home selectionCallback={this.selectionCallback} />;
      case GLOBAL.BODY_STATE.WISHLIST:
        return <View />;
      case GLOBAL.BODY_STATE.LIBRARY:
        return <View />;
      case GLOBAL.BODY_STATE.RECOMMENDED:
        return <View />;
      case GLOBAL.BODY_STATE.FRIENDS:
        return <View />;
      case GLOBAL.BODY_STATE.PROFILE:
        return <View />;
      case GLOBAL.BODY_STATE.OPTIONS:
        return <View />;
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
