import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AttendanceHistory from "./AttendanceHistory";
import JoinRoomForm from "./JoinRoomForm";
import svg from "../../static/divider.svg";

const styles = {
  root: { textAlign: "center", minHeight: "75vh" }
};

const AudienceView = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <JoinRoomForm />
      {/* <img alt="" src={svg} /> */}
      <AttendanceHistory />
    </div>
  );
};

export default withStyles(styles)(AudienceView);
