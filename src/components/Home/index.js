import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
// import AppBar from "./AppBar";
// import FeedbackControls from "../Participants/FeedbackControls";
import AccountHeader from "./AccountHeader";
import AudienceView from "../AudienceView";
import SpeakerView from "../SpeakerView";
// import SwipeViews from "../SwipeViewTest";
import { theme } from "../../config/theme";

const styles = {
  root: {
    background: theme.colours.background,
    color: theme.colours.text
  }
};

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AccountHeader />
        <SwipeableViews>
          <AudienceView />
          <SpeakerView />
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
