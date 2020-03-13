import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Chip, Button } from "@material-ui/core";
import { theme } from "../../config/theme";

import SocialRoomTemperatureChart from '../Chart/SocialRoomTemperatureChart';

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

class SpeakerRoomView extends React.Component{
  componentDidMount(){
    let timeFrame = 1;
    setInterval(() => {
      this.props.setSessionTimeFrame(this.props.sessionDetails.id, timeFrame);
      timeFrame++
    }, 10000)
  }

  render(){
    const { classes, comments, handleCloseRoom, sessionDetails } = this.props;

    return(
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
        <SocialRoomTemperatureChart />
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
    )
  }
}

export default withStyles(styles)(SpeakerRoomView);
