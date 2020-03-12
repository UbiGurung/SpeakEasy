import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AudienceRoomView from "./AudienceRoomView";
import SpeakerRoomView from "./SpeakerRoomView";
import { SwipeableDrawer } from "@material-ui/core";

const styles = {
  root: { textAlign: "center" }
};

const RoomView = props => {
  const { classes } = props;

  var mode = "speaker";

  return (
    <div className={classes.root}>
      {mode === "speaker" ? <SpeakerRoomView /> : <AudienceRoomView />}
      <SwipeableDrawer anchor="bottom" open={false}>
        <div style={{ height: "50vh" }}>HEYYYY</div>
      </SwipeableDrawer>
    </div>
  );
};

export default withStyles(styles)(RoomView);
