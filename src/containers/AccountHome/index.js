import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Account from "./Account";
import AudienceView from "./AudienceView";
import SpeakerView from "./SpeakerView";
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
        <Account />
        <SwipeableViews>
          <AudienceView />
          <SpeakerView />
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
