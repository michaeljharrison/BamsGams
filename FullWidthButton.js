/* eslint import/no-dynamic-require: warn */
import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import colors from './styles/colors';

// const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    height: maxHeight / 14 * 3,
    alignSelf: 'stretch',
    backgroundColor: '#bfbec0',
    borderColor: 'black',
    borderWidth: 1
  },

  text: {
    color: colors.primaryBlue
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
          <Text style={styles.text}>{this.props.title}</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}
