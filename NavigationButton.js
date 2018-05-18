// @flow
/* eslint import/no-dynamic-require: warn */
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight
} from 'react-native';
import colors from './styles/colors';

const maxWidth = Dimensions.get('window').width;
// const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    height: 70,
    width: 70,
    alignSelf: 'stretch'
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
        <Image style={styles.background} source={this.props.imageSource} />
      </TouchableHighlight>
    );
  }
}
