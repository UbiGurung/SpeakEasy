import React from "react";
import "emoji-slider";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {}
};

const AudienceDrawer = props => {
  const { classes } = props;

  return <div className={classes.root}>AUDIENCE GRAPH</div>;
};

export default withStyles(styles)(AudienceDrawer);
