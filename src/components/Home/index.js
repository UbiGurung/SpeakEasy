import React from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "./AppBar";
import FeedbackControls from "../Participants/FeedbackControls";
import AudienceView from "../AudienceView";
import SpeakerView from "../SpeakerView";
import SwipeViews from "../SwipeViewTest";

class Home extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <SwipeableViews>
          <SpeakerView />
          <AudienceView />
        </SwipeableViews>
      </div>
    );
  }
}

export default Home;
