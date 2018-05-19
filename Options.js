// @flow
import React from 'react';
import { StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import colors from './styles/colors';
// import GLOBAL from './constants';

// const maxWidth = Dimensions.get('window').width;
// const maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.white,
    fontSize: 36,
    fontFamily: 'Exo'
  }
});

export default class Options extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}> Options Placeholder</Text>
      </ScrollView>
    );
  }
}
