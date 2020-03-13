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
    background: theme.colours.accent,
    fontWeight: "700",
    color: theme.colours.text
  }
};

class SpeakerRoomView extends React.Component {
  componentDidMount() {
    let timeFrame = 1;
    setInterval(() => {
      this.props.setSessionTimeFrame(this.props.sessionDetails.id, timeFrame);
      timeFrame++;
    }, 10000);
  }

  getEmoji = value => {
    console.warn("value", value);
    if (value <= 20) {
      return "😫";
    } else if (value <= 40 && value > 20) {
      return "😕 ";
    } else if (value <= 60 && value > 40) {
      return "😐";
    } else if (value <= 80 && value > 60) {
      return "🙂";
    } else if (value > 80) return "🤩";
  };

  render() {
    const {
      classes,
      comments,
      handleCloseRoom,
      sessionDetails,
      chartData,
      timeInterval
    } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h3">{sessionDetails.id}</Typography>
        <Typography variant="h1">
          <span role="img" aria-label="emoji">
            {this.getEmoji(
              chartData[timeInterval] ? chartData[timeInterval].y : 50
            )}
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
  }
}

export default withStyles(styles)(SpeakerRoomView);
