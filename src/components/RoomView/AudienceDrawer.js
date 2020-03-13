import React from "react";
import "emoji-slider";
import { withStyles } from "@material-ui/core/styles";
import SocialRoomTemperatureChart from "../Chart/SocialRoomTemperatureChart";
import { Typography } from "@material-ui/core";

const styles = {
  root: {}
};

const AudienceDrawer = props => {
  const { classes, chartData } = props;

  return (
    <div className={classes.root}>
      <div>
        <Typography>votes over meeting</Typography>
        <SocialRoomTemperatureChart chartData={chartData} />
      </div>
    </div>
  );
};

export default withStyles(styles)(AudienceDrawer);
