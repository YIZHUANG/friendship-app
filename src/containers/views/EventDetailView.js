import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import rest from '../../utils/rest';
import {
  EventContainer,
  DescriptionWrapper,
} from '../../components/Layout/Layout';
import { Description } from '../../components/Layout/TextLayout';

import EventTopPart from '../../components/Events/EventTopPart';

const mapStateToProps = state => ({
  auth: state.auth,
  eventDetails: state.eventDetails,
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: eventId => dispatch(rest.actions.eventDetails.get({ eventId })),
});

class EventDetailView extends Component {
  state = {
    loaded: false,
  };

  componentDidMount = () => {
    const { eventId } = this.props.navigation.state.params;
    this.props.fetchEvent(eventId);
  };

  componentWillReceiveProps(nextProps) {
    // render the event details when we have the data.
    if (!nextProps.eventDetails.loading) {
      this.setState({
        loaded: true,
      });
    }
  }

  navigateBack = () => {
    const backAction = NavigationActions.back();
    this.props.navigation.dispatch(backAction);
  };

  render() {
    if (!this.props.auth.data.decoded) {
      return (
        <View style={{ marginTop: 30 }}>
          <Text style={{ alignSelf: 'center' }}>You need to sign in!</Text>
        </View>
      );
    }
    if (!this.state.loaded) {
      return <ActivityIndicator />;
    } else {
      console.log(this.props.eventDetails.data);
      const { title, description, location } = this.props.eventDetails.data;

      // if there is no picture for the user we use a default image
      const srcImage = this.props.eventDetails.data.eventImage
        ? {
            uri:
              'data:image/png;base64,' +
              this.props.eventDetails.data.eventImage,
          }
        : require('../../../assets/img/placeholder/grone.jpg');

      return (
        <EventContainer>
          <EventTopPart
            eventTitle={title}
            location={location}
            srcImage={srcImage}
            navigateBack={this.navigateBack}
          />
          <DescriptionWrapper>
            <Description>{description}</Description>
          </DescriptionWrapper>
        </EventContainer>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailView);
