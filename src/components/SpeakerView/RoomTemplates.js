import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {}
}));

function RoomTemplates() {
  const classes = useStyles();
  return <div className={classes.root}>Room Templates</div>;
}

export default RoomTemplates;
