import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Account from "./Account";
import AudienceView from "./AudienceView";
import SpeakerView from "./SpeakerView";
import { theme } from "../../config/theme";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

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
          <SpeakerView />
          <AudienceView />
        </SwipeableViews>
        {/* <BottomNavigation className={classes.root}>
          <BottomNavigationAction
            label="Favorites"
            icon={<RecordVoiceOverIcon />}
          />
          <BottomNavigationAction label="Recents" icon={<VisibilityIcon />} />
        </BottomNavigation> */}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
