import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AudienceRoomView from "../components/RoomView/AudienceRoomView";
import SpeakerRoomView from "../components/RoomView/SpeakerRoomView";
import SpeakerDrawer from "../components/RoomView/SpeakerDrawer";
import AudienceDrawer from "../components/RoomView/AudienceDrawer";
import { SwipeableDrawer } from "@material-ui/core";
import { connect } from "react-redux";
import {compose} from 'ramda';
import { getAuthUser } from "../selectors";

import { signOut /*joinSession,*/ } from "../actions";

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

  handleCancelRoom = () => {};

  handleCloseRoom = () => {};

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
    console.warn({state: this.props.state})
    const { classes } = this.props;

    const comments = ["so interesting", "amazing", "much wow", "5 stars"];

    const sliderEmoji = this.getSliderEmoji();

    return (
      <div className={classes.root}>
        {this.state.mode === "speaker" ? (
          <SpeakerRoomView
            comments={comments}
            handleCancelRoom={this.handleCancelRoom}
            handleCloseRoom={this.handleCloseRoom}
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
          {this.state.mode === "speaker" ? (
            <SpeakerDrawer />
          ) : (
            <AudienceDrawer />
          )}
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: getAuthUser(state),
    state
  };
};

export default compose(
  connect(mapStateToProps, {signOut}),
  withStyles(styles)
)(RoomViewContainer);
