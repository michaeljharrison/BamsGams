import React from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import colors from './styles/colors';

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
    color: colors.primaryBlue
  }
});

export default class Footer extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View
        style={styles.background}
        source={require('./img/FooterBackground.png')}
      >
        <Text style={styles.text}>Footer</Text>
      </View>
    );
  }
}
