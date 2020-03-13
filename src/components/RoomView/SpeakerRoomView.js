import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Chip, Button } from "@material-ui/core";
import { theme } from "../../config/theme";

const styles = {
  root: { margin: "24px" },
  commentList: { display: "inline-grid" },
  comment: { margin: "6px" },
  button: {
    width: "fit-content",
    alignSelf: "flex-end",
    background: theme.colours.accent
  }
};

const SpeakerRoomView = props => {
  const { classes, comments, handleCloseRoom, sessionDetails } = props;

  console.warn({sessionDetails})

  return (
    <div className={classes.root}>
      <Typography variant="h3">{sessionDetails.id}</Typography>
      <Typography variant="h1">
        <span role="img" aria-label="emoji">
          😍
        </span>
      </Typography>
      <div className={classes.commentList}>
        {comments.map(comment => (
          <Chip label={comment} className={classes.comment} key={comment} />
        ))}
      </div>
      <div>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => handleCloseRoom()}
        >
          Close Room
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(SpeakerRoomView);
