import React from "react";
import "emoji-slider";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

const styles = {
  root: { margin: "24px" },
  sendFeedbackButton: {
    width: "fit-content",
    alignSelf: "flex-end"
  }
};

const AudienceRoomView = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography>Introduction Speech</Typography>
      <Typography>by Sir Speaksalot</Typography>
      <emoji-slider id="rangeSlider" emoji="😍"></emoji-slider>
      <Typography>your experience in one word</Typography>
      <TextField id="outlined-basic" variant="outlined" />
      <Button className={classes.sendFeedbackButton} variant="outlined">
        >
      </Button>
    </div>
  );
};

export default withStyles(styles)(AudienceRoomView);
