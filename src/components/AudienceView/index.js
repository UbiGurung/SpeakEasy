import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AttendanceHistory from "./";
import JoinRoomForm from "./";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function AudienceView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <JoinRoomForm />
      <AttendanceHistory />
    </div>
  );
}

export default AudienceView;
