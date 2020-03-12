import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AudienceRoomView from "../components/RoomView/AudienceRoomView";
import SpeakerRoomView from "../components/RoomView/SpeakerRoomView";
import { SwipeableDrawer } from "@material-ui/core";
import { connect } from "react-redux";
import { getAuthUser } from "../selectors";

import { signOut /*joinSession,*/ } from "../actions";

const styles = {
  root: { textAlign: "center" }
};

class AudienceViewContainer extends React.Component {
  render() {
    const { classes } = this.props;

    const mode = "speaker";

    return (
      <div className={classes.root}>
        {mode === "speaker" ? <SpeakerRoomView /> : <AudienceRoomView />}
        <SwipeableDrawer anchor="bottom" open={false}>
          <div style={{ height: "50vh" }}>HEYYYY</div>
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: getAuthUser(state)
    // mode: ////getmode
  };
};

export default connect(mapStateToProps, { /*joinSession,*/ signOut })(
  withStyles(styles)(AudienceViewContainer)
);
