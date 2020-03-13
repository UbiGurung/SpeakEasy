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
  const {
    classes,
    commentError,
    handleChange,
    handleSubmit,
    handleSlide,
    emoji,
    sliderValue
  } = props;
  
  return (
    <div className={classes.root}>
      <Typography>Introduction Speech</Typography>
      <Typography>by Sir Speaksalot</Typography>
      <emoji-slider
        id="rangeSlider"
        emoji={emoji}
        value={sliderValue}
        onChange={handleSlide}
      ></emoji-slider>
      <Typography>your experience in one word</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        error={commentError}
        helperText={commentError}
        onChange={handleChange}
      />
      <Button
        className={classes.sendFeedbackButton}
        variant="outlined"
        onClick={() => handleSubmit()}
      >
        >
      </Button>
    </div>
  );
};

export default withStyles(styles)(AudienceRoomView);
