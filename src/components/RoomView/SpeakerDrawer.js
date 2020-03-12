import React from "react";
import "emoji-slider";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {}
};

const SpeakerDrawer = props => {
  const { classes } = props;

  return <div className={classes.root}>SPEAKER GRAPH</div>;
};

export default withStyles(styles)(SpeakerDrawer);
