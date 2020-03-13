import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AudienceRoomView from "../components/RoomView/AudienceRoomView";
import SpeakerRoomView from "../components/RoomView/SpeakerRoomView";
import SpeakerDrawer from "../components/RoomView/SpeakerDrawer";
import AudienceDrawer from "../components/RoomView/AudienceDrawer";
import { SwipeableDrawer } from "@material-ui/core";
import { connect } from "react-redux";
import {compose} from 'ramda';
import * as selectors from "../selectors";

import { signOut, endSession } from "../actions";

import history from '../history';

const styles = {
  root: { textAlign: "center" }
};

class RoomViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      commentError: null,
      sliderValue: 0.5,
      isDrawerOpen: false,
      mode: "audience"
    };
  }

  toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ isDrawerOpen: open });
  };

  handleCloseRoom = () => {this.props.endSession(this.props.currentSessionDetails.id).then(() => history.push("/account"))};

  handleChangeComment = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmitComment = () => {
    !this.state.comment && this.setState({ commentError: "comment required" });

    //sendrequest
  };

  handleChangeSlider = event => {
    this.setState({ sliderValue: event.detail.value });
  };

  getSliderEmoji = () => {
    if (this.state.sliderValue < 0.25) {
      return "💔";
    } else if (this.state.sliderValue < 0.5) {
      return "💜";
    } else if (this.state.sliderValue < 0.75) {
      return "💗";
    } else {
      return "💖";
    }
  };

  render() {
    const { classes } = this.props;

    const comments = ["so interesting", "amazing", "much wow", "5 stars"];

    const sliderEmoji = this.getSliderEmoji();

    const isSpeaker = this.props.authDetails && (this.props.authDetails.user.uid === this.props.currentSessionDetails.details.speakerId);

    return (
      <div className={classes.root}>
        {isSpeaker ? (
          <SpeakerRoomView
            comments={comments}
            handleCloseRoom={this.handleCloseRoom}
            sessionDetails={this.props.currentSessionDetails}
          />
        ) : (
          <AudienceRoomView
            commentError={this.state.commentError}
            handleChange={this.handleChangeComment}
            handleSubmit={this.handleSubmitComment}
            handleSlide={this.handleChangeSlider}
            emoji={sliderEmoji}
            sliderValue={this.state.sliderValue}
          />
        )}
        <SwipeableDrawer
          anchor="bottom"
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          {isSpeaker ? (
            <SpeakerDrawer />
          ) : (
            <AudienceDrawer />
          )}
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authDetails: selectors.getAuthUser(state),
    currentSessionDetails: selectors.getCurrentSessionDetails(state)
  };
};

export default compose(
  connect(mapStateToProps, {signOut, endSession}),
  withStyles(styles)
)(RoomViewContainer);
