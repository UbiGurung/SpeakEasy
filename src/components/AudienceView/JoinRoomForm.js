import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function JoinRoomForm() {
  const classes = useStyles();
  return <div className={classes.root}>Join Room Form</div>;
}

export default JoinRoomForm;
