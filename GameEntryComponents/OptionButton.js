// @flow
/* eslint import/no-dynamic-require: warn */
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  Text
} from 'react-native';
import colors from '../styles/colors';

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

export default class OptionButton extends React.Component {
  componentDidMount() {}

  render() {
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
            <Text style={styles.text}>{this.props.title}</Text>
          </ImageBackground>
        </View>
      </TouchableHighlight>
    );
  }
}
