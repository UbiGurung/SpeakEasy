import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Slider } from "@material-ui/core";
import { theme } from "../../config/theme";

const styles = {
  root: { margin: "24px" },
  sendFeedbackButton: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent,
    fontWeight: "700",
    color: theme.colours.text
  }
};

const EmojiSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0"
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 6,
    color: theme.colours.orange
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 6
  }
})(Slider);

const AudienceRoomView = props => {
  const { classes, commentError, handleChange, handleSubmit, emoji } = props;

  function EmojiThumb(props) {
    console.warn(props);
    return (
      <span {...props}>
        <span style={{ fontSize: "45px" }}>{emoji}</span>
      </span>
    );
  }

  return (
    <div className={classes.root}>
      <Typography>Introduction Speech</Typography>
      <Typography>by Sir Speaksalot</Typography>
      <EmojiSlider
        ThumbComponent={EmojiThumb}
        defaultValue={50}
        onChangeCommitted={(e, value) => handleChange(e, value)}
      />
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
        onClick={() => handleSubmit()}
      >
        >
      </Button>
    </div>
  );
};

export default withStyles(styles)(AudienceRoomView);
