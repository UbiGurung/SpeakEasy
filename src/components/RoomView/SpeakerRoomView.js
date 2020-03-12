import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Chip } from "@material-ui/core";

const styles = {
  root: { margin: "24px" },
  commentList: { display: "inline-grid" },
  comment: { margin: "6px" }
};

const SpeakerRoomView = props => {
  const { classes } = props;

  const comments = ["so interesting", "amazing", "much wow", "5 stars"];

  return (
    <div className={classes.root}>
      <Typography variant="h3">2:45</Typography>
      <Typography variant="h1">
        <span role="img" aria-label="emoji">
          😍
        </span>
      </Typography>
      <div className={classes.commentList}>
        {comments.map(comment => (
          <Chip label={comment} className={classes.comment} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(SpeakerRoomView);
