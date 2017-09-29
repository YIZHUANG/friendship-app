import React from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import rest from '../../utils/rest';

import { ViewContainer, Centered, FlexRow } from '../../components/Layout';
import TextRectangle from '../../components/TextRectangle';
import TabProfile from '../../components/TabProfile';

const mapStateToProps = state => ({
  personId: state.personId,
  tags: state.userTag,
  userData: state.userDetails,
});

const mapDispatchToProps = dispatch => ({
  refreshTags: userId => dispatch(rest.actions.userTag.get({ userId })),
  refreshUser: userId => dispatch(rest.actions.userDetails.get({ userId })),
});

class ProfileUser extends React.Component {
  // state = {
  //   userData: this.props.userData.data,
  //   personId: this.props.navigation.state.params.personId
  // }

  componentDidMount() {
    const personId = this.props.navigation.state.params.personId;
    this.props.refreshTags(personId);
    this.props.refreshUser(personId);
  }

  render = () => {
    console.log(this.props.userData);

    if (this.props.userData.loading) {
      return <ActivityIndicator />;
    }
    return (
      <ViewContainer style={styles.signUpFinalStepHate}>
        <View style={styles.topPart}>
          <View style={styles.oval}>
            <Text style={styles.emoji}>{this.props.userData.data.emoji}</Text>
          </View>
          <Text style={styles.username}>
            {this.props.userData.data.username}
          </Text>
          <Text style={styles.iLoveCampingRapA}>25, male, Helsinki</Text>
          <Text style={styles.iLoveCampingRapA}>I love ... and hate...</Text>
          <Text style={styles.lookingFor}>LOOKING FOR</Text>
          <Text style={styles.lookingForText}>
            The events you will actively look friends for will be visible here
          </Text>
        </View>
        <TabProfile tags={this.props.tags} />
      </ViewContainer>
    );
  };
}

const styles = StyleSheet.create({
  signUpFinalStepHate: {
    backgroundColor: '#e8e9e8',
    marginTop: 23,
  },
  topPart: {
    alignItems: 'center',
    height: 300,
  },
  botPart: {
    height: 500,
  },
  oval: {
    width: 64,
    height: 64,
    borderRadius: 64,
    backgroundColor: '#ffffff',
  },
  emoji: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    fontSize: 30,
    paddingTop: 8,
  },
  username: {
    width: 223,
    height: 27,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2.44,
    textAlign: 'center',
    color: '#60686d',
    marginTop: 7,
  },
  iLoveCampingRapA: {
    width: 300,
    height: 24,
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
    textAlign: 'center',
    color: '#4a4a4a',
    marginBottom: 14,
  },
  lookingFor: {
    height: 18,
    fontSize: 13,
    letterSpacing: 1.59,
    textAlign: 'center',
    color: '#3b3b3d',
    marginBottom: 14,
  },
  lookingForText: {
    width: 300,
    height: 72,
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
    textAlign: 'left',
    color: '#4a4a4a',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);