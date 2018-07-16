// @flow
import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { FullWidthImage, Options } from './ComponentIndex';
import colors from './styles/colors';
import { getBasicGameInformation } from './API.js';
import ERROR_CODES from './ErrorCodes.js';
// import GLOBAL from './constants';

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
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
  },
  scrollView: {
    width: maxWidth,
    height: maxHeight - 160,
    backgroundColor: colors.backgroundPrimary,
    borderColor: 'black',
    borderWidth: 1
  }
});
export default class GameEntry extends React.Component {
  constructor() {
    super();

    this.state = {
      gameId: null,
      gameInformation: null,
      errorCode: ERROR_CODES.LOADING,
      errorMessage: null
    };
  }

  componentDidMount() {
    // Initialize Component
    this.setState({ gameId: this.props.gameId });

    // Fetch game information from API:
    getBasicGameInformation(this.props.gameId)
      .then(gameInformation => {
        this.setState({ gameInformation });
        this.setState({ errorCode: ERROR_CODES.SUCCESS });
      })
      .catch(error => {
        this.setState({ errorCode: ERROR_CODES.UNKNOWN_FAILURE });
        this.setState({ errorMessage: error });
      });

      // Generate Accordion Sections

    this._renderSectionTitle = this._renderSectionTitle.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderContent = this._renderContent.bind(this);
  }

  _renderSectionTitle(section) {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  }

  _renderHeader(section) {
    return (
      <View>
        <Text>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    switch (this.state.errorCode) {
      case ERROR_CODES.SUCCESS:
        return (
          <ScrollView style={styles.scrollView}>
            <FullWidthImage
              title={this.state.gameInformation.title}
              label={this.state.gameInformation.title.toUpperCase()}
              key={this.state.gameInformation.title}
              sublabel={
                this.state.gameInformation.developer +
                ' - ' +
                this.state.gameInformation.publisher
              }
              info={this.state.gameInformation.quickFacts.releaseDate}
              imageSource={require('./img/gow2.png')}
              hideOverlay
            />
            <Options />
            <Accordion
              sections={['Title']}
              renderSectionTitle={this._renderSectionTitle}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />
          </ScrollView>
        );
      case ERROR_CODES.LOADING:
        return (
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}> LOADING </Text>
          </ScrollView>
        );
      case ERROR_CODES.UNKNOWN_FAILURE:
        return (
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}> ERROR: </Text>
          </ScrollView>
        );
      default:
        return (
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>???</Text>
          </ScrollView>
        );
    }
  }
}
