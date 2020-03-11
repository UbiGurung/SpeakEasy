import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function RoomHistory() {
  const classes = useStyles();
  return <div className={classes.root}>Room History</div>;
}

export default RoomHistory;
