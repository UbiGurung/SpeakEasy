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

import { signOut, endSession, setSessionTimeFrame, getAllVotesForSession, sumbitVote } from "../actions";

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
      sliderValue: 50,
      isDrawerOpen: false,
      mode: "audience"
    };
  }

  componentDidUpdate(prevProps){
    const isSpeaker = this.props.authDetails && (this.props.authDetails.user.uid === this.props.currentSessionDetails.details.speakerId);

    if(!isSpeaker && this.props.isSessionActive){
        if(prevProps.timeInterval !== undefined && (prevProps.timeInterval !== this.props.timeInterval)){
          console.warn('sending')
            this.props.sumbitVote(this.state.sliderValue,this.props.timeInterval, this.props.currentSessionDetails.id )
        }
    }
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

  handleChangeSlider = (e, value) => {
    console.warn(e, value);
    this.setState({ sliderValue: value });
  };

  getEmoji = () => {
    if (this.state.sliderValue <= 20) {
      return "😫";
    } else if (this.state.sliderValue <= 40 && this.state.sliderValue > 20) {
      return "😕 ";
    } else if (this.state.sliderValue <= 60 && this.state.sliderValue > 40) {
      return "😐";
    } else if (this.state.sliderValue <= 80 && this.state.sliderValue > 60) {
      return "🙂";
    } else if (this.state.sliderValue > 80) return "🤩";
  };

  render() {
    const { classes } = this.props;

    const comments = ["so interesting", "amazing", "much wow", "5 stars"];
    let emoji = this.getEmoji();

    const isSpeaker = this.props.authDetails && this.props.currentSessionDetails && (this.props.authDetails.user.uid === this.props.currentSessionDetails.details.speakerId);

    return (
      <div className={classes.root}>
        {isSpeaker ? (
          <SpeakerRoomView
            comments={comments}
            handleCloseRoom={this.handleCloseRoom}
            sessionDetails={this.props.currentSessionDetails}
            setSessionTimeFrame={this.props.setSessionTimeFrame}
          />
        ) : (
          <AudienceRoomView
            commentError={this.state.commentError}
            handleChange={this.handleChangeSlider}
            handleSubmit={this.handleSubmitComment}
            emoji={emoji}
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
    currentSessionDetails: selectors.getCurrentSessionDetails(state),
    isSessionActive: selectors.getIsCurrentSessionActive(state),
    timeInterval: selectors.getSessionTimeInterval(state),
  };
};

export default compose(
  connect(mapStateToProps, {signOut, endSession, setSessionTimeFrame, getAllVotesForSession, sumbitVote}),
  withStyles(styles)
)(RoomViewContainer);
