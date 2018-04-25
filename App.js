import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Font } from 'expo';
import Splash from './Splash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 3000);
    /*  await Font.loadAsync({
      'Roboto': require('Fonts/Roboto.ttf'),
      'Roboto_medium': require('Fonts/Roboto_medium.ttf'),
    }); */
  }

  render() {
    if (this.state.isReady) {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Wishlist</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Library</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recommended</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Friends</Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return <Splash />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    backgroundColor: '#bfbec0',
    borderColor: 'black',
    borderWidth: 6
  }
});
